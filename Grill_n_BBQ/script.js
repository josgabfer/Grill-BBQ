let mouseCursor = document.querySelector(".cursor");
let image = document.querySelector('img');
let navLinks = document.querySelectorAll('.nav-links li');
//Detect when the cursor is moving
window.addEventListener('mousemove', cursor);

//Add a style to the cursor
function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
navLinks.forEach(link =>{
link.addEventListener('mouseleave', () =>{
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
});
link.addEventListener('mouseover', () =>{
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
});
});
image.addEventListener('mouseover',()=>{
    mouseCursor.classList.remove('white-cursor');
});
image.addEventListener('mouseleave',()=>{
    mouseCursor.classList.add('white-cursor');
})
