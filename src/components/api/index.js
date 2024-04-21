import axios from "axios";

let APIENDPOINT = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbum = async () => {
    try{
    let response = await fetch(`${APIENDPOINT}albums/top`);
    let data = await response.json();
    return data;

    }catch(err){
      console.log("Error found", err)
    }
  }

  export const fetchNewAlbum = async () => {
    try{
       let response = await axios.get(`${APIENDPOINT}albums/new`)
       return response.data
    }catch(err){
        console.log("error found in new album", err)
    }
  }

  export const fetchAllSongs = async () => {
    try{
      let response = await axios.get(`${APIENDPOINT}songs`);
      return response.data
    }catch(err){
      console.log(err)
    }
  }

  export const fetchSongsByGenre = async () => {
    try{
      let response = await axios.get(`${APIENDPOINT}genres`);
      console.log("genres", response.data);
      return response.data
    }catch(err){
      console.log(err)
    }
  }

  export const fetchFAQ = async() => {
    try{
      let response = await axios.get(`${APIENDPOINT}/faq`);
      return response.data
    }catch(err){
      console.log(err)
    }
  }