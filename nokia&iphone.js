function phones(onoff, battery) {
    this.onoff = onoff
    this.battery = battery
    this.inbox = []
    this.outbox = []
}
// const log=console.log;
let Nokia = new phones("off", 5);
let Iphone = new phones("off", 5);

/**
 * @return {boolean}
 */
function Nokiahoatdong() { return (Nokia.onoff === "on" && Nokia.battery > 0)}

/**
 * @return {boolean}
 */
function Iphonehoatdong() {return (Iphone.onoff === "on" && Iphone.battery > 0)}

function turnonNokia() {
    Nokia.onoff = "on"
}

function turnoffNokia() {
    Nokia.onoff = "off"
}

function ChargeNokia() {
    if (Nokia.battery !== 10) {
        Nokia.battery += 1
    }
}

function BateryNokia() {
    alert(Nokia.battery);
    Nokia.battery--;
}

function sendNokia() {
    if (Nokiahoatdong()) {
        Nokia.outbox.unshift(document.getElementById("nokia").value);
        Iphone.inbox.unshift(document.getElementById("nokia").value);
        Nokia.battery--
        nokia.value=""
    }
}

function inboxNokia() {
    if (Nokiahoatdong()) {
        let i = prompt("Bạn có:" + Nokia.inbox.length + "tin nhắn. Vui lòng chọn thứ tự tin nhắn bạn muốn đọc")
        if (parseInt(i) == i && i != 0) {
            document.getElementById("nokia").value = Nokia.inbox[i - 1]
        }
        battery--
    }
}

function outboxNokia() {
    if (Nokiahoatdong()) {
        let i = prompt("Bạn có:" + Nokia.outbox.length + "tin nhắn. Vui lòng chọn thứ tự tin nhắn bạn muốn đọc")
        if (parseInt(i) == i && i != 0) {
            document.getElementById("nokia").value = Nokia.outbox[i - 1]
        }
        Nokia.battery--
    }
}

function turnonIphone() {
    Iphone.onoff = "on"
}

function turnoffIphone() {
    Iphone.onoff = "off"
}

function ChargeIphone() {
    if (Iphone.battery !== 10) {
        Iphone.battery += 1
    }
}

function BateryIphone() {
    alert(Iphone.battery)
    Iphone.battery--
}

function sendIphone() {
    if (Iphonehoatdong()) {
        Iphone.outbox.unshift(document.getElementById("iphone").value);
        Nokia.inbox.unshift(document.getElementById("iphone").value);
        iphone.value=""
        Iphone.battery--
    }
}

function inboxIphone() {
    if (Iphonehoatdong()) {
        let i = prompt("Bạn có:" + Iphone.inbox.length + "tin nhắn. Vui lòng chọn thứ tự tin nhắn bạn muốn đọc")
        if (parseInt(i) == i && i!= 0) {
            document.getElementById("iphone").value = Iphone.inbox[i - 1]
        }
        Iphone.battery--
    }
}

function outboxIphone() {
    if (Iphonehoatdong()) {
        let i = prompt("Bạn có:" + Iphone.outbox.length + "tin nhắn. Vui lòng chọn thứ tự tin nhắn bạn muốn đọc")
        if (parseInt(i) == i && i!= 0) {
            document.getElementById("iphone").value = Iphone.inbox[i - 1]
        }
        Iphone.battery--
    }
}