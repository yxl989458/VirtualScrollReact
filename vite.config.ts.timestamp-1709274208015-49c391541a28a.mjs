// vite.config.ts
import { defineConfig } from "file:///D:/workspace/Company/chatSource/node_modules/vite/dist/node/index.js";
import react from "file:///D:/workspace/Company/chatSource/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve, join } from "node:path";
var __vite_injected_original_dirname = "D:\\workspace\\Company\\chatSource";
var vite_config_default = defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      open: true,
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://192.168.1.226:8000",
          changeOrigin: true,
          rewrite(path) {
            return path.replace(/^\/api/, "/api");
          }
        }
      }
    },
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "./src/"),
        "@modules": join(__vite_injected_original_dirname, "src/modules/"),
        "@constants": join(__vite_injected_original_dirname, "src/constants/"),
        "@components": join(__vite_injected_original_dirname, "src/components/"),
        "@stores": join(__vite_injected_original_dirname, "src/stores/"),
        "@hooks": join(__vite_injected_original_dirname, "src/hooks/"),
        "@services": join(__vite_injected_original_dirname, "src/services/"),
        "@api": join(__vite_injected_original_dirname, "src/api/"),
        "@utils": join(__vite_injected_original_dirname, "src/utils/"),
        "@router": join(__vite_injected_original_dirname, "src/router/"),
        "@views": join(__vite_injected_original_dirname, "src/views/"),
        "@types": join(__vite_injected_original_dirname, "src/types/")
      }
    },
    build: {
      chunkSizeWarningLimit: 1e3,
      rollupOptions: {
        output: {
          manualChunks(path) {
            if (path.includes("node_modules")) {
              return "vendor";
            }
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcQ29tcGFueVxcXFxjaGF0U291cmNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcQ29tcGFueVxcXFxjaGF0U291cmNlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93b3Jrc3BhY2UvQ29tcGFueS9jaGF0U291cmNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcclxuaW1wb3J0IHsgcmVzb2x2ZSwgam9pbiB9IGZyb20gJ25vZGU6cGF0aCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgJy9hcGknOiB7XHJcbiAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vMTkyLjE2OC4xLjIyNjo4MDAwJyxcclxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgIHJld3JpdGUocGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJy9hcGknKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjLycpLFxyXG4gICAgICAgICdAbW9kdWxlcyc6IGpvaW4oX19kaXJuYW1lLCAnc3JjL21vZHVsZXMvJyksXHJcbiAgICAgICAgJ0Bjb25zdGFudHMnOiBqb2luKF9fZGlybmFtZSwgJ3NyYy9jb25zdGFudHMvJyksXHJcbiAgICAgICAgJ0Bjb21wb25lbnRzJzogam9pbihfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy8nKSxcclxuICAgICAgICAnQHN0b3Jlcyc6IGpvaW4oX19kaXJuYW1lLCAnc3JjL3N0b3Jlcy8nKSxcclxuICAgICAgICAnQGhvb2tzJzogam9pbihfX2Rpcm5hbWUsICdzcmMvaG9va3MvJyksXHJcbiAgICAgICAgXCJAc2VydmljZXNcIjogam9pbihfX2Rpcm5hbWUsICdzcmMvc2VydmljZXMvJyksXHJcbiAgICAgICAgXCJAYXBpXCI6IGpvaW4oX19kaXJuYW1lLCAnc3JjL2FwaS8nKSxcclxuICAgICAgICBcIkB1dGlsc1wiOiBqb2luKF9fZGlybmFtZSwgJ3NyYy91dGlscy8nKSxcclxuICAgICAgICBcIkByb3V0ZXJcIjogam9pbihfX2Rpcm5hbWUsICdzcmMvcm91dGVyLycpLFxyXG4gICAgICAgIFwiQHZpZXdzXCI6IGpvaW4oX19kaXJuYW1lLCAnc3JjL3ZpZXdzLycpLFxyXG4gICAgICAgIFwiQHR5cGVzXCI6IGpvaW4oX19kaXJuYW1lLCAnc3JjL3R5cGVzLycpLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICBtYW51YWxDaHVua3MocGF0aCkge1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UixTQUFTLG9CQUFvQjtBQUNwVCxPQUFPLFdBQVc7QUFDbEIsU0FBUyxTQUFTLFlBQVk7QUFGOUIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhLE1BQU07QUFDaEMsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ2pCLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLFFBQVEsTUFBTTtBQUNaLG1CQUFPLEtBQUssUUFBUSxVQUFVLE1BQU07QUFBQSxVQUN0QztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFBQSxRQUNoQyxZQUFZLEtBQUssa0NBQVcsY0FBYztBQUFBLFFBQzFDLGNBQWMsS0FBSyxrQ0FBVyxnQkFBZ0I7QUFBQSxRQUM5QyxlQUFlLEtBQUssa0NBQVcsaUJBQWlCO0FBQUEsUUFDaEQsV0FBVyxLQUFLLGtDQUFXLGFBQWE7QUFBQSxRQUN4QyxVQUFVLEtBQUssa0NBQVcsWUFBWTtBQUFBLFFBQ3RDLGFBQWEsS0FBSyxrQ0FBVyxlQUFlO0FBQUEsUUFDNUMsUUFBUSxLQUFLLGtDQUFXLFVBQVU7QUFBQSxRQUNsQyxVQUFVLEtBQUssa0NBQVcsWUFBWTtBQUFBLFFBQ3RDLFdBQVcsS0FBSyxrQ0FBVyxhQUFhO0FBQUEsUUFDeEMsVUFBVSxLQUFLLGtDQUFXLFlBQVk7QUFBQSxRQUN0QyxVQUFVLEtBQUssa0NBQVcsWUFBWTtBQUFBLE1BQ3hDO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsdUJBQXVCO0FBQUEsTUFDdkIsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sYUFBYSxNQUFNO0FBQ2pCLGdCQUFJLEtBQUssU0FBUyxjQUFjLEdBQUc7QUFDakMscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
