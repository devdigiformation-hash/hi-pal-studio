export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      download_clicks: {
        Row: {
          created_at: string;
          id: string;
          page_path: string | null;
          platform: string;
          referrer: string | null;
          source: string;
          user_agent: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          page_path?: string | null;
          platform?: string;
          referrer?: string | null;
          source: string;
          user_agent?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          page_path?: string | null;
          platform?: string;
          referrer?: string | null;
          source?: string;
          user_agent?: string | null;
        };
        Relationships: [];
      };
      orders: {
        Row: {
          amount: number;
          created_at: string;
          currency: string;
          customer_name: string;
          email: string;
          id: string;
          notes: string | null;
          order_ref: string;
          payment_method: string;
          plan_id: string;
          plan_name: string;
          status: string;
          txn_reference: string | null;
          updated_at: string;
          whatsapp: string | null;
        };
        Insert: {
          amount: number;
          created_at?: string;
          currency?: string;
          customer_name: string;
          email: string;
          id?: string;
          notes?: string | null;
          order_ref: string;
          payment_method: string;
          plan_id: string;
          plan_name: string;
          status?: string;
          txn_reference?: string | null;
          updated_at?: string;
          whatsapp?: string | null;
        };
        Update: {
          amount?: number;
          created_at?: string;
          currency?: string;
          customer_name?: string;
          email?: string;
          id?: string;
          notes?: string | null;
          order_ref?: string;
          payment_method?: string;
          plan_id?: string;
          plan_name?: string;
          status?: string;
          txn_reference?: string | null;
          updated_at?: string;
          whatsapp?: string | null;
        };
        Relationships: [];
      };
      seo_page_checks: {
        Row: {
          canonical: string | null;
          created_at: string;
          description: string | null;
          description_length: number;
          h1_count: number;
          has_jsonld: boolean;
          has_og: boolean;
          id: string;
          issues: string[];
          scan_id: string;
          score: number;
          status_code: number | null;
          title: string | null;
          title_length: number;
          url: string;
          word_count: number;
        };
        Insert: {
          canonical?: string | null;
          created_at?: string;
          description?: string | null;
          description_length?: number;
          h1_count?: number;
          has_jsonld?: boolean;
          has_og?: boolean;
          id?: string;
          issues?: string[];
          scan_id: string;
          score?: number;
          status_code?: number | null;
          title?: string | null;
          title_length?: number;
          url: string;
          word_count?: number;
        };
        Update: {
          canonical?: string | null;
          created_at?: string;
          description?: string | null;
          description_length?: number;
          h1_count?: number;
          has_jsonld?: boolean;
          has_og?: boolean;
          id?: string;
          issues?: string[];
          scan_id?: string;
          score?: number;
          status_code?: number | null;
          title?: string | null;
          title_length?: number;
          url?: string;
          word_count?: number;
        };
        Relationships: [
          {
            foreignKeyName: "seo_page_checks_scan_id_fkey";
            columns: ["scan_id"];
            isOneToOne: false;
            referencedRelation: "seo_scans";
            referencedColumns: ["id"];
          },
        ];
      };
      seo_scans: {
        Row: {
          avg_score: number;
          base_url: string;
          created_at: string;
          error_count: number;
          finished_at: string | null;
          id: string;
          notes: string | null;
          ok_count: number;
          pages_checked: number;
          robots_ok: boolean;
          sitemap_ok: boolean;
          sitemap_url_count: number;
          started_at: string;
          warn_count: number;
        };
        Insert: {
          avg_score?: number;
          base_url: string;
          created_at?: string;
          error_count?: number;
          finished_at?: string | null;
          id?: string;
          notes?: string | null;
          ok_count?: number;
          pages_checked?: number;
          robots_ok?: boolean;
          sitemap_ok?: boolean;
          sitemap_url_count?: number;
          started_at?: string;
          warn_count?: number;
        };
        Update: {
          avg_score?: number;
          base_url?: string;
          created_at?: string;
          error_count?: number;
          finished_at?: string | null;
          id?: string;
          notes?: string | null;
          ok_count?: number;
          pages_checked?: number;
          robots_ok?: boolean;
          sitemap_ok?: boolean;
          sitemap_url_count?: number;
          started_at?: string;
          warn_count?: number;
        };
        Relationships: [];
      };
      user_roles: {
        Row: {
          created_at: string;
          id: string;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          role?: Database["public"]["Enums"]["app_role"];
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"];
          _user_id: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      app_role: "admin" | "user";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const;
