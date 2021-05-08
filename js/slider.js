const btns=document.querySelectorAll(".img__arrow");
const allSlide=document.querySelectorAll(".our-works__img");
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