/*using function 
var function square() {
    var num=16;
    document.write("<br/> Result is: " +num*num);
    
}
square();*/

// parameterized function calling
function square_p(num1,num2,num3){
document.write("<br/> Parameterized function's result of add is: " +(num1+num2+num3));
document.write("<br/> Parameterized function's result of sub is: " +(num1-num2-num3));
document.write("<br/> Parameterized function's result of mul is: " +(num1*num2*num3));
document.write("<br/> Parameterized function's of div result is: " +(num1/num2/num3));

}

let n1=Number(prompt("Enter the value of n1"));
let n2=Number(prompt("Enter the value of n2"));
let n3=Number(prompt("Enter the value of n3"));

square_p(n1,n2,n3);