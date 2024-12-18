import { supabase } from '../../config/supabase';
import { KPI } from '../../types';

export const kpiService = {
  async getAll(): Promise<KPI[]> {
    const { data, error } = await supabase
      .from('kpis')
      .select('*');
    
    if (error) throw error;
    return data;
  },

  async getById(id: string): Promise<KPI | null> {
    const { data, error } = await supabase
      .from('kpis')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(kpi: Omit<KPI, 'id'>): Promise<KPI> {
    const { data, error } = await supabase
      .from('kpis')
      .insert([kpi])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, kpi: Partial<KPI>): Promise<KPI> {
    const { data, error } = await supabase
      .from('kpis')
      .update(kpi)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('kpis')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  async getByEmployee(employeeId: string): Promise<KPI[]> {
    const { data, error } = await supabase
      .from('kpis')
      .select('*')
      .contains('assignedEmployees', [employeeId]);
    
    if (error) throw error;
    return data;
  }
};