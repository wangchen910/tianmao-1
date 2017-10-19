let dians =document.querySelectorAll(".lunbodisn1");
let imgs =document.querySelectorAll(".banner-img img");
dians.forEach(function (ele,index){
    ele.onclick=function (){
        for(i=0;i<dians.length;i++){
            dians[i].classList.remove("lunbodisn2");
            imgs[i].classList.remove("active");
        }
        ele.classList.add("lunbodisn2");
        imgs[index].classList.add("active");
        now = index;
    }
});
var th=setInterval(fn,1000);
var now=0;
function fn(){
    now++;
    if(now===dians.length){
        now=0;
    }
    for(i=0;i<dians.length;i++){
        dians[i].classList.remove("lunbodisn2");
        imgs[i].classList.remove("active");
    }
    dians[now].classList.add("lunbodisn2");
    imgs[now].classList.add("active");
}
let bannerObj=document.querySelector(".banner-neikuan");
bannerObj.onmouseover=function (){
    clearInterval(th);
}
bannerObj.onmouseout=function (){
    th=setInterval(fn,1000);
}




{
    let sws=document.querySelector(".box");
    let xias=document.querySelector(".zuobox");
    let an=document.querySelectorAll(".zuobox div");
    let lou=document.querySelectorAll(".mokuai");
    let dian=document.querySelector(".top");
    window.onscroll=function(){
        let Obj=document.documentElement.scrollTop===0?document.body:document.documentElement;
        let st=Obj.scrollTop;

        if (st>500) {
            sws.style.top=0;
        }else{
            sws.style.top="-50px";
        }
    }
    window.addEventListener("scroll",function(){
        let Obj=document.documentElement.scrollTop===0?document.body:document.documentElement;
        let st=Obj.scrollTop;
        if (st>500) {
            xias.style.cssText="width:35px;height:179px";
        }else{
            xias.style.cssText="width:0;height:0";
        }
        for(let i=0;i<lou.length;i++){
            if (st>lou[i].offsetTop-50) {
                for(let i=0;i<an.length;i++){
                    an[i].classList.remove("active")
                }
                an[i].classList.add("active")
            }
        }
        an.forEach(function(ele,index){
            let Obj=document.documentElement.scrollTop===0?document.body:document.documentElement;
            ele.onclick=function(){
                let gao=lou[index].offsetTop;
                animate(Obj,{scrollTop:gao-50});
            }
        })
    })

    dian.onclick=function(){
        let Obj=document.documentElement.scrollTop===0?document.body:document.documentElement;
        animate(Obj,{scrollTop:0});
    }
}