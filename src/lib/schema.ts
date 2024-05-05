export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      // Sauriels Steampunk Table
      steampunk: {
        Row: {
          id: number;
          created_at: Date;
          name: string;
          avatarUrl: string | null;
        };
        Insert: {
          id?: number;
        };
        Update: {
          id?: number;
        };
      };
      // TEST Table
      test: {
        Row: {
          id: number;
          created_at: Date;
        };
        Insert: {
          id?: number;
        };
        Update: {
          id?: number;
        };
      };
      // END OF TABLES
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
