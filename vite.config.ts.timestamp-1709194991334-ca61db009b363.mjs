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
        "^/api": {
          target: "http://192.168.1.226:8000/api",
          changeOrigin: true
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
        "@views": join(__vite_injected_original_dirname, "src/views/")
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcQ29tcGFueVxcXFxjaGF0U291cmNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcQ29tcGFueVxcXFxjaGF0U291cmNlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93b3Jrc3BhY2UvQ29tcGFueS9jaGF0U291cmNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcclxuaW1wb3J0IHsgcmVzb2x2ZSwgam9pbiB9IGZyb20gJ25vZGU6cGF0aCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgJ14vYXBpJzoge1xyXG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzE5Mi4xNjguMS4yMjY6ODAwMC9hcGknLFxyXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy8nKSxcclxuICAgICAgICAnQG1vZHVsZXMnOiBqb2luKF9fZGlybmFtZSwgJ3NyYy9tb2R1bGVzLycpLFxyXG4gICAgICAgICdAY29uc3RhbnRzJzogam9pbihfX2Rpcm5hbWUsICdzcmMvY29uc3RhbnRzLycpLFxyXG4gICAgICAgICdAY29tcG9uZW50cyc6IGpvaW4oX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMvJyksXHJcbiAgICAgICAgJ0BzdG9yZXMnOiBqb2luKF9fZGlybmFtZSwgJ3NyYy9zdG9yZXMvJyksXHJcbiAgICAgICAgJ0Bob29rcyc6IGpvaW4oX19kaXJuYW1lLCAnc3JjL2hvb2tzLycpLFxyXG4gICAgICAgIFwiQHNlcnZpY2VzXCI6IGpvaW4oX19kaXJuYW1lLCAnc3JjL3NlcnZpY2VzLycpLFxyXG4gICAgICAgIFwiQGFwaVwiOiBqb2luKF9fZGlybmFtZSwgJ3NyYy9hcGkvJyksXHJcbiAgICAgICAgXCJAdXRpbHNcIjogam9pbihfX2Rpcm5hbWUsICdzcmMvdXRpbHMvJyksXHJcbiAgICAgICAgXCJAcm91dGVyXCI6IGpvaW4oX19kaXJuYW1lLCAnc3JjL3JvdXRlci8nKSxcclxuICAgICAgICBcIkB2aWV3c1wiOiBqb2luKF9fZGlybmFtZSwgJ3NyYy92aWV3cy8nKSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgbWFudWFsQ2h1bmtzKHBhdGgpIHtcclxuICAgICAgICAgICAgaWYgKHBhdGguaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVIsU0FBUyxvQkFBb0I7QUFDcFQsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsU0FBUyxZQUFZO0FBRjlCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYSxNQUFNO0FBQ2hDLFNBQU87QUFBQSxJQUNMLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxJQUNqQixRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxTQUFTO0FBQUEsVUFDUCxRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsUUFDaEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFBQSxRQUNoQyxZQUFZLEtBQUssa0NBQVcsY0FBYztBQUFBLFFBQzFDLGNBQWMsS0FBSyxrQ0FBVyxnQkFBZ0I7QUFBQSxRQUM5QyxlQUFlLEtBQUssa0NBQVcsaUJBQWlCO0FBQUEsUUFDaEQsV0FBVyxLQUFLLGtDQUFXLGFBQWE7QUFBQSxRQUN4QyxVQUFVLEtBQUssa0NBQVcsWUFBWTtBQUFBLFFBQ3RDLGFBQWEsS0FBSyxrQ0FBVyxlQUFlO0FBQUEsUUFDNUMsUUFBUSxLQUFLLGtDQUFXLFVBQVU7QUFBQSxRQUNsQyxVQUFVLEtBQUssa0NBQVcsWUFBWTtBQUFBLFFBQ3RDLFdBQVcsS0FBSyxrQ0FBVyxhQUFhO0FBQUEsUUFDeEMsVUFBVSxLQUFLLGtDQUFXLFlBQVk7QUFBQSxNQUN4QztBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLHVCQUF1QjtBQUFBLE1BQ3ZCLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLGFBQWEsTUFBTTtBQUNqQixnQkFBSSxLQUFLLFNBQVMsY0FBYyxHQUFHO0FBQ2pDLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
