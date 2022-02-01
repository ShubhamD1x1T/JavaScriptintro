let cp = require('child_process');

console.log(cp);

cp.execSync('man bc');

console.log("output :"+cp.execSync('node test.js'));