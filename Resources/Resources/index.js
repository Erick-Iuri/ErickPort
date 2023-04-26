const MenuRetratil = document.querySelector('.Navegação-Menu-H');


/* function AbrirMenu() {
    if (MenuRetratil.style.display === 'none') {
        MenuRetratil.style.display = 'block';
    } else {
        MenuRetratil.style.display = 'none';
    }
}; */

window.onload=()=>{
    const $ = document.querySelector.bind(document);
const $All = document.querySelectorAll.bind(document);

$('#menu').onclick=()=>{              $('#menu').classList.toggle('rotate')
  $('.nav-page1').classList.toggle('transform')
  $('.nav-page2').classList.toggle('transform')
  $('.menu-line1').classList.toggle('rotate1')
   $('.menu-line2').classList.toggle('rotate2')
}
};


document.querySelector('.thema-preto').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
