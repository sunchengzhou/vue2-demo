const path=require('path');
const HTMLPlugin=require('html-webpack-plugin');
const webpack=require('webpack');

const isDev=process.env.NODE_ENV==="production"

const config={
    target:'web',
    entry:path.join(__dirname,'src/index.js'),
    output:{
      filename:'bundle.js',
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
          test:/\.css$/,
          use:[
            'style-loader',
            'css-loader'
          ]
        },
        {
          test:/\.styl$/,
          use:[
            'style-loader',
            'css-loader',
            {
              loader:'postcss-loader',
              options:{
                sourceMap:true
              }
            },
            'stylus-loader'
          ]
        },
        {
          test:/\.(png|jpg|jepg|gif|svg)$/,
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
  // 查看原js代码
  config.devtool="#cheap-module-eval-source-map"
  // 开发时开启服务器
  //问题:port,host设置无效，直接写入shell运行脚本中
  config.devServer={
    port:8000,
    host:'0.0.0.0',
    overlay:{
      errors:true
    },
    hot:true
  }
  // 热更新插件
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports=config;

