const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcRoot = path.resolve(__dirname, 'src');
const devPath = path.resolve(__dirname, 'dev');
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.js';

function getEntry() {
  let entryMap = {};

  // 查找page目录，并循环
  fs.readdirSync(pageDir).forEach(pathname => {
    // 利用path模块 转换成绝对路径
    let fullPathName = path.resolve(pageDir, pathname);
    // 利用fs.statSync判断是文件还是目录
    let stat = fs.statSync(fullPathName);
    let fileName = path.resolve(fullPathName, mainFile);
    // 拿到入口文件
    if (stat.isDirectory() && fs.existsSync(fileName)) {
      entryMap[pathname] = fileName;
    }
  });

  return entryMap;
}

function getHtmlArr(entryMap) {
  let htmlArr = [];
  Object.keys(entryMap).forEach(key => {
    // 找到模板文件所在路径
    let fullPathName = path.resolve(pageDir, key);
    // 找到模板文件
    let fileName = path.resolve(fullPathName, key + '.html');

    if (fs.existsSync(fileName)) {
      htmlArr.push(
        new HtmlWebpackPlugin({
          filename: key + '.html',
          template: fileName,
          chunks: [key]
        })
      );
    }
  });
  return htmlArr;
}

const entryMap = getEntry();
const htmlArr = getHtmlArr(entryMap);

module.exports = {
  mode: 'development',
  entry: entryMap,
  output: {
    path: devPath,
    filename: '[name].js'
  },
  devServer: {
    contentBase: devPath,
    hot: true // 热更新
  },
  resolve: {
    alias: {
      component: path.resolve(srcRoot, 'component')
    },
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ],
        include: srcRoot
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: srcRoot + '/component/common.scss'
            }
          }
        ],
        include: srcRoot
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['url-loader?limit=8192'],
        include: srcRoot
      }
    ]
  },
  plugins: [
    // 热更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ].concat(htmlArr)
};
