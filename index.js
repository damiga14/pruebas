const find = require('local-devices');

let macs = []
macs["5c:0c:e6:f6:e0:f3"] = 'Switch OLED'

find().then(devices => {
    for (i in devices) { macs[devices[i].mac] ? devices[i].name = macs[devices[i].mac] : devices[i].name = '?' }

    console.log(devices)
})
