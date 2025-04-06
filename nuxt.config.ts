export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabase_url: process.env.SUPABASE_URL,
      supabase_key: process.env.SUPABASE_PUBLIC_ANON_KEY,
    },
  },

  compatibilityDate: "2025-04-06",

  vite: {
    server: {
      strictPort: true,
      allowedHosts: ["cv.markusjohansen.no"],
    },
  },
});
