const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // I want a text box to take in a name with a submit button
  //  --- 12344321
  // I want to have a varibale for the input  
  // ------let name = params['input']
  //   --- name = 12344321
  //  take the srign and convert it into an array
  // ----- let NameSplit = .split(name)
  // ----- var SplitString = name.split("")
  // ----- var reverseName = splitString.reverse()
  // ----- var joinName = reverseArray.join("")
  // -----return joinArray;
  // take the array and reverse the character order 
  //    --- .reverseString(name) essentilly => reverseString(12344321)
  //    ---- let RName = ReverseString(name)
  //   ---- let 
//  after the words have been rejoined I want to test to see if the returned word is a match to the orginal input value
// ------- if(JoinName === name){
  // ------return: "true"
  // -------}else{
  //   -------return: "false"

//   function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// // reverseString("hello");
  // }

  else if (page == '/api') {
   const name = params['input']
   const SplitString = name.split("")
   const reverseArray= SplitString.reverse()
   const joinArray = reverseArray.join("")

    if('input' in params){
      if( joinArray === name){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          return: "true"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          return: "false"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
