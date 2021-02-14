// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function updateCardSelected(payload) {
  return { type: "Select_Card", payload };
}

export function GET_Articles(payload) {
    return { type: "GET_Articles", payload };
  }

  export function Opened_Element(payload) {
    return { type: "Opened_Element", payload };
  }

