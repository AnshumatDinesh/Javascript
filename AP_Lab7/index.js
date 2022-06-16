function red(){
    document.body.style.backgroundColor="rgb(255,0,0)";
}
function green(){
    document.body.style.backgroundColor="rgb(0,255,0)";
}
function blue(){
    document.body.style.backgroundColor="rgb(0,0,255)";
}
function white(){
    document.body.style.backgroundColor="rgb(255,255,255)";
}
function random(){
    let r=0,g=0,b=0;
    r=Math.floor(Math.random() * 255);
    g=Math.floor(Math.random() * 255);
    b=Math.floor(Math.random() * 255);
    document.body.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(b)+")";
}