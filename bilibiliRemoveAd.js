// ==UserScript==
// @name         bilibiliRemoveAds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Some extension for baidu.com
// @author       You
// @match        https://www.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @grant  GM_addStyle
// @run-at document-idle
// ==/UserScript==

(function() {
  'use strict';

  try {
    const elements = document.getElementsByClassName('banner-card b-wrap');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  } catch(e) {}

})();