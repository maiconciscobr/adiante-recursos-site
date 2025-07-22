// Constantes do projeto Adiante Recursos

export const COMPANY_INFO = {
  name: 'Adiante Recursos',
  whatsapp: '(11) 98863-3848',
  whatsappLink: 'https://wa.me/5511988633848',
  cnae: '7020-4/00 - Atividades de consultoria em gestão empresarial',
  regime: 'Simples Nacional'
};

export const SERVICE_INFO = {
  minValue: 1000,
  maxValue: 10000,
  adianteRate: 0.20, // 20%
  maxInstallments: 12,
  bankRates: {
    '2-6': 0.02, // 2% ao mês
    '7-12': 0.025 // 2.5% ao mês (média entre 2.5% e 3.0%)
  }
};

export const TARGET_AUDIENCE = [
  'Servidores públicos',
  'Aposentados',
  'MEI (Microempreendedores Individuais)',
  'Pequenas empresas'
];

export const DIFFERENTIALS = [
  {
    title: 'Clareza',
    description: 'Todos os custos explicitados previamente',
    icon: 'Eye'
  },
  {
    title: 'Conforto',
    description: 'Parcelamento adaptado ao perfil do cliente',
    icon: 'Heart'
  },
  {
    title: 'Suporte',
    description: 'Acompanhamento durante todo o processo',
    icon: 'Users'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Maria Silva',
    role: 'Servidora Pública',
    content: 'O atendimento foi excepcional e consegui o adiantamento que precisava de forma rápida e transparente.',
    rating: 5
  },
  {
    name: 'João Santos',
    role: 'Aposentado',
    content: 'Processo muito claro, sem surpresas. Recomendo para quem precisa de recursos com planejamento.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    role: 'MEI',
    content: 'Consegui expandir meu negócio com o adiantamento. O parcelamento se adequou perfeitamente ao meu orçamento.',
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Quais são os valores disponíveis para adiantamento?',
    answer: 'Oferecemos adiantamentos de R$ 1.000 a R$ 10.000, com taxa fixa de 20% sobre o valor solicitado.'
  },
  {
    question: 'Como funciona o parcelamento?',
    answer: 'O parcelamento pode ser feito em até 12x no cartão de crédito, com taxas bancárias que variam de 2% a 3% ao mês dependendo do número de parcelas.'
  },
  {
    question: 'Quem pode solicitar o adiantamento?',
    answer: 'Nosso foco são servidores públicos, aposentados, MEIs e pequenas empresas que precisam de planejamento financeiro.'
  },
  {
    question: 'Qual o prazo para aprovação?',
    answer: 'O processo é rápido e transparente. Após a análise da documentação, a aprovação pode ocorrer em até 24 horas.'
  },
  {
    question: 'Há custos ocultos?',
    answer: 'Não! Trabalhamos com total transparência. Todos os custos são explicitados previamente, incluindo nossa taxa de 20% e as taxas bancárias do parcelamento.'
  }
];

export const NAVIGATION_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Simulador', href: '#simulador' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: 'https://wa.me/5511988633848' }
];

