require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const paths = {
	dist: 'dist',
	build: 'build',
};

/* -------------------------------------------------------------------------- */

module.exports = {
	target: ['web', 'es5'],
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'eval' : false,
	devServer: {
		contentBase: path.resolve(__dirname, paths.dist),
		port: process.env.PORT,
		writeToDisk: false,
		compress: true,
		overlay: true,
		hot: true,
	},
	entry: {
		main: './src/index.js',
		drawlist: './src/drawlist.js',
		detail: './src/detail.js',
	},
	output: {
		publicPath: '/',
		path: path.join(__dirname, isDevelopment ? paths.dist : paths.build),
		filename: 'js/[name].bundle.js',
		assetModuleFilename: 'images/[name][ext]',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.s(a|c)ss$/i,
				exclude: /node_modules/,
				use: [
					// isDevelopment ? 'style-loader' : MiniCSSExtractPlugin.loader,
					MiniCSSExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											stage: 3,
											features: {
												'nesting-rules': true,
											},
											autoprefixer: { grid: true },
										},
									],
								],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.{png,jpe?g,gif,svg,webp,bmp}$/i,
				exclude: /node_modules/,
				type: 'asset',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
		}),
		new HtmlWebpackPlugin({
			template: './src/drawlist.html',
			filename: './drawlist.html',
			chunks: ['drawlist'],
		}),
		new HtmlWebpackPlugin({
			template: './src/detail.html',
			filename: './detail.html',
			chunks: ['detail'],
		}),
		new MiniCSSExtractPlugin({
			linkType: false,
			filename: 'css/style.css',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.join(__dirname, 'src/assets'),
					to: path.join(
						__dirname,
						`${isDevelopment ? paths.dist : paths.build}/assets`
					),
				},
			],
		}),
	],
};
