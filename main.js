const el = document.querySelector("#hello")
console.log(el)
let i=0
function kkk(){
    el.innerText = i;
    //if(i%2===0){el.innerText = "傘を盗むな！"}
    i++;
    //console.log(i)
    if(i<0){
        el.innerText = "傘を返して！！！！"
    }
}

function ddd(){
    el.innerText = i;
    i--;
    if(i<0){
        el.innerText = "傘を返して！！！！"
    }
}

function jjj(){
    i=i-i
    el.innerText = i;
}
