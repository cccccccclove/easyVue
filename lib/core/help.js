const program = require('commander');

   // 增加自己的options（可选参数）
const helpOptions = () => {
  program.option('-s --src <src>', 'a source folder');
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d src/pages, 错误/src/pages');
  program.option('-f --framework <framework>', 'your framework name');

//除了option，也可以使用on监听help.执行顺序在option后面
  program.on('--help', function() {
    console.log("");
    console.log("usage");
  })
  // console.log(program.dest)
}

module.exports = helpOptions;
