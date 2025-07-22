import React from 'react';
import { Eye, Heart, Users, ArrowRight } from 'lucide-react';
import { DIFFERENTIALS } from '../../utils/constants';

const iconMap = {
  Eye: Eye,
  Heart: Heart,
  Users: Users
};

const Differentials = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Adiante Recursos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos diferenciais garantem uma experiência única e personalizada para cada cliente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((differential, index) => {
            const IconComponent = iconMap[differential.icon];
            
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent 
                        size={32} 
                        className="text-blue-600 group-hover:text-white transition-colors duration-300" 
                      />
                    </div>
                    <div className="absolute -inset-2 bg-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {differential.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {differential.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Processo simples e transparente
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa metodologia garante que você tenha total controle e conhecimento sobre 
                cada etapa do processo, desde a simulação até a liberação dos recursos.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <span className="text-gray-700">Simulação online gratuita</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <span className="text-gray-700">Análise personalizada do seu perfil</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <span className="text-gray-700">Aprovação e liberação dos recursos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;

