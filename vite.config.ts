import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://kalliope-be-488144718577.us-central1.run.app/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
