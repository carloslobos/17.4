var os = require('os');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log('System: ', type);
    console.log('Release: ', release);
    var cpu = os.cpus()[0].model;
    console.log('CPU model: ', cpu);
    var uptime = os.uptime();
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    var userInfo = os.userInfo();
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
};