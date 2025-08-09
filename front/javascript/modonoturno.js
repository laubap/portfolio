const themeButton = document.querySelector('.theme__icon');

  themeButton.addEventListener('click', () => {
  document.body.classList.toggle('modo-noturno');

  const menu = document.querySelector('.menu-lateral');
  menu.classList.toggle('tema-escuro'); 

  const contato1 = document.querySelector('.card1');
  contato1.classList.toggle('tema-escuro'); 

  const contato2 = document.querySelector('.card2');
  contato2.classList.toggle('tema-escuro'); 

  const contato3 = document.querySelector('.card3');
  contato3.classList.toggle('tema-escuro');

  const contato4 = document.querySelector('.card4');
  contato4.classList.toggle('tema-escuro'); 

  const botao1 = document.querySelector('.btn-class-name');
  botao1.classList.toggle('tema-escuro');

  const botao2 = document.querySelector('.btn-class-name .back');
  botao2.classList.toggle('tema-escuro');
 
  const botao3 = document.querySelector('.btn-class-name .front');
  botao3.classList.toggle('tema-escuro');
});
