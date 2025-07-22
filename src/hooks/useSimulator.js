import { useState, useCallback } from 'react';
import { calculateSimulation } from '../utils/calculations';

/**
 * Hook personalizado para gerenciar o estado e lógica do simulador
 */
export const useSimulator = () => {
  const [requestedValue, setRequestedValue] = useState(5000);
  const [installments, setInstallments] = useState(6);
  const [simulation, setSimulation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runSimulation = useCallback(() => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = calculateSimulation(requestedValue, installments);
      setSimulation(result);
    } catch (err) {
      setError(err.message);
      setSimulation(null);
    } finally {
      setIsLoading(false);
    }
  }, [requestedValue, installments]);

  const updateRequestedValue = useCallback((value) => {
    setRequestedValue(value);
    setError(null);
  }, []);

  const updateInstallments = useCallback((value) => {
    setInstallments(value);
    setError(null);
  }, []);

  const resetSimulation = useCallback(() => {
    setRequestedValue(5000);
    setInstallments(6);
    setSimulation(null);
    setError(null);
  }, []);

  return {
    requestedValue,
    installments,
    simulation,
    error,
    isLoading,
    updateRequestedValue,
    updateInstallments,
    runSimulation,
    resetSimulation
  };
};

