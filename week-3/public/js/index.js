// Assignment 3: Connect to Backend API by AJAX
// 參考網頁：https://stackoverflow.com/questions/51007541/xmlhttprequest-after-submit-from-form


// 參考上面的網頁做的，提交表單後停止事件，並將form裡面存的value拋出，然後執行xhr的function
document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault();
    var query = e.target.elements['query'].value;
    console.log(e.target.elements);
    loadDoc(query);
});

function loadDoc(number) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        let str = xhr.responseText;
        if (xhr.readyState === 4) {
            if (+number) { //+號轉型為number，符合時表示輸入的是數字，可以呈現算式與結果
                document.getElementById('test').innerHTML = `${str} <br> = ${eval(str)}`;
            } else {
                document.getElementById('test').innerHTML = `${str}`;
            }
        }
    }
    xhr.open('GET', `http://localhost:3000/getData?number=${number}`); // 串接這個網址，會回傳寫好的文字
    xhr.send();
}