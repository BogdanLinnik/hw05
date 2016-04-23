function func2(){
var a=Number(0), b=Number(1), c, k=Number(1), i;
i=Number(prompt("How much Fibonacci sequences you want see?"));
for(k=1;k<i;k++){
    if(k==1){
    document.write(a+" ");
} else if(k==2){
    document.write(b+" ");    
} else if(k>2){
    c=a+b;
    a=b;
    b=c;
    document.write(c+" ");
} else {
    alert("Wrong value");
}
}
}
