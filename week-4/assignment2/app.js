
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`
                    Example app is listening on port
                    `);
});
// const XMLHttpRequest = require('xhr2');

// function ajax(src, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         callback(xhr.responseText);
//       }
//     };
//     xhr.open("GET", src);
//     xhr.send();
//   }

// function render(data){
//     // your code here.
//     // document.createElement() and appendChild() are preferred. No innerHTML or 
//     // something alike
//     let content = document.querySelector(".content");
//     let productInfo = JSON.parse(data);
//     console.log(productInfo);
// } 

// ajax(
//     "https://appworks-school.github.io/Remote-Aassigiment-Data/products", 
//     function(response){
//         render(response); 
//     }
// ); // you should get product information in JSON format and render data in the page


