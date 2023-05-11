console.clear();

const print = console.log;

import axios from "axios";

async function getData() {
    try {
      const response = await axios.get('https://www.livemint.com/');
        
        //print(response.data);
        print("Status Code : " + response.status);
        print("Status Text : " + response.statusText);

    } catch (error) {
        print("error");
    }
  }
  
  getData();