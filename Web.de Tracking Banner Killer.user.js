// ==UserScript==
// @name           Web.de Tracking Banner Killer
// @name:de        Web.de Tracking-Banner-Killer

// @description    Removes the annoying "privacy settings" banner asking you to accept all tracking, pay, or be bothered constantly.
// @description:de Entfernt das nervige "Datenschutz"-Banner, welches euch zwingen will, zu bezahlen, jegliches Tracking zu akzeptieren oder ständig genervt zu werden.

// @version        1.0.0
// @copyright      2023+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://img.ui-portal.de/ux/webde/icons/favicon-32x32.png

// @namespace      https://github.com/Rsge
// @homepageURL    https://github.com/Rsge/Web.de-Tracking-Banner-Killer
// @supportURL     https://github.com/Rsge/Web.de-Tracking-Banner-Killer/issues

// @match          https://bap.navigator.web.de/*

// @run-at         document-idle
// @grant          none
// ==/UserScript==

(function() {
  'use strict';
  var i;
  var dialogs = document.getElementsByClassName("dialog-app__blocker");
  if (dialogs.length > 0) console.log("Killing:");
  for (i = 0; i < dialogs.length; i++) {
    console.log(dialogs[i]);
    dialogs[i].remove();
  }
  if (dialogs.length > 0) {
    console.log(`
         ▄              ▄
        ▌▒█           ▄▀▒▌
        ▌▒▒▀▄       ▄▀▒▒▒▐
       ▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
     ▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
   ▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀██▀▒▌      such annoyance block
  ▐▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▒▌
  ▌▒▒▐▄█▀▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
 ▐▒▒▒▒▒▒▒▒▒▒▒▌██▀▒▒▒▒▒▒▒▒▀▄▌
 ▌▒▀▄██▄▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌   much privacy
 ▌▀▐▄█▄█▌▄▒▀▒▒▒▒▒▒░░░░░░▒▒▒▐
▐▒▀▐▀▐▀▒▒▄▄▒▄▒▒▒▒▒░░░░░░▒▒▒▒▌
▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒░░░░░░▒▒▒▐
 ▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌             wow
 ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐
  ▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▌
    ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀
   ▐▀▒▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀
  ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▀    https://github.com/Rsge/Web.de-Tracking-Banner-Killer`);
  }
})();