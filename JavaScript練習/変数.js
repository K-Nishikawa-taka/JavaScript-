process.stdin.resume();
process.stdin.setEncoding('utf8');
//var randnum = Math.random(); //変数に乱数(0~1の小数)を代入
var randnum = parseInt(Math.random() * 10) + 1; //1~10までの乱数(parseIntで小数点切り捨ての後1足す)
//console.log(randnum);
console.log("スライムが" + randnum + "匹あらわれた"); //変数playerの中身を表示
