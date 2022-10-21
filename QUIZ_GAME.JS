function send() {

    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer = parselInt(number1)* parseInt(number2);
    window.location="math.html";
 }
 
 document.getElementById("output").innerHTML = row;
 document.getElementById("number1").value = "";
 document.getElementById("number2").value="";