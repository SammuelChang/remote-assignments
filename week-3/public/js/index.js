// Assignment 3: Connect to Backend API by AJAX
// 1. Update your Express project to serve static files. You can refer to this document.
// 2. Serve a static HTML file named sum.html. It means you can enter
// http://localhost:3000/sum.html in a browser’s address bar to get this HTML page.
// 3. Write some JavaScript code in sum.html to make an HTTP request by AJAX to
// http://localhost:3000/getData?number=10, and get the result 55 from server.
// 4. Write a simple user interface to let users enter a number and get a result from the
// server. (For a simple example, a text input and a button.)


function loadDoc() {
    const xhr = new XMLHttpRequest();
    let url = 'http://localhost:3000/getData';
    let params = `?number=200`;

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            let str = xhr.responseText;
            document.getElementById('test').innerHTML = `${str} <br> = ${eval(str)}`;
        }
    }
    xhr.open('GET', url + params);
    xhr.send();
}