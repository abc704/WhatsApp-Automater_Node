const wbm = require("./wbm");

wbm.start({ session: false, showBrowser: false }).then(async () => {
    const phones = ['917004346065', '919599865325'];
    const message = 'Test: automated message';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));
