function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answser = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "/<h4>";
    input_box = "<br>Answer : <input type = 'text' id= 'input_check_box>";
    check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button";

    document,getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}