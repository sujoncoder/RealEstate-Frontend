import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://real-state-backend-one.vercel.app/",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react()],
});
