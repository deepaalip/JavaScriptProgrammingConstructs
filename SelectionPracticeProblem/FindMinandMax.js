let digit1 = Math.floor(Math.random() * 1000);
let digit2 = Math.floor(Math.random() * 1000);
let digit3 = Math.floor(Math.random() * 1000);
let digit4 = Math.floor(Math.random() * 1000);
let digit5 = Math.floor(Math.random() * 1000);

if((digit1>digit2)&&(digit1>digit3)&&(digit1>digit4)&&(digit1>digit5)){
    console.log("Maximum number :" +digit1);
}
if((digit2>digit1)&&(digit2>digit3)&&(digit2>digit4)&&(digit2>digit5)){
    console.log("Maximum number :" +digit2);
}
if((digit3>digit1)&&(digit3>digit2)&&(digit3>digit4)&&(digit3>digit5)){
    console.log("Maximum number :" +digit3);
}
if((digit4>digit1)&&(digit4>digit2)&&(digit4>digit3)&&(digit4>digit5)){
    console.log("Maximum number :" +digit4);
}
else{
    console.log("Maximum number :" +digit5);
}

if((digit1<digit2)&&(digit1<digit3)&&(digit1<digit4)&&(digit1<digit5)){
    console.log("Minimum number :" +digit1);
}
if((digit2<digit1)&&(digit2<digit3)&&(digit2<digit4)&&(digit2<digit5)){
    console.log("Minimum number :" +digit2);
}
if((digit3<digit1)&&(digit3<digit2)&&(digit3<digit4)&&(digit3<digit5)){
    console.log("Minimum number :" +digit3);
}
if((digit4<digit1)&&(digit4<digit2)&&(digit4<digit3)&&(digit4<digit5)){
    console.log("Minimum number :" +digit4);
}
else{
    console.log("Minimum number :" +digit5);
}