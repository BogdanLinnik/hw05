function func(a,b,c,x1,x2,d){
var a=Number(prompt("a="),a), b=Number(prompt("b="),b), c=Number(prompt("c="),c),x1,x2,d;
d=Math.pow(b,2)-4*a*c;
if((b>=0)&&(c>=0)){
    document.write("Your quadratic equation:"+a+"x+"+b+"x+"+c+"=0<br>");
    } else if(b>=0){
        document.write("Your quadratic equation:"+a+"x+"+b+"x"+c+"=0<br>"); 
    } else if(c>=0){
        document.write("Your quadratic equation:"+a+"x"+b+"x+"+c+"=0<br>"); 
    } else {
        document.write("Your quadratic equation:"+a+"x"+b+"x"+c+"=0<br>"); 
    }
if(d<0){
     document.write("Discriminant="+d+", so we have no roots here");
} else if(d==0){
    x1=x2=(-1*b)/(2*a);
    document.write("Discriminant="+d+", so we have only one root="+x1)
} else{
    x1=(-1*b-Math.pow(d,1/2))/(2*a);
    x2=(-1*b+Math.pow(d,1/2))/(2*a);
    document.write("Discriminant="+d+", so we have two roots here: x1="+x1+" x2="+x2);
}
console.log(x1,x2);
}
