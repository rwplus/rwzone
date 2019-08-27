module.exports = {
  // 设置项目的虚拟目录，生产环境下是以myproject开头的
  publicPath: process.env.NODE_ENV === 'production' ? '/myproject/' : '/',
  pages: {
    index: {
      // page 的入口
      entry: 'src/pages/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    login: {
      entry: 'src/pages/login/main.js',
      template: 'public/login.html',
      filename: 'login.html',
      title: 'Login Page',
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    },
    blog: {
      entry: 'src/pages/blog/main.js',
      template: 'public/blog.html',
      filename: 'blog.html',
      title: 'Blog Page',
      chunks: ['chunk-vendors', 'chunk-common', 'blog']
    }
  }
}