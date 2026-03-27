

var num1 = 100;
var hak1 = String(num1);




var zenk1=toFullWidth(hak1); 

 //document.getElementById("result").innerHTML = zenk1 ;

 // document.getElementById("result2").innerHTML = zenk2 ;
  

function toFullWidth(str) {
  return str.replace(/[!-~]/g, function(s) {
    // 文字コードを 0xFEE0 分ずらす
    return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  }).replace(/ /g, "\u3000"); // スペースのみ別途変換（半角:0x20 -> 全角:0x3000）
}







document.getElementById('calculate').onclick = function () {
  
  let number1 = document.getElementById('carbo').value;

  let number2 = document.getElementById('carbor').value;
  let number3 = document.getElementById('mbgl').value;
  
  let number4 = document.getElementById('carbor2').value;

 

  let result1 =  Math.trunc((number1 / 10) * 100) / 100 ;
  let result2 =  Math.round((result1 * number2) * 100) / 100;
  let result3 =  Math.round((number3 - num1) * 100) / 100;
  let result4 =  Math.round((result3 / number4) * 100) / 100;
  let result5 =  Math.round((result2 + result4) * 100) /100;
  
  const num = result5;
// 1. 10倍して、小数第一位を整数部分に持ってくる (1234.56)
// 2. Math.floor() で切り捨て (1234)
// 3. 10で割った余りを求める (1234 % 10 = 4)
 let firstDecimal = Math.floor(Math.abs(num) * 10) % 10;
 let result7 =  Math.trunc(result5) ;


 if (firstDecimal >= 5){
    result7 =  result7  + 0.5 ;
 
 } else {
    result7 =  result7  + 0;
  
 }
 


  let hak2 = String(number4);
  let hak3 = String(number1);
  let hak4 = String(result1);
  let hak5 = String(number2);
  let hak6 = String(result2);
  let hak7 = String(number3);
  let hak8 = String(result3);
  let hak9 = String(result4);
  let hak10 = String(result5);
  let hak11 = String(result7.toFixed(1));
  
  
  var zenk2=toFullWidth(hak2);
  let zenk3=toFullWidth(hak3);
  let zenk4=toFullWidth(hak4);
  let zenk5=toFullWidth(hak5);
  let zenk6=toFullWidth(hak6);
  let zenk7=toFullWidth(hak7);
  let zenk8=toFullWidth(hak8);
  let zenk9=toFullWidth(hak9);
  let zenk10=toFullWidth(hak10);
  let zenk11=toFullWidth(hak11);
  
 

 
  document.getElementById("result10").innerHTML = "カーボ：" + zenk3 + "  ÷１０ ＝  " + zenk4 ;
  document.getElementById("result11").innerHTML = "インスリン単位：" + zenk4 + " × "+ zenk5  +" ＝ " + zenk6  ;
  document.getElementById("result12").innerHTML = "下げたい値：" + zenk7 + " － " + zenk1 +  " ＝ " + zenk8 ;
  document.getElementById("result13").innerHTML = "補正単位：" + zenk8 + " ÷ "+ zenk2  +" ＝ " + zenk9  ;
  document.getElementById('result15').innerHTML = "修正後単位：" + zenk10+" ≈ " + zenk11 +"単位" ;
  document.getElementById('result16').innerHTML = "合計インスリン単位は、" + zenk11 +"単位" ;

  
  let fusu1 = Math.sign(result3);
   console.log (fusu1);
 if (fusu1 == -1){

     document.getElementById("result14").innerHTML = "計算後単位：" + zenk6 + " ＋ " +  "(" +zenk9 + ")"  + "＝ " + zenk10 ;
 } else {
     document.getElementById("result14").innerHTML = "計算後単位：" + zenk6 + " ＋ " +zenk9 + " ＝ " + zenk10 ;
 }


   

  
  
  
  
  
  
 
}





