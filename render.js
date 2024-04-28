const notyf = new Notyf({duration: 2000, position: {x : 'center', y: 'top'}})

function roomCodeGenerator(length, bigString) {
    var code = '';
    for (var i = length; i > 0; i--) {
        var len = bigString.length;
        var rand = Math.random();
        var index = Math.floor(rand * len);
        code += bigString[index];
    } 
    return code;
}

function time(state, username, context) {
    let hours = parseInt(Math.round(context) / 60 / 60, 10);
    let minutes = parseInt((context / 60) % 60, 10);
    let seconds = Math.round(context) % 60
    hours = hours < 10 ? "0" + hours.toString() : hours.toString();
    minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString()
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString()
    let contentString = `${username} ${state} the video at ${minutes}:${seconds}`
    if (hours != 0) {
        contentString = `${username} ${state} the video at ${hours}:${minutes}:${seconds}`
    }
    return contentString
}


const append = message => {
    document.getElementById("messages-box").innerHTML = document.getElementById("messages-box").innerHTML + `<div class="col-12 mt-3" id="message"><span class="username" style="color: ${message.pfp}">${message.name}: </span>${message.content}</div>`
}

function appendData(roomName, roomCode) {
    append({ name: "Local Party", content: "Local Party allows you to watch local videos with your friends synchronously while chatting.", pfp: "#f3dfbf" })
    append({ name: "Local Party", content: `Welcome to ${roomName}`, pfp: "#f3dfbf" })
    append({ name: "Local Party", content: `Share the room code (${roomCode}) with others to invite them to the party.`, pfp: "#f3dfbf" })
    append({ name: "Local Party", content: "They would need to have the same video file with them to join this watch party.", pfp: "#f3dfbf" })
    append({ name: "Local Party", content: "You can change your username in the settings page.", pfp: "#f3dfbf" })
    append({ name: "Local Party", content: "Source code for the project is available at https://github.com/sheldor1510/local-party", pfp: "#f3dfbf" })
}

document.getElementById('roomCodeText').addEventListener('click', () => {
    let text = document.getElementById('roomCodeText').innerHTML
    navigator.clipboard.writeText(text).then(() => {
        notyf.success("Copied to clipboard")
    })
})
