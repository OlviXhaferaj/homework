let dis = document.getElementById('display');
console.log(dis.innerText);
function press(n){
    if(dis.innerText=='0'){
        dis.innerText='';
    }
    dis.innerText= dis.innerText+n;
}
function setOP(e){
    if(dis.innerText=='0'){
        dis.innerText='';
    }
    dis.innerText= dis.innerText+e
    console.log(e);
}
function calculate(){
    display.innerText = eval(display.innerText);

}
function clr(){
    dis.innerText= '0';
}

