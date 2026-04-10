var editOn = false;

function toggleStatus() {
    var statusText = document.getElementById("messStatusText");
    var btn = document.getElementById("toggleBtn");
    if (statusText.innerText.indexOf("Open") !== -1) {
        statusText.innerText = "Mess Status: Closed";
        statusText.className = "statusclosed";
    } else {
        statusText.innerText = "Mess Status: Open";
        statusText.className = "statusopen";
    }
}

function toggleEdit() {
    var msg = document.getElementById("editmsg");
    if (editOn == false) {
        editOn = true;
        msg.innerText = "Edit mode enabled";
    } else {
        editOn = false;
        msg.innerText = "Edit mode disabled";
    }
}
