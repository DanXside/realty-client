import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, ProvidePlugin } from "webpack";
import Dotenv from 'dotenv-webpack';
import { BuildOptions } from "./types/types";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';


export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development';

    return [
        new HtmlWebpackPlugin({template: options.paths.html}),
        new Dotenv(),
        new ProvidePlugin({
            process: 'process/browser'
        }),
        !isDev && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new ForkTsCheckerWebpackPlugin()
    ].filter(Boolean)
}