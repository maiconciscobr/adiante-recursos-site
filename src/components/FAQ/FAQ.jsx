import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "Como funciona o adiantamento de recursos?",
    answer: "O adiantamento funciona de forma simples: você solicita um valor entre R$ 1.000 e R$ 10.000, pagamos uma taxa de 20% sobre o valor solicitado, e você parcela o valor total em até 12x no cartão de crédito. Todo o processo é transparente e você conhece todos os custos antes de contratar."
  },
  {
    question: "Qual é a taxa cobrada pela Adiante Recursos?",
    answer: "Nossa taxa é fixa em 20% sobre o valor solicitado, aplicada apenas uma vez no início. Por exemplo, se você solicitar R$ 5.000, a taxa será de R$ 1.000, totalizando R$ 6.000 para parcelamento."
  },
  {
    question: "Como são calculadas as taxas bancárias?",
    answer: "As taxas bancárias variam conforme o número de parcelas: de 2x a 6x fica em torno de 2,0% ao mês, e de 7x a 12x fica entre 2,5% a 3,0% ao mês. Essas taxas são aplicadas pelo banco emissor do cartão de crédito."
  },
  {
    question: "Quem pode solicitar o adiantamento?",
    answer: "Atendemos principalmente servidores públicos, aposentados, MEI (Microempreendedores Individuais) e pequenas empresas. É necessário ter cartão de crédito com limite disponível para o parcelamento."
  },
  {
    question: "Quanto tempo demora para receber o dinheiro?",
    answer: "Após a aprovação da análise de crédito e confirmação dos dados, o valor é liberado em até 24 horas úteis. O processo de análise geralmente leva de 2 a 4 horas."
  },
  {
    question: "Preciso de garantias ou avalista?",
    answer: "Não exigimos garantias físicas nem avalista. A análise é baseada no seu perfil de crédito e capacidade de pagamento. O próprio cartão de crédito serve como meio de pagamento."
  },
  {
    question: "Posso quitar antecipadamente?",
    answer: "Sim, você pode quitar antecipadamente entrando em contato conosco. Neste caso, você pagará apenas as parcelas já vencidas mais a próxima parcela, sem multas ou taxas adicionais da nossa parte."
  },
  {
    question: "O que acontece se eu não conseguir pagar uma parcela?",
    answer: "Como o pagamento é feito via cartão de crédito, seguem as regras do seu banco emissor. Recomendamos entrar em contato conosco imediatamente para buscarmos uma solução em conjunto."
  },
  {
    question: "Vocês consultam o SPC/Serasa?",
    answer: "Sim, fazemos consulta aos órgãos de proteção ao crédito como parte da nossa análise. Porém, ter restrições não significa aprovação automática negada - analisamos cada caso individualmente."
  },
  {
    question: "Como posso acompanhar meu processo?",
    answer: "Você receberá atualizações via WhatsApp em todas as etapas do processo. Também pode entrar em contato conosco a qualquer momento pelo telefone (11) 98863-3848 para acompanhar o andamento."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de adiantamento de recursos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-left">
                      {item.question}
                    </h3>
                  </div>
                  
                  <div className="flex-shrink-0 ml-4">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                    )}
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-4">
                    <div className="pl-11">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer todas as suas questões e ajudar você a encontrar a melhor solução para suas necessidades financeiras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/5511988633848', '_blank')}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 btn-primary"
              >
                Falar no WhatsApp
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#simulador');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-105"
              >
                Fazer Simulação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

