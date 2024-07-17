// src/utils/http.js

import axios from "axios";
import { API_URL } from "../config";

const http = axios.create({
  baseURL: API_URL,
  headers: {
    // Add any headers here
    "Content-Type": "application/json",
  },
});

export default http;
