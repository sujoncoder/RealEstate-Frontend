import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   "/api": {
    //     target: "https://real-state-backend-lovat.vercel.app/",
    //     secure: false,
    //   },
    // },
  },

  plugins: [react()],
});
