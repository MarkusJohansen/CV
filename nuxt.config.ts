// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabase_url: process.env.SUPABASE_URL,
      supabase_key: process.env.SUPABASE_PUBLIC_ANON_KEY,
    },
  },
});
