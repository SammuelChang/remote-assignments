// Assignment 3: Connect to Backend API by AJAX

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
