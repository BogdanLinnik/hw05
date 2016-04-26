qa.addEventListener('click',calculating,false);
function calculating() {
	var labelcalculating=document.getElementById('answer'), x1=Number(), x2=Number(), d=Number(), a=Number(document.getElementById('a').value), b=Number(document.getElementById('b').value), c= Number(document.getElementById('c').value)
    if(a==0){
        alert("Error:Wrong value!(a=0)");
    }
    d=b*b-4*a*c;
    if(d<0){
        labelcalculating.innerHTML=("Discriminant="+d+", so we have no roots here");
    } else if(d==0){
        x1=(-1*b)/(2*a);
        labelcalculating.innerHTML=("Discriminant="+d+", so we have only one root="+x1);
    } else{
        x1=(-1*b-Math.pow(d,1/2))/(2*a);
        x2=(-1*b+Math.pow(d,1/2))/(2*a);
        labelcalculating.innerHTML=("Discriminant="+d+", so we have two roots here: x1="+x1+" x2="+x2);
    }
}
fs.addEventListener('click',sequence,false);
function sequence(){
    var labelsequence=document.getElementById('numbers'), num=Number(document.getElementById('num').value), counter=Number(1),fq=Number(1), sq=Number(1), tq=Number(), result=String();
    if (num<1){
         alert("Error:Wrong value!")
    } else {
    for(counter=1;counter<=num;counter++){    
        if(counter==1){
            result+=fq+" ";
    } else if(counter==2){ 
        result+=sq+ " ";
    } else if(counter>2){
        tq=fq+sq;
        fq=sq;
        sq=tq;
        result+=tq+" ";
    }
    }
    labelsequence.innerHTML=(result);
    }
}

