
function fetchData(fileUrl) {
    const req = new XMLHttpRequest();
    req.open("GET", fileUrl, true);
    req.send();
    return JSON.parse(req.responseText);
}

const specialChars = fetchData("specialChars.json");

var recordingKeys = false;

$("#record").click(e => {
    recordingKeys = recordingKeys ? false : true;
    console.log(recordingKeys);
});

$(document).keydown(e => {
    if (!recordingKeys) return;
    $("#output").text(`${$("#output").text()}{{${e.originalEvent.key}}}`)
});