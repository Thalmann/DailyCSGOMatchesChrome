

function getContent(){
    var url = "http://hltv.org/results/";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange=function()
    {
        if (xhttp.readyState==4 && xhttp.status==200)
        {
            console.log(xhttp.responseText);
	    document.write(xhttp.responseText);
	    console.log("HEJ");
        }
    }
    
    xhttp.open("GET", url, true);
    xhttp.send();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', getContent);
});
