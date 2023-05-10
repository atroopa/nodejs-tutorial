import https from "https";

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/todos?_limit=3',
  method: 'GET'
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();