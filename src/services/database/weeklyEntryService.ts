import { supabase } from '../../config/supabase';
import { WeeklyEntry } from '../../types';

export const weeklyEntryService = {
  async getAll(): Promise<WeeklyEntry[]> {
    const { data, error } = await supabase
      .from('weekly_entries')
      .select('*');
    
    if (error) throw error;
    return data;
  },

  async getById(id: string): Promise<WeeklyEntry | null> {
    const { data, error } = await supabase
      .from('weekly_entries')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(entry: Omit<WeeklyEntry, 'id'>): Promise<WeeklyEntry> {
    const { data, error } = await supabase
      .from('weekly_entries')
      .insert([entry])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, entry: Partial<WeeklyEntry>): Promise<WeeklyEntry> {
    const { data, error } = await supabase
      .from('weekly_entries')
      .update(entry)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('weekly_entries')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  async getByEmployee(employeeId: string): Promise<WeeklyEntry[]> {
    const { data, error } = await supabase
      .from('weekly_entries')
      .select('*')
      .eq('employeeId', employeeId);
    
    if (error) throw error;
    return data;
  },

  async getByWeek(week: string): Promise<WeeklyEntry[]> {
    const { data, error } = await supabase
      .from('weekly_entries')
      .select('*')
      .eq('week', week);
    
    if (error) throw error;
    return data;
  }
};