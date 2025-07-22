import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, CreditCard, TrendingUp, Info, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSimulator } from '../../hooks/useSimulator';
import { formatCurrency, formatPercentage } from '../../utils/calculations';
import { SERVICE_INFO, COMPANY_INFO } from '../../utils/constants';

const Simulator = () => {
  const {
    requestedValue,
    installments,
    simulation,
    error,
    isLoading,
    updateRequestedValue,
    updateInstallments,
    runSimulation,
    resetSimulation
  } = useSimulator();

  const [showDetails, setShowDetails] = useState(false);

  // Executar simulação automaticamente quando os valores mudarem
  useEffect(() => {
    const timer = setTimeout(() => {
      runSimulation();
    }, 500);

    return () => clearTimeout(timer);
  }, [requestedValue, installments, runSimulation]);

  const handleWhatsAppClick = () => {
    const message = simulation 
      ? `Olá! Gostaria de solicitar um adiantamento de ${formatCurrency(simulation.requestedValue)} em ${simulation.installments}x. Valor da parcela: ${formatCurrency(simulation.installmentValue)}.`
      : `Olá! Gostaria de saber mais sobre o adiantamento de recursos.`;
    
    const whatsappUrl = `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const generatePDF = () => {
    // Simular geração de PDF (implementação básica)
    const content = simulation ? `
      SIMULAÇÃO DE ADIANTAMENTO - ADIANTE RECURSOS
      
      Valor solicitado: ${formatCurrency(simulation.requestedValue)}
      Taxa Adiante (${formatPercentage(simulation.adianteRatePercentage)}): ${formatCurrency(simulation.adianteRate)}
      Valor total com taxa: ${formatCurrency(simulation.totalWithAdianteRate)}
      
      Parcelamento: ${simulation.installments}x
      Taxa bancária: ${formatPercentage(simulation.bankRate)} ao mês
      Juros bancários: ${formatCurrency(simulation.totalBankInterest)}
      
      TOTAL A PAGAR: ${formatCurrency(simulation.totalPaid)}
      VALOR DA PARCELA: ${formatCurrency(simulation.installmentValue)}
      
      Simulação realizada em: ${new Date().toLocaleDateString('pt-BR')}
    ` : '';

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'simulacao-adiante-recursos.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="simulador" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simulador de Adiantamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calcule seu adiantamento de forma transparente e descubra as condições ideais para seu perfil
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Formulário de Simulação */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 lg:p-8 animate-fade-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calculator className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Configure sua simulação
                </h3>
              </div>

              <div className="space-y-6">
                {/* Valor Solicitado */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">
                    Valor solicitado
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min={SERVICE_INFO.minValue}
                      max={SERVICE_INFO.maxValue}
                      step="500"
                      value={requestedValue}
                      onChange={(e) => updateRequestedValue(Number(e.target.value))}
                      className="w-full h-3 lg:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  <div className="flex justify-between text-xs lg:text-sm text-gray-600">
                    <span>{formatCurrency(SERVICE_INFO.minValue)}</span>
                    <span className="font-bold text-base lg:text-lg text-blue-600">
                      {formatCurrency(requestedValue)}
                    </span>
                    <span>{formatCurrency(SERVICE_INFO.maxValue)}</span>
                  </div>
                </div>

                {/* Número de Parcelas */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">
                    Número de parcelas
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="2"
                      max={SERVICE_INFO.maxInstallments}
                      step="1"
                      value={installments}
                      onChange={(e) => updateInstallments(Number(e.target.value))}
                      className="w-full h-3 lg:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  <div className="flex justify-between text-xs lg:text-sm text-gray-600">
                    <span>2x</span>
                    <span className="font-bold text-base lg:text-lg text-green-600">
                      {installments}x
                    </span>
                    <span>{SERVICE_INFO.maxInstallments}x</span>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    onClick={runSimulation}
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white btn-primary hover-glow py-3"
                  >
                    {isLoading ? 'Calculando...' : 'Recalcular'}
                  </Button>
                  <Button
                    onClick={resetSimulation}
                    variant="outline"
                    className="w-full hover-lift py-3"
                  >
                    Limpar
                  </Button>
                </div>
              </div>
            </div>

            {/* Resultados da Simulação */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8 animate-fade-in-right">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    Resultado
                  </h3>
                </div>
                
                {simulation && (
                  <Button
                    onClick={() => setShowDetails(!showDetails)}
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 text-xs lg:text-sm"
                  >
                    <Info className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                    {showDetails ? 'Ocultar' : 'Detalhes'}
                  </Button>
                )}
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 animate-scale-in">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {simulation && !error && (
                <div className="space-y-6">
                  {/* Resultado Principal */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 lg:p-6 animate-scale-in">
                    <div className="text-center space-y-2">
                      <p className="text-xs lg:text-sm text-gray-600">Valor da parcela</p>
                      <p className="text-2xl lg:text-4xl font-bold text-green-600">
                        {formatCurrency(simulation.installmentValue)}
                      </p>
                      <p className="text-xs lg:text-sm text-gray-600">
                        em {simulation.installments}x no cartão
                      </p>
                    </div>
                  </div>

                  {/* Resumo Básico */}
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm lg:text-base text-gray-700">Valor solicitado</span>
                      <span className="font-semibold text-sm lg:text-base text-gray-900">
                        {formatCurrency(simulation.requestedValue)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm lg:text-base text-gray-700">Taxa Adiante ({formatPercentage(simulation.adianteRatePercentage)})</span>
                      <span className="font-semibold text-sm lg:text-base text-blue-600">
                        {formatCurrency(simulation.adianteRate)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm lg:text-base text-gray-700">Total a pagar</span>
                      <span className="font-semibold text-sm lg:text-base text-green-600">
                        {formatCurrency(simulation.totalPaid)}
                      </span>
                    </div>
                  </div>

                  {/* Detalhes Expandidos */}
                  {showDetails && (
                    <div className="space-y-4 border-t pt-6 animate-fade-in-up">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">Detalhamento completo</h4>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p className="text-gray-600">Taxa bancária mensal</p>
                          <p className="font-semibold">{formatPercentage(simulation.bankRate)}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-gray-600">Juros bancários total</p>
                          <p className="font-semibold">{formatCurrency(simulation.totalBankInterest)}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-gray-600">Taxa de juros total</p>
                          <p className="font-semibold">{formatPercentage(simulation.totalInterestRate)}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-gray-600">Valor com taxa Adiante</p>
                          <p className="font-semibold">{formatCurrency(simulation.totalWithAdianteRate)}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Botões de Ação */}
                  <div className="flex flex-col gap-3 pt-6 border-t">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-500 hover:bg-green-600 text-white btn-primary hover-glow py-3"
                    >
                      Solicitar via WhatsApp
                    </Button>
                    
                    <Button
                      onClick={generatePDF}
                      variant="outline"
                      className="w-full hover-lift py-3"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Simulação
                    </Button>
                  </div>
                </div>
              )}

              {!simulation && !error && (
                <div className="text-center py-8 lg:py-12 text-gray-500 animate-fade-in-up">
                  <Calculator className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm lg:text-base">Configure os valores acima para ver sua simulação</p>
                </div>
              )}
            </div>
          </div>

          {/* Informações Importantes */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6 animate-fade-in-up">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-800">Informações importantes</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• A taxa da Adiante Recursos é fixa em 20% sobre o valor solicitado</li>
                  <li>• As taxas bancárias variam conforme o número de parcelas escolhido</li>
                  <li>• Valores e condições sujeitos à análise de crédito</li>
                  <li>• Esta simulação é apenas uma estimativa para fins informativos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;

