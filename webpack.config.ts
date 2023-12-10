import webpack from "webpack";
import { buildWebpack } from "./config/buildWebpack";
import { BuildMode, BuildPaths } from "./config/types/types";
import path from "path";

interface EnvVar {
    mode: BuildMode,
    port: number
}

export default (env: EnvVar) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths
    });
    return config;
}