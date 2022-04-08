// ------------------終端機輸入資訊------------------
// 建立資料夾   mkdir appWorkSchool/week-3/assignment1 
// 進入資料夾   cd appWorkSchool/week-3/assignment1 
// 建立JS      touch app.js
// npm初始化   npm init -y
// express安裝 npm install express
// nodemon安裝 npm install nodemon
// git忽略設定 touch .gitignore
// nodemon執行 nodemon app.js
// 輸入以下程式區塊後，儲存，並置瀏覽器輸入localhost:3000就有東西惹


const express = require('express');
const bodyParser = require('body-parser'); //
const XMLHttpRequest = require('xhr2');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Assignment 1: Your First Web Server
app.get('/', (req, res) => {
    res.send('Hello World! -> This is appWorkSchool remote assignment and it\'s difficult!!')
})


// Assignment 2: Build Backend API for Front-End
function printNumber(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += `${i}+`;
    }
    return result.slice(0, -1);
}

app.get('/getData', (req, res) => {
    var para = req.query.number;
    var number = Number(req.query.number);
    // console.log(number);
    if (Math.floor(number) === number && number >= 1) {
        res.send(printNumber(number));
    } else if (para) {
        res.send(`Wrong Parameter`);
    } else {
        res.send(`Lack of Parameter`);
    }
});

app.listen(port, () => {
    console.log(`
                    Example app listening on port ${port}
                    `);
})
