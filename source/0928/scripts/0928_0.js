function viewGoGo() 
{
    var x = 10;
    var y = 20;
    var z =      
    document.getElementById('demo').innerHTML =
    ex1() + "\n" + 
    ex2() + "\n" + 
    ex3() + "\n" + 
    ex4() + "\n" +
    ex5() + "\n" +
    ex6() + "\n" +
    ex7() + "\n"
    ;
}

function ex1()
{
    var x = 10; 
    var y = 20; 
    var z = x + y;
    return z;
}
function ex2()
{
    var x = "10"; 
    var y = "20"; 
    var z = x + y;
    return z;
}
function ex3()
{
    var x = 10;
    var y = 20;
    var z = "30";
    var result = x + y + z;
    return result;
}
function ex4()
{
    var x = "100"; 
    var y = "10"; 
    var z = x / y;
    return z;
}
function ex5()
{
    var x = "100"; 
    var y = "10"; 
    var z = x * y;
    return z;
}
function ex6()
{
    var x = "100"; 
    var y = "10"; 
    var z = x - y;
    return z;
}
function ex7()
{
    var x = "100"; 
    var y = "10"; 
    var z = x + y;
    return z;
}

function arrayLoopTest() 
{
    var fruits, text;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;

    text = "<ul>";
    for(i = 0; i < fLen; i++)
    {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById('doom').innerHTML = text;
}
function arrayLoopTestEach()
{
    var fruits, text;
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    text = "<ul>";
    fruits.forEach(generateText);
    text += "</ul>";

    document.getElementById('deep').innerHTML = text;
}

function generateText(value, text)
{
    text += "<li>" + value + "</li>";
}