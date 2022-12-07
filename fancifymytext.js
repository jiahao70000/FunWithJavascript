function Bigger() {
    document.getElementById("txtArea").style.fontSize = "24pt";
}

function fancyShmancy() {
    document.getElementById("txtArea").style.fontWeight = "bold";
    document.getElementById("txtArea").style.color = 'blue';
    document.getElementById("txtArea").style.textDecoration = "underline";

}

function boringBetty() {
    document.getElementById("txtArea").style.fontWeight = "normal";
    document.getElementById("txtArea").style.color = "black";
    document.getElementById("txtArea").style.textDecoration = "none";
}

function Moo() {
    var str = document.getElementById("txtArea");
    var parts = str.value.split(" ");
    str.value = parts.join("-Moo ");
}
