const {
    spawn
} = require('child_process');

const child = spawn('bash', [`init.sh`]);

child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
})

child.stdout.pipe(process.stdout)
  
child.stderr.pipe(process.stderr)