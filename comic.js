// ==UserScript==
// @name         MyTestScript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/*
// @match        https://www.colamanhua.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';


  // for Baidu.com
  try {
    document.getElementById('s_menu_mine').click()
  } catch(e) {}
  
  // remove existing event
  const events = [
    'click',
    'mousedown',
    'mouseup',
    'mousemove',
    // add any other events that you want to remove
  ];

  events.forEach(event => {
    console.log('remove event', event);
    document.removeEventListener(event, () => {});
  });
 

  function getCurrentURL () {
    return window.location.href
  }
  
  const mangaReader = (next=false) => {
    console.log(e);
    let arr = window.location.href.split('/');
    let num = Number(arr[arr.length - 1].split('.')[0]);
    arr.pop();
    let url = arr.join('/');

    let left = num - 1;
    let right = num + 1;
    next ? window.location.href = url + '/' + right + '.html' : window.location.href = url + '/' + left + '.html';    
  }

  // add new event
  document.addEventListener("mouseup", (e) => {
    switch (e.button) {
      case 0:
        // alert( "Left button clicked.");
        break;
      case 1:
        alert( "Middle button clicked.");
        break;
      case 2:
        // alert( "Right button clicked.");
        break;
      default:
        if (e.button == 4) {
          mangaReader(true);
        }
    }
  });

  // Create the button element
  var button = document.createElement("button");
  button.innerText = "Click me!";

  button.addEventListener("mouseup", (e) => {
    switch (e.button) {
      case 0:
        // alert( "Left button clicked.");
        mangaReader(true);
        break;
      case 1:
        alert( "Middle button clicked.");
        break;
      case 2:
        alert( "Right button clicked.");
        break;
      default:
        alert( `Unknown button code: ${e.button}`);
    }
  });
  // Style the button
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.height = "100%";
  button.style.padding = "10px";
  button.style.border = "none";
  button.style.backgroundColor = "#718af5";
  button.style.color = "#fff";
  button.style.fontWeight = "bold";
  button.style.cursor = "pointer";

  // Add the button to the page
  document.body.appendChild(button);

  // Add a click event listener to the button
  button.addEventListener("click", function() {
      // Add your event code here
  });
})();