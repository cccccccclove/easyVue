// 执行终端命令
const { spawn, exec } = require('child_process');  //开启子进程


const spawnCommand = (...args) => {
  return new Promise((resole, reject) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout); //把打印结果传给当前进程的输出流
    childProcess.stderr.pipe(process.stderr);
    childProcess.on('close', () => {//监听执行完成操作
      resole();
    })
  })
}

const execCommand = (...args) => {
  return new Promise((resolve, reject) => {
    exec(...args, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(stdout.replace('\n', ''));
      // console.log(stderr);
      resolve();
    })
  })
}

module.exports = {
  spawn: spawnCommand,
  exec: execCommand
};
