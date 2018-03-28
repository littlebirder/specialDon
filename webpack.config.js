const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js', //相对路径
    output: {
        path: path.resolve(__dirname, 'build'), //打包文件的输出路径
        filename: 'bundle.js' //打包文件名
    },
    resolve: {
    	extensions: ['.js', '.css']
  	},
    module: {
        loaders: [ //配置加载器
            {
                test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
                loader: 'babel-loader', //使用的加载器名称
                query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                    presets: ['env', 'react', 'es2015']
                },           

            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include:'/src/style',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]',
                exclude:'/src/css',
            },
            /*{
                test:/\.css$/,
		        use:ExtractTextWebpackPlugin.extract({
		        	use:[
		        			{
				           		loader: 'css-loader',
				           		options: {
				           			modules: true,
				        		},
			        		}
		        		],
		            fallback: 'style-loader',
		        })
		     },*/
            /*{
            	test: /\.css/,
	            loader: 'postcss-loader',
	            options: {
	                plugins: () => [
	                    require('autoprefixer'),
	                    require('postcss-flexbugs-fixes')
	                ]
	            }
            
        	}*/
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', //指定模板路径
            filename: 'index.html', //指定文件名
        }),
//      new ExtractTextWebpackPlugin("bundle.css"),
    ]
}
