// ==UserScript==
// @name         baiduMenu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Go to my favorit page when first enter baidu.com
// @author       You
// @match        https://www.baidu.com/*
// @icon         https://www.baidu.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  try {
    document.getElementById('s_menu_mine').click()
  } catch(e) {}

})();