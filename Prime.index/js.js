 const item = document.querySelectorAll('[data-anime]')

function animeScroll(){
  const windowTop = window.pageYOffset + window.innerHeight * 0.86
 item.forEach(element => {
    if(windowTop > element.offsetTop){
        element.classList.add('animate');
    } else{
        element.classList.remove("animate")
    }
 })
}
animeScroll()

window.addEventListener('scroll', animeScroll)


function prevent(e){
    e.preventDefault();
}

document.getElementById('submit').addEventListener('click', prevent, false)