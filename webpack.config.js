const path=require('path');
// 产生或复制html
const HTMLPlugin=require('html-webpack-plugin');
const webpack=require('webpack');
// 抽取css,js文件
const ExtractPlugin=require('extract-text-webpack-plugin');
// 清理文件插件
const cleanWebpackPlugin=require('clean-webpack-plugin')
// 判断是否为开发环境
const isDev=process.env.NODE_ENV==="development"
const config={
    target:'web',
    entry:path.join(__dirname,'src/index.js'),
    output:{
      filename:'bundle.[hash:8].js',
      path:path.join(__dirname,'dist')
    },
    module:{
      rules:[
        {
          test:/\.vue$/,
          loader:'vue-loader'
        },
        {
          test:/\.jsx$/,
          loader:'babel-loader'
        },
        {
          test:/\.(gif|jpg|jpeg|png|svg)$/,
          use:[
            {
              loader:'url-loader',
              options:{
                limit:1024,
                name:'[name]-aaa.[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins:[
      new webpack.DefinePlugin({
        'process.env':{
          NODE_ENV:isDev?'"development"':'"production"'
        }
      }),
      new HTMLPlugin()
    ]
}

if(isDev){
  config.module.rules.push({
      test:/\.styl/,
      use:[
        'style-loader',
        'css-loader',
        {
          loader:"postcss-loader",
          options:{
            sourceMap:true
          }
        },
        'stylus-loader'
      ]
  })
  config.devtool="#cheap-module-eval-source-map"
  config.devServer={
    port:8000,
    host:'localhost',
    overlay:{
      errors:true
    },
    open:true,
    hot:true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}else{
  // 对vue文件单独打包缓存
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename='[name].[chunkhash:8].js'
  config.module.rules.push(
    {
      test:/\.styl/,
      use:ExtractPlugin.extract({
        fallback:'style-loader',
        use:[
          'css-loader',
          {
            loader:'postcss-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          'stylus-loader'
        ]
      })
    }
  )
  config.plugins.push(
    // 抽离css，仅抽取公共css
    new ExtractPlugin('styles.[contentHash:8].css'),
    // 单独打包vue等公共文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    // 清理插件
    new cleanWebpackPlugin('./dist/*')
  )
}

module.exports=config;