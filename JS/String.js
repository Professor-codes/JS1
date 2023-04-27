var str1 = "HelloHTML";
document.write(str1), "<br>";

var str2 = "HelloJavascript";
document.write(str2.length), "<br>";
document.write(str2.indexOf("Java"), "<br>");

document.write(str2.slice(0, 1), "<br>");
document.write(str2.slice(0, 5), "<br>");

document.write(str2.substr(0,5), "<br>");
document.write(str2.substring(0, 5), "<br>");

document.write(str2.replace("Java", " - "), "<br>");

document.write(str2.toUpperCase(), "<br>");
document.write(str2.toLowerCase(), "<br>");