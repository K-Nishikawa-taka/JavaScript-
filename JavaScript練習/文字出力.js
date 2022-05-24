process.stdin.resume();
process.stdin.setEncoding('utf8');
console.log("<h1>hello world</h1>"); //htmlで表示するとh1レベルで表示
console.log("<p>世界の皆さん、"); //pタグはbrが無いと改行されない(html表示の場合)、textの場合は1行毎に改行
console.log("<b>こんにちは</b></p>");

process.stdout.write("<h1>hello world</h1>"); //text表示でも改行しない
process.stdout.write("<p>世界の皆さん、"); //\nで改行
process.stdout.write("<b>こんにちは</b></p>");
