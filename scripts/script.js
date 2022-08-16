const men=document.querySelector(".list");
const menubtn=document.querySelector(".icon-menu");
const cancelbtn=document.querySelector(".icon-cross");
menubtn.onclick = ()=>{
    men.classList.add("active");
    menubtn.classList.add("hide");
}
cancelbtn.onclick = ()=>{
    men.classList.remove("active");
    menubtn.classList.remove("hide");
}
window.addEventListener("scroll",function(){
    var header =this.document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >0);
})
const currentlocation =location.href;
const menuitem =document.querySelectorAll('a');
const menulenght=menuitem.length
for(let i = 0;i<menulenght;i++){
    if(menuitem[i].href === currentlocation){
        menuitem[i].className.add("active")
    }
}
$(document).ready(function(){
    $('.lists').click(function(){
        const value =$(this).attr('data-filter');
        if(value =='All'){
            $('.itembox').show('1000');
        }
        else{
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
        }
    })
    $('.lists').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})
