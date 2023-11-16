const bg=document.querySelector('.bg');
const loading=document.querySelector('.loading');
const btn=document.querySelector('.btn');
const blurcontainer=document.querySelectorAll('.blur-conatiner');

const scale=(num,in_min,in_max,out_min,out_max)=>
{
    return (num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min;
}
let load=0;

btn.addEventListener('click',()=>
{
    
    let int=setInterval(loadingphase,20);
    removebutton();


})


function loadingphase()
{
 
   
    load++;

    if(load>99)
    {
        clearInterval(int);
    }
    loading.innerText=`${load}%`;
    loading.style.opacity=scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;


}


function removebutton() {

    btn.remove();

}

