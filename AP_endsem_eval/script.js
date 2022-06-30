let num_memory=0;
let curr_op=""
function square(){
    let display=document.getElementById("display");
    display.innerHTML=String(parseFloat(display.innerHTML)*parseFloat(display.innerHTML))
}
function neg(){
    let display=document.getElementById("display");
    console.log(display.innerHTML)
    display.innerHTML=String(-1*parseFloat(display.innerHTML));
}
function root(){
    let display=document.getElementById("display");
    if(parseFloat(display.innerHTML)<0){
        display.innerHTML="ERROR";
        return;
    }
    display.innerHTML=Math.sqrt(parseFloat(display.innerHTML));
}
function inverse(){
    let display=document.getElementById("display");
    if(parseFloat(display.innerHTML)==0.0){
        display.innerHTML="ERROR";
        return;
    }
    display.innerHTML=String(1/parseFloat(display.innerHTML));
}
function fact(){
    let display=document.getElementById("display");
    if(parseFloat(display.innerHTML)<0 || display.innerHTML.includes('.')){
        display.innerHTML="ERROR";
        return;
    }
    let fact=1;
    for(let i=2;i<=parseInt(display.innerHTML);i++){
        fact*=i;
    }
    display.innerHTML=String(fact);
}
function decimal(){
    let display=document.getElementById("display");
    if(display.innerHTML.includes(".")){
        console.log("||")
        return
    }
    display.innerHTML=display.innerHTML+"."
}
function backspace(){
    let a=document.getElementById("display").innerHTML;
    let a_cpy="";
    for(let i=0;i<a.length-1;i++){
        a_cpy+=a[i];
    }
    a=a_cpy;
    document.getElementById("display").innerHTML=a;
}
function clr(){
    let a=document.getElementById("display").innerHTML;
    a="";
    document.getElementById("display").innerHTML=a;
}
function allclr(){
    let a=document.getElementById("display").innerHTML;
    a="";
    curr_op="";
    num_memory=0;
    document.getElementById("display").innerHTML=a;
}
function addnumber(n){
    let a=document.getElementById("display").innerHTML;
    if(a=="ERROR"){
        a="";
    }
    a=a+String(n);
    document.getElementById("display").innerHTML=a;
}
function operator(o){
    let a=document.getElementById("display").innerHTML;
    num_memory=parseFloat(a);
    console.log(num_memory)
    curr_op=o;
    a="";
    document.getElementById("display").innerHTML=a;
}
function equal(){
    let a=document.getElementById("display").innerHTML;
    let num2=parseFloat(a)
    switch (curr_op) {
        case '+':
                console.log(num_memory+num2);
                a=num_memory+num2;
                break;
        case '-':
            console.log(num_memory-num2);
            a=num_memory-num2;
            break;
        case '*':
            console.log(num_memory*num2);
            a=num_memory*num2;
            break;
        case '/':
            if(num2==0){
                a="ERROR";
            }
            else{
                console.log(num_memory/num2);
                a=num_memory/num2;
            }
            break;
        default:
            break;
    }
    document.getElementById("display").innerHTML=a;
    num_memory=0;
    curr_op="";
}