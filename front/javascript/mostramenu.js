document.addEventListener('DOMContentLoaded', function () {
  const botaoMenu = document.querySelector('.btn-class-name');
  const menu = document.querySelector('.menu-lateral');


  botaoMenu.addEventListener('click', (event) => {
    event.stopPropagation(); 
    menu.classList.toggle('ativo');
  });

  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', () => {
    menu.classList.remove('ativo');
  });
});
