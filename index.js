const wbm = require("./wbm");

wbm.start({ session: false, showBrowser: false }).then(async () => {
    const phones = ['918699900057', '918446000022'];
    const message = 'Test: automated message';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));