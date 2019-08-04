module.exports = {
  // 入口文件
  entry: [
    './src/scripts/index.ts',
    './src/styles/index.less',
    'normalize.css',
    'hotcss'
  ],
  pug: true,
  eslint: true,
  babel: true,
  typescript: true,
  // 设计稿宽度
  designWidth: 750,
  port: 3456
};
