// ==UserScript==
// @name           Web.de Tracking Banner Killer
// @name:de        Web.de Tracking-Banner-Killer

// @description    Removes the annoying "privacy settings" banner on German site Web.de's Freemail service asking you to accept all tracking, pay, or be bothered constantly.
// @description:de Entfernt das nervige "Datenschutz"-Banner in Web.de Freemail, das euch zwingen will, zu bezahlen, jegliches Tracking zu akzeptieren oder ständig genervt zu werden.

// @version        1.1.1
// @copyright      2023+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://img.ui-portal.de/ux/webde/icons/favicon-32x32.png

// @namespace      https://github.com/Rsge
// @homepageURL    https://github.com/Rsge/Web.de-Tracking-Banner-Killer
// @supportURL     https://github.com/Rsge/Web.de-Tracking-Banner-Killer/issues
// @updateURL      https://greasyfork.org/scripts/475107-web-de-tracking-banner-killer/code/Webde%20Tracking%20Banner%20Killer.user.js
// @downloadURL    https://greasyfork.org/scripts/475107-web-de-tracking-banner-killer/code/Webde%20Tracking%20Banner%20Killer.user.js

// @match          https://web.de/*
// @match          https://navigator.web.de/*
// @match          https://bap.navigator.web.de/*

// @run-at         document-idle
// @grant          none
// ==/UserScript==

(function() {
  'use strict';
  let blocked = false;
  let redirect = false;
  if (document.URL.includes("consent-management")) {
    blocked = true;
    redirect = true;
  } else {
      let i;
      let dialogs = document.getElementsByClassName("dialog-app__blocker");
      let diaLen = dialogs.length
      if (diaLen > 0) {
        console.log("Killing:");
        blocked = true;
      }
      for (i = 0; i < diaLen; i++) {
          console.log(dialogs[i]);
          dialogs[i].remove();
      }
  }
  if (blocked) {
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
  if (redirect) {
    window.open("https://web.de/", "_top");
  }
})();
