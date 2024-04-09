let box = document.querySelector(".box")
let chooseImg = [];
let imgBox= document.querySelectorAll(".img-box")
let local= [];
let check;
getlocalStorage()

window.addEventListener("DOMContentLoaded",pageLoaded())


box.addEventListener("click",(e)=>{
    if (check){
        
        chooseImg=local
        
        check=false;
    }
    
    if (chooseImg.length>4){
        chooseImg.shift();
        chooseImg.push(e.target.currentSrc)
        setLocalStorage(e.target.currentSrc)
        
        
        
    }else {
        chooseImg.push(e.target.currentSrc)
        setLocalStorage(e.target.currentSrc)
        
    }
    for (let i = 0; i<=imgBox.length-1;i++){
            
        
        imgBox[i].innerHTML=`
        <img src="${chooseImg[i]}">
        `
    }
})

function pageLoaded(){
    getlocalStorage()
    if (local.length>0){

        for (let i = 0 ; i<=local.length-1;i++){
            imgBox[i].innerHTML=`
            <img src="${local[i]}">
            `
        }
        check=true;
    }

}

function expandImg(e){
    
    imgBox[e].classList.add("active")
    
    
}

function downImg(e){
    imgBox[e].classList.remove("active")
    
}

function setLocalStorage(imgUrl){
    getlocalStorage()
    if (local.length>4){
        local.shift();
        localStorage.setItem("img",(JSON.stringify(local)))
        
    }
    local.push(imgUrl)
    localStorage.setItem("img",(JSON.stringify(local)))
    

}

function getlocalStorage(){
    if (localStorage.getItem("img")!=null){

        local=(JSON.parse(localStorage.getItem("img")))
        if (local.length>4){
            local.shift();
            local=(JSON.parse(localStorage.getItem("img")))
        }

    }else{
        local=[];    }

}
