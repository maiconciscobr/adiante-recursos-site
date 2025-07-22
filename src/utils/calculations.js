// Funções de cálculo para o simulador financeiro

import { SERVICE_INFO } from './constants';

/**
 * Calcula o valor total com a taxa da Adiante Recursos
 * @param {number} requestedValue - Valor solicitado
 * @returns {number} Valor total com taxa
 */
export const calculateTotalWithAdianteRate = (requestedValue) => {
  const adianteRate = requestedValue * SERVICE_INFO.adianteRate;
  return requestedValue + adianteRate;
};

/**
 * Calcula a taxa bancária baseada no número de parcelas
 * @param {number} installments - Número de parcelas
 * @returns {number} Taxa bancária mensal
 */
export const getBankRate = (installments) => {
  if (installments >= 2 && installments <= 6) {
    return SERVICE_INFO.bankRates['2-6'];
  } else if (installments >= 7 && installments <= 12) {
    return SERVICE_INFO.bankRates['7-12'];
  }
  return 0;
};

/**
 * Calcula o valor total com juros compostos
 * @param {number} principal - Valor principal
 * @param {number} rate - Taxa mensal
 * @param {number} periods - Número de períodos
 * @returns {number} Valor total com juros
 */
export const calculateCompoundInterest = (principal, rate, periods) => {
  return principal * Math.pow(1 + rate, periods);
};

/**
 * Calcula a simulação completa do financiamento
 * @param {number} requestedValue - Valor solicitado
 * @param {number} installments - Número de parcelas
 * @returns {object} Objeto com todos os valores calculados
 */
export const calculateSimulation = (requestedValue, installments) => {
  // Validações
  if (requestedValue < SERVICE_INFO.minValue || requestedValue > SERVICE_INFO.maxValue) {
    throw new Error(`Valor deve estar entre R$ ${SERVICE_INFO.minValue} e R$ ${SERVICE_INFO.maxValue}`);
  }
  
  if (installments < 2 || installments > SERVICE_INFO.maxInstallments) {
    throw new Error(`Número de parcelas deve estar entre 2 e ${SERVICE_INFO.maxInstallments}`);
  }

  // Cálculos
  const adianteRate = requestedValue * SERVICE_INFO.adianteRate;
  const totalWithAdianteRate = requestedValue + adianteRate;
  
  const bankRate = getBankRate(installments);
  const totalWithBankInterest = calculateCompoundInterest(totalWithAdianteRate, bankRate, installments);
  
  const installmentValue = totalWithBankInterest / installments;
  
  const totalBankInterest = totalWithBankInterest - totalWithAdianteRate;
  const totalInterestRate = (totalBankInterest / totalWithAdianteRate) * 100;

  return {
    requestedValue,
    adianteRate,
    adianteRatePercentage: SERVICE_INFO.adianteRate * 100,
    totalWithAdianteRate,
    bankRate: bankRate * 100,
    totalBankInterest,
    totalInterestRate,
    totalWithBankInterest,
    installments,
    installmentValue,
    totalPaid: totalWithBankInterest
  };
};

/**
 * Formata valor para moeda brasileira
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

/**
 * Formata percentual
 * @param {number} value - Valor a ser formatado
 * @returns {string} Percentual formatado
 */
export const formatPercentage = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }).format(value / 100);
};

