const chalk = require('chalk'); //用于设置控制台显示的内容及样式

const hint = (...info) => {
  console.log(chalk.blue(info));
}

const error = (...info) => {
  console.log(chalk.red(info));
}

const clear = () => {
  console.clear();
}

module.exports = {
  hint,
  error,
  clear
}