import webpack from "webpack";
import path from "path";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;
    const isDev = mode === 'development';
    return {
                mode: options.mode ?? 'development',
                entry: paths.entry,
                output: {
                    path: paths.output,
                    filename: '[name].[contenthash].js',
                    clean: true
                },
                plugins: buildPlugins(options),
                module: {
                    rules: buildLoaders(options)
                },
                resolve: {
                    extensions: ['.tsx', '.ts', '.js'],
                },
                devtool: isDev ? 'inline-source-map' : false,
                devServer: 
                    isDev
                    ?
                    buildDevServer(options)
                    :
                    undefined
            }
}