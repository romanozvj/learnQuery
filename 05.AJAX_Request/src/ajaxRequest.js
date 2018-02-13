function ajaxReq() {
  'use strict';
  let myArguments = arguments;
  console.log(myArguments);
  let xhttp = new XMLHttpRequest;
  let getOrPost = "GET";
  if (myArguments[1].method) { getOrPost = myArguments[1].method; }
  xhttp.onreadystatechange = function () {
    console.log(xhttp);
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        let myData = JSON.parse(xhttp.responseText);
        myArguments[1].success.call(myArguments[1].context, myData, xhttp.status, xhttp);
      }
      else {
        myArguments[1].failure.call(myArguments[1].context, xhttp, xhttp.status, xhttp.responseText);
      }
      
      myArguments[1].complete.call(myArguments[1].context, xhttp, xhttp.status);
    }
  }
  xhttp.open(getOrPost, myArguments[0], true);
  xhttp.send();
}