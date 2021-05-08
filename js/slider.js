const btns=document.querySelectorAll(".img__arrow");
const allSlide=document.querySelectorAll(".our-works__img");
const btnsServ=document.querySelectorAll(".img-serv");

let i=0;
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        switch(btn.id){
            case 'btn-left':
                switch(i){
                    case 0:
                        i=allSlide.length-1;
                        break;
                    default:
                        i--;
                        break;
                }
            break;
            case 'btn-right':
                switch(i){
                    case allSlide.length-1:
                        i=0;
                        break;
                    default:
                        i++;
                        break;
                }
            break;
        }
        allSlide.forEach(slide=>{
            slide.classList.remove('img__activ');
        })
        allSlide[i].classList.add('img__activ');
        console.log(i);
    })
})
btnsServ.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(btn.id=="btn-zoom"){
            document.querySelector('#btn-zoom').classList.remove('img__activ');
            document.querySelector('#btn-close').classList.add('img__activ');
            allSlide.forEach(slide=>{
                slide.classList.add('img__zoom');
            })
            
        }
        if(btn.id=="btn-close"){
            document.querySelector('#btn-close').classList.remove('img__activ');
            document.querySelector('#btn-zoom').classList.add('img__activ');
            allSlide.forEach(slide=>{
                slide.classList.remove('img__zoom');
            })
        }

    })
})