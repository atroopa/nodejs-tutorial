console.clear();

const print = console.log;

import axios from "axios";
import chalk from "chalk";

const config = {
    url: 'https://jsonplaceholder.typicode.com/todos?_limit=4',
    method: 'POST'
}