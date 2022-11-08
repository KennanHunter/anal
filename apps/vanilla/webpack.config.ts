import * as path from "path";
import * as webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {
	static: ["example", "dist"],
	port: 9000,
};

const config: webpack.Configuration = {
	entry: "./src/index.ts",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	devServer,
	output: {
		filename: "vanilla.bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};

export default config;
