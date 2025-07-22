import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Users, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICE_INFO, COMPANY_INFO } from '../../utils/constants';
import { formatCurrency } from '../../utils/calculations';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSimulatorClick = () => {
    const element = document.querySelector('#simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(COMPANY_INFO.whatsappLink, '_blank');
  };

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className={`space-y-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                Adiantamento de recursos com{' '}
                <span className="text-blue-600 relative">
                  planejamento financeiro
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-green-400 animate-shimmer"></div>
                </span>{' '}
              </h1>
              
              <p className={`text-xl text-gray-600 leading-relaxed animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                De {formatCurrency(SERVICE_INFO.minValue)} a {formatCurrency(SERVICE_INFO.maxValue)} - 
                Taxa de {SERVICE_INFO.adianteRate * 100}% - 
                Parcelado até {SERVICE_INFO.maxInstallments}x no cartão
              </p>
            </div>

            {/* Features */}
            <div className={`grid sm:grid-cols-3 gap-4 animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift card-interactive">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-500 animate-scale-in" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Transparência</p>
                  <p className="text-sm text-gray-600">Custos claros</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift card-interactive">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-500 animate-scale-in" style={{ animationDelay: '0.1s' }} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rapidez</p>
                  <p className="text-sm text-gray-600">Processo ágil</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift card-interactive">
                <div className="flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-500 animate-scale-in" style={{ animationDelay: '0.2s' }} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Segurança</p>
                  <p className="text-sm text-gray-600">Dados protegidos</p>
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-lift animate-fade-in-up`} style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-600 animate-float" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Especialistas em atender:
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {['Servidores públicos', 'Aposentados', 'MEI', 'Pequenas empresas'].map((item, index) => (
                  <div key={item} className={`flex items-center space-x-2 animate-fade-in-left`} style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 animate-fade-in-up`} style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={handleSimulatorClick}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-105 btn-primary hover-glow"
              >
                <span>Simular Agora</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                size="lg"
                className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover-glow"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`hidden lg:block animate-fade-in-right`} style={{ animationDelay: '1s' }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 transform rotate-3 shadow-xl hover-lift animate-float">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                      <span className="text-sm text-gray-600">Valor solicitado</span>
                      <span className="font-bold text-lg text-gray-900">R$ 5.000</span>
                    </div>
                    <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                      <span className="text-sm text-gray-600">Taxa Adiante</span>
                      <span className="font-bold text-lg text-blue-600">R$ 1.000</span>
                    </div>
                    <div className="border-t pt-4 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Parcelas 6x</span>
                        <span className="font-bold text-xl text-green-600">R$ 1.126/mês</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-green-500 rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

