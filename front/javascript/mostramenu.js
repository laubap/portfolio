document.addEventListener('DOMContentLoaded', function () {
  const botaoMenu = document.querySelector('.btn-class-name');
  const menu = document.querySelector('.menu-lateral');

  // Alterna o menu ao clicar no botão
  botaoMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede o clique de propagar para o documento
    menu.classList.toggle('ativo');
  });

  // Impede que clique dentro do menu feche ele
  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // Clica fora do menu = fecha ele
  document.addEventListener('click', () => {
    menu.classList.remove('ativo');
  });
});
