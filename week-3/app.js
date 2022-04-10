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
const cookieParser = require('cookie-parser'); //※

const app = express();
const port = 3000;

app.use(cookieParser()); //for cookies parsing
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
        let sum = eval(printNumber(number));
        res.send(`Your input number get result of ${sum}`);
    } else if (para) {
        res.send(`Wrong Parameter`);
    } else {
        res.send(`Lack of Parameter`);
    }
});

// Assignment 4: HTTP Cookie (Advanced Optional)
// 直接訪問時，若有cookie則打招呼，若無cookie則顯示表單
app.get('/myName', function(req, res) {
    let cookieName = req.cookies.username
    if (typeof cookieName !== 'undefined') {
        res.send(
            `<h1>Hello, ${cookieName}</h1>
            <form id="form1" action="/clearCookie" method="post">
            <input type="submit" value="我不是這個人">
            </form>
            `);
    } else {
        res.send(
            `<h1>Hello, who are U?</h1>
            <form id="form2" action="/myName" method="post">
            <input name="username" placeholder="Sam">
            <input type="submit" value="Submit">
            </form>
        `)
    }
});

app.post('/clearCookie', (req, res) => {
    res.clearCookie('username');
    res.redirect('/myName');
});

// 透過post提交表單時，紀錄cookie並重新載入（跳轉至相同頁面）
app.post('/myName', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/myName');
});

// 透過url進行query string時，若有cookie則跳轉頁面並打招呼，若無cookie則紀錄並跳轉
app.get('/trackName', function(req, res) {
    let cookieName = req.cookies.username
    if (typeof cookieName !== 'undefined') {
        res.redirect('/myName');
    } else {
        res.cookie('username', req.query.name);
        res.redirect('/myName');
    }
});



app.listen(port, () => {
    console.log(`
                    Example app is listening on port
                    `);
});