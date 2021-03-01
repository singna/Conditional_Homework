var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("Enter your Number: "));

if(isNaN(num1)){
  containerEle.innerHTML = "Please try again";
}else{
  containerEle.innerHTML = "Great move on next";
}

var num2 = Number(prompt("Enter your number: "));

if(isNaN(num2)){
  containerEle.innerHTML = "The second entry is inncorect";
}else{
  containerEle.innerHTML = "Great move on next";
}

var num3= prompt("Please enter a operation: +,-,/,*");

if(num3=="+"){
  containerEle.innerHTML = "The answer is " + (num1+num2);
}else if(num3=="-"){
  containerEle.innerHTML = "The answer is " + (num1-num2);
}else if(num3=="/"){
  containerEle.innerHTML = "The answer is " + (num1/num2);
}else if(num3=="*"){
  containerEle.innerHTML = "The answer is " + (num1*num2);
}else{
  containerEle.innerHTML = "The operation entered cannot be defined.";
}