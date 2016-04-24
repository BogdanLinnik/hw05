function func(){
var a=Number(prompt("a="),a), b=Number(prompt("b="),b), c=Number(prompt("c="),c),x1,x2,d,k;
d=Math.pow(b,2)-4*a*c;
if((b>=0)&&(c>=0)){
    k="Your quadratic equation:"+a+"x+"+b+"x+"+c+"=0 ";
    } else if(b>=0){
        k="Your quadratic equation:"+a+"x+"+b+"x"+c+"=0 "; 
    } else if(c>=0){
        k="Your quadratic equation:"+a+"x"+b+"x+"+c+"=0"; 
    } else {
        k="Your quadratic equation:"+a+"x"+b+"x"+c+"=0"; 
    }
if(d<0){
     k+="Discriminant="+d+", so we have no roots here";
} else if(d==0){
    x1=x2=(-1*b)/(2*a);
    k+="Discriminant="+d+", so we have only one root="+x1;
} else{
    x1=(-1*b-Math.pow(d,1/2))/(2*a);
    x2=(-1*b+Math.pow(d,1/2))/(2*a);
    k+="Discriminant="+d+", so we have two roots here: x1="+x1+" x2="+x2;
}
alert(k);
}
function func2(){
var a=Number(0), b=Number(1), c, k=Number(1), i,z;
i=Number(prompt("How much Fibonacci sequences you want see?"));
for(k=1;k<i;k++){
    if(k==1){
    z=a+" ";
} else if(k==2){
    z+=b+" ";    
} else if(k>2){
    c=a+b;
    a=b;
    b=c;
    z+=c+" ";
}
}
if (i<1){
    alert("Wrong value");
} else {
    alert(z);
}
}

