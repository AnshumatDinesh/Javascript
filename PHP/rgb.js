let r=0,g=0,b=0;
function update(){
    //changing the font color in order to contrast the background
    document.getElementById("r").style.color="rgb("+String(255-r)+","+String(255-g)+","+String(255-b)+")";
    document.getElementById("g").style.color="rgb("+String(255-r)+","+String(255-g)+","+String(255-b)+")";
    document.getElementById("b").style.color="rgb("+String(255-r)+","+String(255-g)+","+String(255-b)+")";
    //updating the rgb values shown on the page
    document.getElementById("r").innerHTML="R:"+String(r);
    document.getElementById("g").innerHTML="G:"+String(g);
    document.getElementById("b").innerHTML="B:"+String(b);
}
function increment(n){
    if (n=='r' && r<255){
        r+=5;
    }
    else if(n=='g' && g<255){
        g+=5;
    }
    else if(n=='b' && b<255){
        b+=5;
    }
    document.body.style.background="rgb("+String(r)+","+String(g)+","+String(b)+")";
    update();
}
function decrement(n){
    if (n=='r' && r>10){
        r-=10;
    }
    else if(n=='g' && g>10){
        g-=10;
    }
    else if(n=='b' && b>10){
        b-=10;
    }
    document.body.style.background="rgb("+String(r)+","+String(g)+","+String(b)+")";
    update();
}
function cpy(){
    let temp=String(r)+","+String(g)+","+String(b);
    navigator.clipboard.writeText(temp);
    alert("Copied the text: " + temp);
}
function shuffle(){
    r=Math.floor(Math.random() * 255);
    g=Math.floor(Math.random() * 255);
    b=Math.floor(Math.random() * 255);
    document.body.style.background="rgb("+String(r)+","+String(g)+","+String(b)+")";
    update();
}
function zero(){
    r=0;
    g=0;
    b=0;
    document.body.style.background="rgb("+String(r)+","+String(g)+","+String(b)+")";
    update();
}