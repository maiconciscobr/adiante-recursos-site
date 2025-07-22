import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_ITEMS } from '../../utils/constants';

const Footer = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(COMPANY_INFO.whatsappLink, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-gray-400">
                  Planejamento financeiro e adiantamento de recursos com transparência e segurança.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">{COMPANY_INFO.regime}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">{COMPANY_INFO.cnae}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Links Rápidos
              </h4>
              <nav className="space-y-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Contato
              </h4>
              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{COMPANY_INFO.whatsapp}</span>
                </button>
                
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>contato@adianterecursos.com.br</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Horário de Atendimento
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div className="text-gray-400">
                    <p>Segunda a Sexta</p>
                    <p className="text-sm">08:00 às 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div className="text-gray-400">
                    <p>Sábado</p>
                    <p className="text-sm">08:00 às 12:00</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-900/30 p-4 rounded-lg border border-green-800">
                <p className="text-green-400 text-sm font-medium">
                  WhatsApp disponível 24h para emergências
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 {COMPANY_INFO.name}. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-200">
                Política de Privacidade
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Termos de Uso
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

