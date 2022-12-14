const program = require('commander');

const {
  createProject,
  addComponent,
  addPage,
  addStore
} = require('./actions');

//<>表示必选参数， []表示可选参数， ...表可以多个
//.command为commander里面带有的，用于创建指令，description描述指令的功能，action传入执行指令时的回调函数

const createCommands = () => {
  // 创建项目指令
  program
    .command('create <project> [otherArgs...]')
    .description('clone a repository into a newly created directory')
    .action(createProject);

  program
    .command('addcpn <name>')
    .description('add vue component, 例如: ckt addcpn NavBar [-d src/components]')
    .action(name => addComponent(name, program.dest || 'src/components'))

  program
    .command('addpage <name>')
    .description('add vue page, 例如: ckt addpage Home [-d dest]')
    .action(name => {
      addPage(name, program.dest || `src/pages/${name.toLowerCase()}`)
    })

  program
    .command('addstore <name>')
    .description('add vue store, 例如: ckt addstore favor [-d dest]')
    .action(name => {
      addStore(name, program.dest || `src/store/modules/${name.toLowerCase()}`)
    })

  program.command('test').action(() => {
    // terminal.spawn("npm", ['--version']);
    // terminal.exec("npm --version");
    // open('http://localhost:8080/');`
  })
}

module.exports = createCommands;
