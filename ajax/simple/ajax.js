/**
 * Simple Ajax without support for older browsers
 * https://stackoverflow.com/questions/12188488/ajax-without-jquery?noredirect=1&lq=1
 */
function myAjax() {
    var xmlHttp = new XMLHttpRequest();
    var url="serverStuff.php";
    var parameters = "first=barack&last=obama";
    xmlHttp.open("POST", url, true);
   
    //Black magic paragraph
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // https://stackoverflow.com/questions/2623963/webkit-refused-to-set-unsafe-header-content-length
    // For security reasons, these steps should be terminated if header is [...]
    // Connection, Content-Length
    // xmlHttp.setRequestHeader("Content-length", parameters.length);
    // xmlHttp.setRequestHeader("Connection", "close");
   
    xmlHttp.onreadystatechange = function() {
     if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      document.getElementById('ajaxDump').innerHTML+=xmlHttp.responseText+"<br />";
     }
    }
   
    xmlHttp.send(parameters);
   }