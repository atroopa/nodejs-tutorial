console.clear();

const print = console.log;

import axios from "axios";
import chalk from "chalk";

const getData = async () => {
    try {
      const response = await axios.get('https://www.livemint.com/');
        
        //print(response.data);
        print("Status Code : " + response.status);
        print("Status Text : " + response.statusText);
        print(chalk.red("Response Headers: " + response.headers));

    } catch (error) {
        print("error");
    }
  }
  
  getData();