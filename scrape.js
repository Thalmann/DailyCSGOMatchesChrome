var url = "http://hltv.org/results";
var xhttp = new XMLHttpRequest();
var r = xhttp.open("GET", url, true);

function getContent(){
    document.write(r.getResponseHeader());
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', getContent);
});
