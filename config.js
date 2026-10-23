// Configuração do Money — preencha com os dados do SEU projeto Supabase.
// Onde achar: Supabase > Project Settings > API (ou "Data API")
//   supabaseUrl     = "Project URL"        (ex.: https://abcdefghijk.supabase.co)
//   supabaseAnonKey = chave "anon" / "public" (começa com eyJ... ou sb_publishable_...)
// A chave anon é pública por natureza: a segurança vem das regras (RLS) do schema.sql.
// NUNCA coloque aqui a chave "service_role" / "secret".
window.MONEY_CONFIG = {
  supabaseUrl: "COLE_AQUI_A_PROJECT_URL",
  supabaseAnonKey: "COLE_AQUI_A_ANON_KEY"
};
