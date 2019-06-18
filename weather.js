// ==UserScript==
// @name         A Better Weather
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes Weather.gov less ugly
// @author       chexbox
// @updateURL    https://raw.githubusercontent.com/chexbox/dark-weather/master/weather.js
// @match        https://forecast.weather.gov/MapClick.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let css = document.createElement("style");
    css.innerHTML = "";

    css.innerHTML += "body, main {background-color: #222; color: #fff;} ";
    css.innerHTML += ".form-control, .btn {background-color: #333; color: #fff; border-color: #111; border-radius: 0; } ";
    css.innerHTML += ".btn-default { background-image: none; box-shadow: none; -webkit-box-shadow: none; } ";
    //css.innerHTML += "p, div { color: #fff !important;} ";
    css.innerHTML += "#seven-day-forecast .forecast-tombstone .period-name, #global_localnews_title, #getForecast #getfcst-head { color: #fff;} ";
    css.innerHTML += ".panel {background-color: #333; border-radius: 0;} ";
    css.innerHTML += ".panel-default {border-color: #111;} ";
    css.innerHTML += ".panel-default>.panel-heading, .panel-danger>.panel-heading { background-color: #222; background-image: none; color: #fff; border-color: #111; }";
    css.innerHTML += ".panel-heading { border-radius: 0; }";
    css.innerHTML += ".row-odd {background-color: #333;}";
    css.innerHTML += ".row-even {background-color: #222;}";
    css.innerHTML += "#seven-day-forecast .forecast-tombstone .forecast-icon { border-radius: 0; }";
    css.innerHTML += "#sitemap { background: none; }";
    css.innerHTML += ".autocomplete-suggestions { background-color: #333; border-color: #111; }";
    css.innerHTML += ".autocomplete-selected { background-color: #222; }";


    document.body.appendChild(css);
})();
