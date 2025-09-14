import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  if (import.meta.env.DEV) {
    console.warn('Variáveis de ambiente do Supabase não configuradas')
  }
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})

// Tipos atualizados para as tabelas
export interface Lead {
  id?: number
  name: string
  email: string
  phone: string
  
  // Informações específicas para consórcios
  consortium_type?: 'imoveis' | 'veiculos' | 'maquinarios' | 'caminhoes' | 'alavancagem'
  desired_value?: number
  max_monthly_payment?: number
  preferred_deadline?: number
  
  // Recursos disponíveis
  has_fgts?: boolean
  fgts_value?: number
  has_initial_payment?: boolean
  initial_payment_value?: number
  
  // Perfil e urgência
  urgency_level?: 'baixa' | 'media' | 'alta' | 'urgente'
  investment_purpose?: string
  
  // Informações específicas por tipo
  vehicle_type?: string
  vehicle_value?: string
  property_type?: string
  property_location?: string
  machinery_type?: string
  truck_type?: string
  
  source: 'quiz' | 'calculator' | 'scheduler' | 'contact' | 'whatsapp'
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
  notes?: string
  created_at?: string
  updated_at?: string
}

export interface QuizResult {
  id?: number
  lead_id: number
  answers: Record<string, any>
  recommendation: Record<string, any>
  customer_profile?: Record<string, any>
  strategy?: Record<string, any>
  qualification_score?: number
  priority_level?: 'baixa' | 'normal' | 'alta' | 'urgente'
  created_at?: string
  updated_at?: string
}

export interface ConsultationBooking {
  id?: number
  lead_id: number
  package_id: string
  package_name: string
  package_price: number
  scheduled_date: string
  scheduled_time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  payment_status: 'pending' | 'paid' | 'refunded'
  notes?: string
  created_at?: string
  updated_at?: string
}

export interface AdminUser {
  id?: number
  email: string
  name: string
  password_hash?: string
  role: 'admin' | 'manager' | 'consultant'
  is_active?: boolean
  last_login?: string
  login_attempts?: number
  locked_until?: string
  two_factor_enabled?: boolean
  two_factor_secret?: string
  created_at?: string
  updated_at?: string
}

// Serviços para o site principal
export const leadsService = {
  async createLead(lead: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('leads')
      .insert([lead])
      .select()
      .single()
    
    return { data, error }
  },

  async getLeadByEmail(email: string) {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .eq('email', email)
      .single()
    
    return { data, error }
  },

  async updateLeadStatus(id: number, status: Lead['status'], notes?: string) {
    const { data, error } = await supabase
      .from('leads')
      .update({ status, notes, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  }
}

export const quizService = {
  async saveQuizResult(result: Omit<QuizResult, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('quiz_results')
      .insert([result])
      .select()
      .single()
    
    return { data, error }
  },

  async getQuizResultsByLeadId(leadId: number) {
    const { data, error } = await supabase
      .from('quiz_results')
      .select('*')
      .eq('lead_id', leadId)
      .single()
    
    return { data, error }
  }
}

export const bookingsService = {
  async createBooking(booking: Omit<ConsultationBooking, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('consultation_bookings')
      .insert([booking])
      .select()
      .single()
    
    return { data, error }
  },

  async getUpcomingBookings() {
    const { data, error } = await supabase
      .from('upcoming_bookings')
      .select('*')
      .order('scheduled_date', { ascending: true })
    
    return { data, error }
  },

  async getBookingsByLeadId(leadId: number) {
    const { data, error } = await supabase
      .from('consultation_bookings')
      .select('*')
      .eq('lead_id', leadId)
      .order('scheduled_date', { ascending: true })
    
    return { data, error }
  },

  async updateBookingStatus(id: number, status: ConsultationBooking['status']) {
    const { data, error } = await supabase
      .from('consultation_bookings')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  }
}

// Serviços para o painel admin
export const adminService = {
  async login(email: string, password: string) {
    // Primeiro, buscar o usuário pelo email
    const { data: user, error: userError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', email)
      .eq('is_active', true)
      .single()
    
    if (userError || !user) {
      return { data: null, error: 'Usuário não encontrado ou inativo' }
    }

    // Verificar se a conta está bloqueada
    if (user.locked_until && new Date(user.locked_until) > new Date()) {
      return { data: null, error: 'Conta temporariamente bloqueada' }
    }

    // Verificar a senha usando a função do banco
    const { data: passwordValid, error: passwordError } = await supabase
      .rpc('verify_password', { password, hash: user.password_hash })
    
    if (passwordError || !passwordValid) {
      // Incrementar tentativas de login
      await supabase
        .from('admin_users')
        .update({ 
          login_attempts: (user.login_attempts || 0) + 1,
          locked_until: (user.login_attempts || 0) >= 4 ? new Date(Date.now() + 15 * 60 * 1000).toISOString() : null
        })
        .eq('id', user.id)
      
      return { data: null, error: 'Senha incorreta' }
    }

    // Login bem-sucedido - resetar tentativas e atualizar último login
    await supabase
      .from('admin_users')
      .update({ 
        login_attempts: 0,
        locked_until: null,
        last_login: new Date().toISOString()
      })
      .eq('id', user.id)

    // Log de acesso bem-sucedido
    await supabase
      .from('access_logs')
      .insert([{
        admin_user_id: user.id,
        action: 'login_success',
        success: true
      }])

    return { data: user, error: null }
  },

  async getLeadsSummary() {
    const { data, error } = await supabase
      .from('leads_summary')
      .select('*')
      .single()
    
    return { data, error }
  },

  async getRecentLeads(limit: number = 50) {
    const { data, error } = await supabase
      .from('recent_leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)
    
    return { data, error }
  },

  async getHighPriorityLeads() {
    const { data, error } = await supabase
      .from('high_priority_leads')
      .select('*')
      .order('qualification_score', { ascending: false })
    
    return { data, error }
  },

  async getCustomerAnalysis() {
    const { data, error } = await supabase
      .from('customer_analysis')
      .select('*')
    
    return { data, error }
  },

  async getConversionAnalysis() {
    const { data, error } = await supabase
      .from('conversion_analysis')
      .select('*')
    
    return { data, error }
  }
}
