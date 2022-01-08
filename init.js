"use strict";

const searchButton = document.querySelector("button");
const searchCity = document.querySelector("#city");

const loadingText = document.querySelector("#load");
const weatherBox = document.querySelector("#weather");

const weatherCity = weatherBox.firstElementChild;
const weatherDescription = document.querySelector("#weatherDescription");
const weatherTemperature = weatherBox.lastElementChild;
