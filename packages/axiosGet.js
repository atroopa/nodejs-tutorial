console.clear();

const print = console.log;

import axios from "axios";
import chalk from "chalk";

const config = {
    url: 'https://jsonplaceholder.typicode.com/todos?_limit=4',
    method: 'GET'
}


const getData = async () => {
    try {
      const response = await axios(config);
        
        print(response.data);
        //print("Status Code : " + response.status);
        //print("Status Text : " + response.statusText);
        //print(chalk.red("Response Headers: " + response.headers));

    } catch (error) {
        print("error");
    }
  }
  
  getData();