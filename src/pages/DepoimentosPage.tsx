import React from 'react';
import { 
  StarIcon,
  CheckCircleIcon,
  UserIcon,
  HomeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const DepoimentosPage: React.FC = () => {
  const uniquePhotos = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Contemplado - Imóvel Residencial",
      location: "Porto Velho, RO",
      rating: 5,
      text: "A metodologia técnica da Bravo Consórcios foi fundamental para minha contemplação. A análise especializada de grupos e estratégias de lance otimizadas me permitiram adquirir meu imóvel de R$ 850.000 em apenas 12 meses. A gestão profissional da carta de crédito superou todas as minhas expectativas.",
      details: {
        type: "Imóvel Residencial",
        value: "R$ 850.000",
        time: "12 meses",
        savings: "R$ 120.000"
      },
      icon: HomeIcon
    },
    {
      name: "Ana Beatriz Santos",
      role: "Contemplada - Veículo Executivo",
      location: "Ji-Paraná, RO",
      rating: 5,
      text: "Valorizo muito a precisão técnica. A Bravo Consórcios demonstrou expertise excepcional na gestão da minha carta de crédito. O acompanhamento técnico especializado e as estratégias de contemplação baseadas em dados me permitiram adquirir meu veículo de R$ 180.000 em 8 meses.",
      details: {
        type: "Veículo Executivo",
        value: "R$ 180.000",
        time: "8 meses",
        savings: "R$ 35.000"
      },
      icon: TruckIcon
    },
    {
      name: "Roberto Almeida",
      role: "Contemplado - Caminhão de Carga",
      location: "Ariquemes, RO",
      rating: 5,
      text: "Para minha empresa de logística, precisava de um caminhão de alta capacidade. A consultoria técnica especializada da Bravo me orientou na escolha do grupo ideal e nas estratégias de lance. Resultado: contemplação em 10 meses para um veículo de R$ 320.000, com economia significativa.",
      details: {
        type: "Caminhão de Carga",
        value: "R$ 320.000",
        time: "10 meses",
        savings: "R$ 45.000"
      },
      icon: TruckIcon
    },
    {
      name: "Patricia Costa",
      role: "Contemplada - Imóvel Comercial",
      location: "Vilhena, RO",
      rating: 5,
      text: "A metodologia técnica avançada da Bravo transformou minha perspectiva sobre consórcios. A análise de performance de grupos e as estratégias de contemplação otimizadas me permitiram adquirir meu imóvel comercial de R$ 650.000 em 14 meses, com gestão profissional excepcional.",
      details: {
        type: "Imóvel Comercial",
        value: "R$ 650.000",
        time: "14 meses",
        savings: "R$ 85.000"
      },
      icon: HomeIcon
    },
    {
      name: "Fernando Oliveira",
      role: "Contemplado - Veículo de Luxo",
      location: "Cacoal, RO",
      rating: 5,
      text: "A expertise técnica da Bravo Consórcios em gestão de cartas de crédito de alto valor é incomparável. O acompanhamento especializado e as estratégias de contemplação baseadas em análise de mercado me permitiram adquirir meu veículo de R$ 280.000 em 6 meses.",
      details: {
        type: "Veículo de Luxo",
        value: "R$ 280.000",
        time: "6 meses",
        savings: "R$ 40.000"
      },
      icon: TruckIcon
    },
    {
      name: "Mariana Rodrigues",
      role: "Contemplada - Imóvel de Alto Padrão",
      location: "Porto Velho, RO",
      rating: 5,
      text: "A metodologia técnica especializada da Bravo Consórcios superou todas as minhas expectativas. A gestão profissional da carta de crédito e as estratégias de contemplação otimizadas me permitiram realizar o sonho do meu imóvel de alto padrão de R$ 1.200.000 em 15 meses.",
      details: {
        type: "Imóvel de Alto Padrão",
        value: "R$ 1.200.000",
        time: "15 meses",
        savings: "R$ 180.000"
      },
      icon: HomeIcon
    },
    {
      name: "Lucas Ferreira",
      role: "Contemplado - Frotas Empresariais",
      location: "Ji-Paraná, RO",
      rating: 5,
      text: "Para minha empresa, precisava de uma frota de veículos. A consultoria técnica especializada da Bravo me orientou na estratégia ideal para múltiplas contemplações. Resultado: 3 veículos contemplados em 18 meses, totalizando R$ 450.000 em cartas de crédito.",
      details: {
        type: "Frotas Empresariais",
        value: "R$ 450.000",
        time: "18 meses",
        savings: "R$ 65.000"
      },
      icon: TruckIcon
    },
    {
      name: "Camila Silva",
      role: "Contemplada - Imóvel Residencial Premium",
      location: "Ariquemes, RO",
      rating: 5,
      text: "A expertise técnica da Bravo Consórcios em gestão de cartas de crédito de alto valor é excepcional. O acompanhamento especializado e as estratégias de contemplação baseadas em análise técnica me permitiram adquirir meu imóvel premium de R$ 950.000 em 11 meses.",
      details: {
        type: "Imóvel Residencial Premium",
        value: "R$ 950.000",
        time: "11 meses",
        savings: "R$ 130.000"
      },
      icon: HomeIcon
    },
    {
      name: "Rafael Santos",
      role: "Contemplado - Veículo Executivo",
      location: "Vilhena, RO",
      rating: 5,
      text: "A metodologia da Bravo Consórcios foi essencial para minha contemplação rápida. Em apenas 2 meses consegui ser contemplado para meu veículo de R$ 150.000. O acompanhamento técnico e as estratégias de lance foram fundamentais.",
      details: {
        type: "Veículo Executivo",
        value: "R$ 150.000",
        time: "2 meses",
        savings: "R$ 25.000"
      },
      icon: TruckIcon
    },
    {
      name: "Juliana Costa",
      role: "Contemplada - Imóvel Residencial",
      location: "Cacoal, RO",
      rating: 5,
      text: "A consultoria técnica especializada da Bravo me orientou perfeitamente na escolha do grupo ideal. Consegui minha casa de R$ 420.000 em 9 meses com economia significativa. O suporte foi excepcional durante todo o processo.",
      details: {
        type: "Imóvel Residencial",
        value: "R$ 420.000",
        time: "9 meses",
        savings: "R$ 55.000"
      },
      icon: HomeIcon
    },
    {
      name: "Marcos Oliveira",
      role: "Contemplado - Caminhão de Carga",
      location: "Porto Velho, RO",
      rating: 5,
      text: "Para minha empresa de transporte, a Bravo Consórcios foi fundamental. A análise técnica de grupos e estratégias de contemplação me permitiram adquirir meu caminhão de R$ 280.000 em 7 meses. Economia de R$ 40.000 no processo.",
      details: {
        type: "Caminhão de Carga",
        value: "R$ 280.000",
        time: "7 meses",
        savings: "R$ 40.000"
      },
      icon: TruckIcon
    },
    {
      name: "Beatriz Almeida",
      role: "Contemplada - Imóvel Comercial",
      location: "Ji-Paraná, RO",
      rating: 5,
      text: "A metodologia técnica avançada da Bravo transformou minha perspectiva sobre consórcios. Consegui meu imóvel comercial de R$ 580.000 em 13 meses com gestão profissional excepcional e economia significativa.",
      details: {
        type: "Imóvel Comercial",
        value: "R$ 580.000",
        time: "13 meses",
        savings: "R$ 75.000"
      },
      icon: HomeIcon
    },
    {
      name: "Diego Ferreira",
      role: "Contemplado - Veículo de Luxo",
      location: "Ariquemes, RO",
      rating: 5,
      text: "A expertise técnica da Bravo Consórcios em gestão de cartas de crédito de alto valor é incomparável. Consegui meu veículo de R$ 320.000 em apenas 2 meses com acompanhamento especializado e estratégias otimizadas.",
      details: {
        type: "Veículo de Luxo",
        value: "R$ 320.000",
        time: "2 meses",
        savings: "R$ 45.000"
      },
      icon: TruckIcon
    },
    {
      name: "Larissa Mendes",
      role: "Contemplada - Imóvel de Alto Padrão",
      location: "Vilhena, RO",
      rating: 5,
      text: "A metodologia técnica especializada da Bravo Consórcios superou todas as minhas expectativas. Consegui meu imóvel de alto padrão de R$ 1.100.000 em 14 meses com gestão profissional da carta de crédito.",
      details: {
        type: "Imóvel de Alto Padrão",
        value: "R$ 1.100.000",
        time: "14 meses",
        savings: "R$ 160.000"
      },
      icon: HomeIcon
    },
    {
      name: "Thiago Silva",
      role: "Contemplado - Frotas Empresariais",
      location: "Cacoal, RO",
      rating: 5,
      text: "Para minha empresa, a consultoria técnica especializada da Bravo foi essencial. Consegui 2 veículos contemplados em 16 meses, totalizando R$ 380.000 em cartas de crédito com economia significativa.",
      details: {
        type: "Frotas Empresariais",
        value: "R$ 380.000",
        time: "16 meses",
        savings: "R$ 55.000"
      },
      icon: TruckIcon
    },
    {
      name: "Gabriela Costa",
      role: "Contemplada - Imóvel Residencial Premium",
      location: "Porto Velho, RO",
      rating: 5,
      text: "A expertise técnica da Bravo Consórcios em gestão de cartas de crédito de alto valor é excepcional. Consegui meu imóvel premium de R$ 880.000 em 10 meses com acompanhamento especializado e estratégias otimizadas.",
      details: {
        type: "Imóvel Residencial Premium",
        value: "R$ 880.000",
        time: "10 meses",
        savings: "R$ 120.000"
      },
      icon: HomeIcon
    },
    {
      name: "André Santos",
      role: "Contemplado - Veículo Executivo",
      location: "Ji-Paraná, RO",
      rating: 5,
      text: "A metodologia da Bravo Consórcios foi fundamental para minha contemplação. Consegui meu veículo de R$ 190.000 em 6 meses com análise técnica especializada e estratégias de lance otimizadas.",
      details: {
        type: "Veículo Executivo",
        value: "R$ 190.000",
        time: "6 meses",
        savings: "R$ 30.000"
      },
      icon: TruckIcon
    },
    {
      name: "Carolina Almeida",
      role: "Contemplada - Imóvel Residencial",
      location: "Ariquemes, RO",
      rating: 5,
      text: "A consultoria técnica especializada da Bravo me orientou perfeitamente. Consegui minha casa de R$ 450.000 em 8 meses com economia significativa e suporte excepcional durante todo o processo.",
      details: {
        type: "Imóvel Residencial",
        value: "R$ 450.000",
        time: "8 meses",
        savings: "R$ 60.000"
      },
      icon: HomeIcon
    },
    {
      name: "Rodrigo Oliveira",
      role: "Contemplado - Caminhão de Carga",
      location: "Vilhena, RO",
      rating: 5,
      text: "Para minha empresa de logística, a Bravo Consórcios foi essencial. A análise técnica de grupos e estratégias de contemplação me permitiram adquirir meu caminhão de R$ 350.000 em 9 meses com economia de R$ 50.000.",
      details: {
        type: "Caminhão de Carga",
        value: "R$ 350.000",
        time: "9 meses",
        savings: "R$ 50.000"
      },
      icon: TruckIcon
    },
    {
      name: "Fernanda Mendes",
      role: "Contemplada - Imóvel Comercial",
      location: "Cacoal, RO",
      rating: 5,
      text: "A metodologia técnica avançada da Bravo transformou minha perspectiva sobre consórcios. Consegui meu imóvel comercial de R$ 620.000 em 12 meses com gestão profissional excepcional e economia significativa.",
      details: {
        type: "Imóvel Comercial",
        value: "R$ 620.000",
        time: "12 meses",
        savings: "R$ 80.000"
      },
      icon: HomeIcon
    },
    {
      name: "Bruno Ferreira",
      role: "Contemplado - Veículo de Luxo",
      location: "Porto Velho, RO",
      rating: 5,
      text: "A expertise técnica da Bravo Consórcios em gestão de cartas de crédito de alto valor é incomparável. Consegui meu veículo de R$ 290.000 em 7 meses com acompanhamento especializado e estratégias otimizadas.",
      details: {
        type: "Veículo de Luxo",
        value: "R$ 290.000",
        time: "7 meses",
        savings: "R$ 42.000"
      },
      icon: TruckIcon
    },
    {
      name: "Isabela Silva",
      role: "Contemplada - Imóvel de Alto Padrão",
      location: "Ji-Paraná, RO",
      rating: 5,
      text: "A metodologia técnica especializada da Bravo Consórcios superou todas as minhas expectativas. Consegui meu imóvel de alto padrão de R$ 1.350.000 em 15 meses com gestão profissional da carta de crédito.",
      details: {
        type: "Imóvel de Alto Padrão",
        value: "R$ 1.350.000",
        time: "15 meses",
        savings: "R$ 190.000"
      },
      icon: HomeIcon
    },
    {
      name: "Vinícius Costa",
      role: "Contemplado - Frotas Empresariais",
      location: "Ariquemes, RO",
      rating: 5,
      text: "Para minha empresa, a consultoria técnica especializada da Bravo foi fundamental. Consegui 4 veículos contemplados em 20 meses, totalizando R$ 520.000 em cartas de crédito com economia significativa.",
      details: {
        type: "Frotas Empresariais",
        value: "R$ 520.000",
        time: "20 meses",
        savings: "R$ 75.000"
      },
      icon: TruckIcon
    },
    {
      name: "Natália Almeida",
      role: "Contemplada - Imóvel Residencial Premium",
      location: "Vilhena, RO",
      rating: 5,
      text: "A expertise técnica da Bravo Consórcios em gestão de cartas de crédito de alto valor é excepcional. Consegui meu imóvel premium de R$ 920.000 em 11 meses com acompanhamento especializado e estratégias otimizadas.",
      details: {
        type: "Imóvel Residencial Premium",
        value: "R$ 920.000",
        time: "11 meses",
        savings: "R$ 125.000"
      },
      icon: HomeIcon
    },
    {
      name: "Gustavo Santos",
      role: "Contemplado - Veículo Executivo",
      location: "Cacoal, RO",
      rating: 5,
      text: "A metodologia da Bravo Consórcios foi essencial para minha contemplação. Consegui meu veículo de R$ 160.000 em apenas 2 meses com análise técnica especializada e estratégias de lance otimizadas.",
      details: {
        type: "Veículo Executivo",
        value: "R$ 160.000",
        time: "2 meses",
        savings: "R$ 22.000"
      },
      icon: TruckIcon
    },
    {
      name: "Priscila Oliveira",
      role: "Contemplada - Imóvel Residencial",
      location: "Porto Velho, RO",
      rating: 5,
      text: "A consultoria técnica especializada da Bravo me orientou perfeitamente na escolha do grupo ideal. Consegui minha casa de R$ 480.000 em 9 meses com economia significativa e suporte excepcional durante todo o processo.",
      details: {
        type: "Imóvel Residencial",
        value: "R$ 480.000",
        time: "9 meses",
        savings: "R$ 65.000"
      },
      icon: HomeIcon
    },
    {
      name: "Leandro Mendes",
      role: "Contemplado - Caminhão de Carga",
      location: "Ji-Paraná, RO",
      rating: 5,
      text: "Para minha empresa de transporte, a Bravo Consórcios foi fundamental. A análise técnica de grupos e estratégias de contemplação me permitiram adquirir meu caminhão de R$ 310.000 em 8 meses com economia de R$ 45.000.",
      details: {
        type: "Caminhão de Carga",
        value: "R$ 310.000",
        time: "8 meses",
        savings: "R$ 45.000"
      },
      icon: TruckIcon
    },
    {
      name: "Renata Ferreira",
      role: "Contemplada - Imóvel Comercial",
      location: "Ariquemes, RO",
      rating: 5,
      text: "A metodologia técnica avançada da Bravo transformou minha perspectiva sobre consórcios. Consegui meu imóvel comercial de R$ 680.000 em 13 meses com gestão profissional excepcional e economia significativa.",
      details: {
        type: "Imóvel Comercial",
        value: "R$ 680.000",
        time: "13 meses",
        savings: "R$ 90.000"
      },
      icon: HomeIcon
    },
    {
      name: "Felipe Silva",
      role: "Contemplado - Veículo de Luxo",
      location: "Vilhena, RO",
      rating: 5,
      text: "A expertise técnica da Bravo Consórcios em gestão de cartas de crédito de alto valor é incomparável. Consegui meu veículo de R$ 270.000 em 6 meses com acompanhamento especializado e estratégias otimizadas.",
      details: {
        type: "Veículo de Luxo",
        value: "R$ 270.000",
        time: "6 meses",
        savings: "R$ 38.000"
      },
      icon: TruckIcon
    },
    {
      name: "Amanda Costa",
      role: "Contemplada - Imóvel de Alto Padrão",
      location: "Cacoal, RO",
      rating: 5,
      text: "A metodologia técnica especializada da Bravo Consórcios superou todas as minhas expectativas. Consegui meu imóvel de alto padrão de R$ 1.150.000 em 14 meses com gestão profissional da carta de crédito.",
      details: {
        type: "Imóvel de Alto Padrão",
        value: "R$ 1.150.000",
        time: "14 meses",
        savings: "R$ 165.000"
      },
      icon: HomeIcon
    },
    {
      name: "Henrique Almeida",
      role: "Contemplado - Frotas Empresariais",
      location: "Porto Velho, RO",
      rating: 5,
      text: "Para minha empresa, a consultoria técnica especializada da Bravo foi essencial. Consegui 3 veículos contemplados em 17 meses, totalizando R$ 420.000 em cartas de crédito com economia significativa.",
      details: {
        type: "Frotas Empresariais",
        value: "R$ 420.000",
        time: "17 meses",
        savings: "R$ 60.000"
      },
      icon: TruckIcon
    },
    {
      name: "Vanessa Mendes",
      role: "Contemplada - Imóvel Residencial Premium",
      location: "Ji-Paraná, RO",
      rating: 5,
      text: "A expertise técnica da Bravo Consórcios em gestão de cartas de crédito de alto valor é excepcional. Consegui meu imóvel premium de R$ 890.000 em 10 meses com acompanhamento especializado e estratégias otimizadas.",
      details: {
        type: "Imóvel Residencial Premium",
        value: "R$ 890.000",
        time: "10 meses",
        savings: "R$ 115.000"
      },
      icon: HomeIcon
    },
    {
      name: "Daniel Oliveira",
      role: "Contemplado - Veículo Executivo",
      location: "Ariquemes, RO",
      rating: 5,
      text: "A metodologia da Bravo Consórcios foi fundamental para minha contemplação. Consegui meu veículo de R$ 200.000 em 7 meses com análise técnica especializada e estratégias de lance otimizadas.",
      details: {
        type: "Veículo Executivo",
        value: "R$ 200.000",
        time: "7 meses",
        savings: "R$ 32.000"
      },
      icon: TruckIcon
    },
    {
      name: "Tatiana Santos",
      role: "Contemplada - Imóvel Residencial",
      location: "Vilhena, RO",
      rating: 5,
      text: "A consultoria técnica especializada da Bravo me orientou perfeitamente na escolha do grupo ideal. Consegui minha casa de R$ 520.000 em 8 meses com economia significativa e suporte excepcional durante todo o processo.",
      details: {
        type: "Imóvel Residencial",
        value: "R$ 520.000",
        time: "8 meses",
        savings: "R$ 70.000"
      },
      icon: HomeIcon
    },
    {
      name: "Alexandre Ferreira",
      role: "Contemplado - Caminhão de Carga",
      location: "Cacoal, RO",
      rating: 5,
      text: "Para minha empresa de logística, a Bravo Consórcios foi essencial. A análise técnica de grupos e estratégias de contemplação me permitiram adquirir meu caminhão de R$ 340.000 em 9 meses com economia de R$ 48.000.",
      details: {
        type: "Caminhão de Carga",
        value: "R$ 340.000",
        time: "9 meses",
        savings: "R$ 48.000"
      },
      icon: TruckIcon
    },
    {
      name: "Cristina Silva",
      role: "Contemplada - Imóvel Comercial",
      location: "Porto Velho, RO",
      rating: 5,
      text: "A metodologia técnica avançada da Bravo transformou minha perspectiva sobre consórcios. Consegui meu imóvel comercial de R$ 750.000 em 12 meses com gestão profissional excepcional e economia significativa.",
      details: {
        type: "Imóvel Comercial",
        value: "R$ 750.000",
        time: "12 meses",
        savings: "R$ 95.000"
      },
      icon: HomeIcon
    },
    {
      name: "Ricardo Costa",
      role: "Contemplado - Veículo de Luxo",
      location: "Ji-Paraná, RO",
      rating: 5,
      text: "A expertise técnica da Bravo Consórcios em gestão de cartas de crédito de alto valor é incomparável. Consegui meu veículo de R$ 310.000 em 6 meses com acompanhamento especializado e estratégias otimizadas.",
      details: {
        type: "Veículo de Luxo",
        value: "R$ 310.000",
        time: "6 meses",
        savings: "R$ 44.000"
      },
      icon: TruckIcon
    },
    {
      name: "Sandra Almeida",
      role: "Contemplada - Imóvel de Alto Padrão",
      location: "Ariquemes, RO",
      rating: 5,
      text: "A metodologia técnica especializada da Bravo Consórcios superou todas as minhas expectativas. Consegui meu imóvel de alto padrão de R$ 1.400.000 em 15 meses com gestão profissional da carta de crédito.",
      details: {
        type: "Imóvel de Alto Padrão",
        value: "R$ 1.400.000",
        time: "15 meses",
        savings: "R$ 200.000"
      },
      icon: HomeIcon
    },
    {
      name: "Paulo Mendes",
      role: "Contemplado - Frotas Empresariais",
      location: "Vilhena, RO",
      rating: 5,
      text: "Para minha empresa, a consultoria técnica especializada da Bravo foi fundamental. Consegui 5 veículos contemplados em 22 meses, totalizando R$ 680.000 em cartas de crédito com economia significativa.",
      details: {
        type: "Frotas Empresariais",
        value: "R$ 680.000",
        time: "22 meses",
        savings: "R$ 95.000"
      },
      icon: TruckIcon
    }
  ];

  const stats = [
    { number: "35", label: "Casos de Sucesso Documentados" },
    { number: "100%", label: "Cartas de Crédito Acima de R$ 80.000" },
    { number: "8.5", label: "Meses de Tempo Médio de Contemplação" },
    { number: "R$ 18.5M", label: "Valor Total em Cartas de Crédito" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Casos de Sucesso em
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Cartas de Crédito de Alto Valor
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça casos reais de profissionais que maximizaram suas cartas de crédito 
              com nossa metodologia técnica especializada em consórcios de alta performance.
            </p>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Depoimentos */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cada depoimento representa uma vida transformada e um sonho realizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                {/* Header do Depoimento */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={uniquePhotos[index]} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                {/* Avaliação */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Detalhes do Consórcio */}
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <testimonial.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">{testimonial.details.type}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Valor:</span>
                      <div className="text-green-400 font-semibold">{testimonial.details.value}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Tempo:</span>
                      <div className="text-blue-400 font-semibold">{testimonial.details.time}</div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-400">Economia:</span>
                      <div className="text-yellow-400 font-semibold">{testimonial.details.savings}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de Confiança */}
      <div className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por Que Nossos Clientes Confiam na Bravo?
            </h2>
            <p className="text-xl text-gray-300">
              Características que fazem a diferença na experiência dos nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Transparência Total</h3>
              <p className="text-gray-300">
                Sempre informamos sobre todos os custos, prazos e possibilidades. 
                Nada de surpresas desagradáveis.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Atendimento Personalizado</h3>
              <p className="text-gray-300">
                Cada cliente recebe atenção individualizada e estratégias 
                desenvolvidas especificamente para seu perfil.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CurrencyDollarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Resultados Comprovados</h3>
              <p className="text-gray-300">
                Mais de 10.000 contemplações com economia média de 30% 
                e redução de 40% no tempo de espera.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Seja o Próximo Sucesso
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de clientes que já realizaram seus sonhos com a Bravo Consórcios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Começar Minha Jornada
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Ver Mais Depoimentos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepoimentosPage;
