console.clear();

const print = console.log;

import axios from "axios";
import chalk from "chalk";

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    url: "/todos",

    headers: {
        "User-Agent" : "Node.js test",
        "Content-Type" : "application/x-ww-form-urlencoded"
    },

    method: "post",
    
    data: new URLSearchParams({
        limit: 3
    }),

    responseType: "json",
    responseEncoding : "utf-8",
    timeOut: 500

}


const send = async () => {
    
    try{
        const response = await axios(config);
        print(response.data);
    } catch (error){
        print(error.message)
    }

}

send();