declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    NEXT_PUBLIC_SUPABASE_URL: string;
    POSTGRES_DATABASE: string;
    POSTGRES_HOST: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_PRISMA_URL: string;
    POSTGRES_URL: string;
    POSTGRES_URL_NON_POOLING: string;
    POSTGRES_USER: string;
    SUPABASE_ANON_KEY: string;
    SUPABASE_JWT_SECRET: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
    SUPABASE_URL: string;
  }
}
