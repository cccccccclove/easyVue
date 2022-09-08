#!/usr/bin/env node

//一个指令，读为shebang/hashbang。但代码执行到这个文件时，会根据#！后面定义的环境执行代码。
//#！后面写的是node代码，代码相对固定。 /usr/bin/env node表示在当前电脑环境中找到node，并用node来执行文件
const program = require('commander');

const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');

const log = require('./lib/utils/log');

// 定义显示模块的版本号
// program.version('1.0.1')   //写死的，每次package.json中修改这里都需要同步
program.version(require('./package.json').version)
program.version(require('./package.json').version, '-v,--version')      //不加'-v,--version'则只有使用--version或者-V才可以访问到版本号，使用此后使用-v也可以访问到。ps：上面一句不加会覆盖-V

// 给help增加其他选项
helpOptions(); //--help是commander自带的，也可以自己配置

// 创建命令
createCommands(); 


// 解析终端指令
program.parse(process.argv);//必须，把参数交过来进行解析




