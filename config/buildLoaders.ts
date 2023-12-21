import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";


export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    return [
        {
            test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            ],
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                                ['@babel/preset-react', {targets: {node: 'current'}}]
                            ],
                        },
                        },
                        {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
            ],
        },
        {
            test: /\.(png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        },
    ]
}