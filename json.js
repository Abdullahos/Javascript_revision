//string to json object
let req = '{\"name\": \"ali\", \"age\":24}';
let jsonReq = JSON.parse(req);
console.log(req, jsonReq);

//json object to string
console.log(JSON.stringify(jsonReq));