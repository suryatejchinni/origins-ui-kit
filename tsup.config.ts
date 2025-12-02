import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["src/index.ts", "src/utils.ts"],
    format: ["cjs", "esm"],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom", "next"],
    treeshake: true,
    tsconfig: "tsconfig.lib.json",
    noExternal: ["tailwindcss-animate"],
})
