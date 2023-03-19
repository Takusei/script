// ==UserScript==
// @name         baiduMenu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Some extension for baidu.com
// @author       You
// @match        https://www.baidu.com/*
// @icon         https://www.baidu.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // landing page to my favorit page
  try {
    document.getElementById('s_menu_mine').click()
  } catch(e) {}

  // add google search button
  // const baiduButton = document.getElementById('su')
  // const googleButton = document.createElement("div")
  // googleButton.innerHTML = `
  //   <input type="button" id="google" value="Google搜索" class="btn self-btn bg" style="float:right; font-size:14px; text-align:center; text-decoration:none; width:100px; height:33px; line-height:33px; margin-left:5px;-webkit-appearance:none;-webkit-border-radius:0;border: 0;color:#fff;letter-spacing:1px;background:#CC3333;border-bottom:1px solid #CC0033;outline:medium;" onmouseover="this.style.background=\'#CC0033\'" onmouseout="this.style.background=\'#CC3333\'">
  // `
  // baiduButton.after(googleButton)
  // $("#google").click(function(){
  //     window.open('https://www.google.com/search?&q=' + encodeURIComponent($('#kw').val()));
  // })
})();