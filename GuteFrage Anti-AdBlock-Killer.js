// ==UserScript==
// @name           GuteFrage Anti-AdBlock-Killer
// @name:de        GuteFrage Anti-AdBlock-Killer

// @description    Removes the annoying adblock reminder on German site "Gutefrage.net".
// @description:de Entfernt das nervige Adblock-Banner auf GuteFrage.net.

// @version        1.2.8
// @copyright      2023+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://www.gutefrage.net/nmms-assets/images/immutable/logos/fb_gutefrage.png

// @namespace      https://github.com/Rsge
// @homepageURL    https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer
// @supportURL     https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer/issues
// @updateURL      https://greasyfork.org/scripts/433725-gutefrage-anti-adblock-killer/code/GuteFrage%20Anti-AdBlock-Killer.user.js
// @downloadURL    https://greasyfork.org/scripts/433725-gutefrage-anti-adblock-killer/code/GuteFrage%20Anti-AdBlock-Killer.user.js

// @match          https://www.gutefrage.net/*

// @run-at         document-idle
// @grant          none
// ==/UserScript==

(function() {
  'use strict';
  let node;
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      node = mutation.addedNodes[0];
      if (mutation.addedNodes[0] != null && node.id == "wl-container") {
        console.log("Killing:");
        console.log(node);
        node.remove();
        console.log(`
         ▄              ▄
        ▌▒█           ▄▀▒▌
        ▌▒▒▀▄       ▄▀▒▒▒▐
       ▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
     ▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
   ▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀██▀▒▌      such adblock
  ▐▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▒▌
  ▌▒▒▐▄█▀▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
 ▐▒▒▒▒▒▒▒▒▒▒▒▌██▀▒▒▒▒▒▒▒▒▀▄▌
 ▌▒▀▄██▄▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌   much freedom
 ▌▀▐▄█▄█▌▄▒▀▒▒▒▒▒▒░░░░░░▒▒▒▐
▐▒▀▐▀▐▀▒▒▄▄▒▄▒▒▒▒▒░░░░░░▒▒▒▒▌
▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒░░░░░░▒▒▒▐
 ▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌             wow
 ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐
  ▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▌
    ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀
   ▐▀▒▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀
  ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▀    https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer`);
      }
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
