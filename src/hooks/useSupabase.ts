import { useCallback } from 'react';
import { supabase } from '../config/supabase';
import { employeeService } from '../services/database/employeeService';
import { kpiService } from '../services/database/kpiService';
import { weeklyEntryService } from '../services/database/weeklyEntryService';

export const useSupabase = () => {
  const handleError = useCallback((error: Error) => {
    console.error('Supabase Error:', error);
    // You could add more error handling here, like showing a toast notification
  }, []);

  return {
    employeeService: {
      ...employeeService,
      getAll: async () => {
        try {
          return await employeeService.getAll();
        } catch (error) {
          handleError(error as Error);
          return [];
        }
      }
    },
    kpiService: {
      ...kpiService,
      getAll: async () => {
        try {
          return await kpiService.getAll();
        } catch (error) {
          handleError(error as Error);
          return [];
        }
      }
    },
    weeklyEntryService: {
      ...weeklyEntryService,
      getAll: async () => {
        try {
          return await weeklyEntryService.getAll();
        } catch (error) {
          handleError(error as Error);
          return [];
        }
      }
    },
    supabase
  };
};