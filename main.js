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
        el.className = "no"
    }
    if(i>-1){
        el.className = "yes"
    }
}

function ddd(){
    el.innerText = i;
    i--;
    if(i<0){
        el.innerText = "傘を返して！！！！"
        el.className ="no"
    }
    if(i>-1){
        el.className = "yes"
    }
}

function jjj(){
    i=i-i
    el.innerText = i;
    el.className = "yes"
}

const rr=document.querySelector("#janken")
console.log(rr)
const g = 0
function aaa(){
    const g = Math.random()
    if(g<1/3){
        rr.innerText = "勝ち！"
        rr.className = "no"
    }
    if(g<2/3 && g>=1/3){
        rr.innerText = "引き分け"
        rr.className = "yes"
    }
    if(g<1 && g>=2/3){
        rr.innerText = "負け！！！！！！"
        rr.className = "omg"
    }
    console.log(g)
}


//星座占い
const ee=document.querySelector("#seiza")
console.log(ee)
const day = new Date()
console.log(day)
const seizaa=["牡羊座","牡牛座","双子座","蟹座","獅子座","乙女座","天秤座","蠍座","射手座","山羊座","水瓶座","魚座"]

// function rand(X){
//     const A = 1664525;
//     const C = 1013904223;
//     const M = 2147483647;
//     return (X * A + C) % M;
//}
class Random {
    constructor(seed = 88675123) {
        this.x = 123456789;
        this.y = 362436069;
        this.z = 521288629;
        this.w = seed;
    }

    // XorShift
    next() {
        let t;

        t = this.x ^ (this.x << 11);
        this.x = this.y; this.y = this.z; this.z = this.w;
        this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8)); 
        return Math.abs(this.w)
    }
}
const count=30
const seed = parseInt(Date.now()/1000/60/60/24+1)
console.log(seed)
const rng = new Random(seed)
console.log(rng.next())

for(let u=0;u<count;u++){
    let flip1 = rng.next()%12
    let flip2 = rng.next()%12
    let flip1s = seizaa[flip1]
    let flip2s = seizaa[flip2]
    seizaa[flip1] = flip2s
    seizaa[flip2] = flip1s
    console.log(flip1,flip2, seizaa)
}
console.log("kekka",seizaa)
function sss(){
    ee.innerText = seizaa.map((v,i)=>(i+1)+v).join("\n")
    console.log("aaaaa")
}
// ["天秤座", "蠍座", "射手座", "山羊座", "水瓶座", "魚座", "牡羊座", "牡牛座", "双子座", "蟹座", "獅子座", "乙女座"]
// ["天秤座", "蠍座", "射手座", "山羊座", "水瓶座", "魚座", "牡羊座", "牡牛座", "双子座", "蟹座", "獅子座", "乙女座"]