function phones(onoff, battery) {
    this.onoff = onoff
    this.battery = battery
    this.inbox = []
    this.outbox = []
    this.hienthi=""
}
// const log=console.log;
let Nokia = new phones("off", 5);
let Iphone = new phones("off", 5);

/**
 * @return {boolean}
 */
function hoatdong(aphone) { return (aphone.onoff === "on" && aphone.battery > 0)}

/**
 * @return {boolean}
 */


function turnon(aphone) {
    aphone.onoff = "on"
}

function turnoff(aphone) {
    aphone.onoff = "off"
}

function Charge(aphone) {
    if (aphone.battery !== 10) {
        aphone.battery += 1
    }
}

function Batery(aphone) {
    alert(aphone.battery);
    aphone.battery--;
}

function send(aphone,bphone) {
    if (hoatdong(aphone)) {
        Nokia.hienthi=document.getElementById("nokia").value
        Iphone.hienthi=document.getElementById("iphone").value
        aphone.outbox.unshift(aphone.hienthi)
        bphone.inbox.unshift(aphone.hienthi);
        aphone.battery--
        nokia.value=""
        iphone.value=""
    }
}

function inbox(aphone) {
    if (hoatdong(aphone)) {
        let i = prompt("Bạn có:" + aphone.inbox.length + "tin nhắn. Vui lòng chọn thứ tự tin nhắn bạn muốn đọc")
        if (parseInt(i) == i && i != 0) {
          if(aphone==Nokia)  {nokia.value = aphone.inbox[i - 1]}else {iphone.value=aphone.inbox[i - 1]}
        }
        aphone.battery--
    }
}

function outbox(aphone) {
    if (hoatdong(aphone)) {
        let i = prompt("Bạn có:" + aphone.outbox.length + "tin nhắn. Vui lòng chọn thứ tự tin nhắn bạn muốn đọc")
        if (parseInt(i) == i && i != 0) {
            if(aphone==Nokia)  {nokia.value = aphone.outbox[i - 1]}else {iphone.value=aphone.outbox[i - 1]}
        }
        aphone.battery--
    }
}

// function turnonIphone() {
//     Iphone.onoff = "on"
// }
//
// function turnoffIphone() {
//     Iphone.onoff = "off"
// }
//
// function ChargeIphone() {
//     if (Iphone.battery !== 10) {
//         Iphone.battery += 1
//     }
// }
//
// function BateryIphone() {
//     alert(Iphone.battery)
//     Iphone.battery--
// }
//
// function sendIphone() {
//     if (Iphonehoatdong()) {
//         Iphone.outbox.unshift(document.getElementById("iphone").value);
//         Nokia.inbox.unshift(document.getElementById("iphone").value);
//         iphone.value=""
//         Iphone.battery--
//     }
// }
//
// function inboxIphone() {
//     if (Iphonehoatdong()) {
//         let i = prompt("Bạn có:" + Iphone.inbox.length + "tin nhắn. Vui lòng chọn thứ tự tin nhắn bạn muốn đọc")
//         if (parseInt(i) == i && i!= 0) {
//             document.getElementById("iphone").value = Iphone.inbox[i - 1]
//         }
//         Iphone.battery--
//     }
// }
//
// function outboxIphone() {
//     if (Iphonehoatdong()) {
//         let i = prompt("Bạn có:" + Iphone.outbox.length + "tin nhắn. Vui lòng chọn thứ tự tin nhắn bạn muốn đọc")
//         if (parseInt(i) == i && i!= 0) {
//             document.getElementById("iphone").value = Iphone.inbox[i - 1]
//         }
//         Iphone.battery--
//     }
// }