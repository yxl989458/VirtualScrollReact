import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig((configEnv) =>
    mergeConfig(
        viteConfig(configEnv),

        defineConfig({
            plugins: [tsconfigPaths()],
            test: {
                globals: true,
                environment: 'jsdom',
                exclude: ["**/node_modules/**"],
            },
        })
    )
);
