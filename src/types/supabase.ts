export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      employees: {
        Row: {
          id: string
          name: string
          employeeId: string
          department: string
          startDate: string
          endDate: string | null
          status: 'active' | 'inactive'
          salary: number
          superannuation: {
            contribution: number
          }
          bonusPotential: number
          totalPackage: number
          managerId: string | null
          kpis: string[]
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['employees']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['employees']['Insert']>
      }
      kpis: {
        Row: {
          id: string
          name: string
          description: string
          targetValue: number
          unit: 'number' | 'percentage' | 'currency'
          preferredTrend: 'higher' | 'lower'
          timePeriod: 'weekly' | 'monthly' | 'quarterly' | 'yearly'
          status: 'active' | 'inactive'
          startDate: string
          endDate: string | null
          assignedEmployees: string[]
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['kpis']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['kpis']['Insert']>
      }
      weekly_entries: {
        Row: {
          id: string
          employeeId: string
          week: string
          kpiEntries: {
            kpiId: string
            value: number
          }[]
          performanceRating: number
          ratingJustification: string
          capacityPercentage: number
          capacityFactors: string | null
          weeklyReflection: string | null
          supportNeeded: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['weekly_entries']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['weekly_entries']['Insert']>
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}