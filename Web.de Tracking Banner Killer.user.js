// ==UserScript==
// @name           Web.de Tracking Banner Killer
// @name:de        Web.de Tracking-Banner-Killer

// @description    Removes the annoying "privacy settings" banner on German site Web.de's Freemail service asking you to accept all tracking, pay, or be bothered constantly.
// @description:de Entfernt das nervige "Datenschutz"-Banner in Web.de Freemail, das euch zwingen will, zu bezahlen, jegliches Tracking zu akzeptieren oder ständig genervt zu werden.

// @version        1.0.3
// @copyright      2023+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://img.ui-portal.de/ux/webde/icons/favicon-32x32.png

// @namespace      https://github.com/Rsge
// @homepageURL    https://github.com/Rsge/Web.de-Tracking-Banner-Killer
// @supportURL     https://github.com/Rsge/Web.de-Tracking-Banner-Killer/issues
// @updateURL      https://greasyfork.org/scripts/475107-web-de-tracking-banner-killer/code/Webde%20Tracking%20Banner%20Killer.user.js
// @downloadURL    https://greasyfork.org/scripts/475107-web-de-tracking-banner-killer/code/Webde%20Tracking%20Banner%20Killer.user.js

// @match          https://bap.navigator.web.de/*

// @run-at         document-idle
// @grant          none
// ==/UserScript==

(function() {
  'use strict';
  var i;
  var dialogs = document.getElementsByClassName("dialog-app__blocker");
  var diaLen = dialogs.length;
  if (diaLen > 0) console.log("Killing:");
  for (i = 0; i < diaLen; i++) {
    console.log(dialogs[i]);
    dialogs[i].remove();
  }
  if (diaLen > 0) {
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
