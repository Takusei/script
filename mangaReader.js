// ==UserScript==
// @name         mangaReader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  use side button to go to next page or manga site
// @author       You
// @match        https://www.colamanga.com/*
// @match        https://www.manhuagui.com/*
// @icon         https://www.colamanga.com/favicon.png
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // remove existing event
  const removeExistingEvent = () =>{
    const events = [
      'click',
      'mousedown',
      'mouseup',
      'mousemove',
    ];

    events.forEach(event => {
      console.log('remove event', event);
      document.removeEventListener(event, () => {});
    });
  }

  removeExistingEvent();


  var scriptElements = document.querySelectorAll('script');
  console.log('scriptElements', scriptElements);

  scriptElements.forEach(script => {
    var scriptContent = script.textContent;
    scriptContent = scriptContent.replace('__cad.read_periodical();', '')
    script.textContent = scriptContent;
  });

  const mangaReader = (next=false) => {
    console.log(e);
    let arr = window.location.href.split('/');
    let num = Number(arr[arr.length - 1].split('.')[0]);
    arr.pop();
    let url = arr.join('/');

    let left = num - 1;
    let right = num + 1;
    next ? window.location.href = url + '/' + right + '.html' : window.location.href = url + '/' + left + '.html';
  };

  document.addEventListener("mouseup", (e) => {
    switch (e.button) {
      case 0:
        // alert( "Left button clicked.");
        break;
      case 1:
        // alert( "Middle button clicked.");
        break;
      case 2:
        // alert( "Right button clicked.");
        break;
      default:
        if (e.button == 4) {
          console.log(window.location.hostname)
          switch (window.location.hostname.toString()) {
            case 'www.manhuagui.com':
              try {
                const nextBtn = document.getElementsByClassName("btn-red nextC");
                nextBtn[0].click()
              }catch(e) {};
              break;
            case 'www.colamanga.com':
              mangaReader(true);
              break;
          }
        }
    }
  });

})();