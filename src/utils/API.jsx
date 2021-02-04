import axios from "axios";
const APIKey = "ktRl6hM5PH2xVxYouRQctIN7phpaRjMr";
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";

const API = {
  // function to search for a random giphy based off of what the button data-target is
  // make ajax call
  search: query => {
    return axios.get(BASEURL + query + "&api_key=" + APIKey + "&limit=23")
  }
}

export default API;