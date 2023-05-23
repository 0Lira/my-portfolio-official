
document.getElementById("toggleSidebar").onclick = function() {toggleSidebar()};

function toggleSidebar() {
    var display = document.getElementById("navbar").style.visibility;
        if(display == "hidden")
            document.getElementById("navbar").style.visibility = 'visible';
        else
            document.getElementById("navbar").style.visibility = 'hidden';
}
  


    // Função para fechar o menu
    function fecharMenu() {
        var menu = document.getElementById('navbar');
        if(menu == "visible")
        menu.style.display = 'none';
        else
        menu.style.visibility = 'hidden'
    }

    // Adiciona um evento de clique para cada link no menu
    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
        link.addEventListener('click', fecharMenu);
    });



  // Função para remover a transição
function removerTransicao() {
  var links = document.querySelectorAll('.navbar a');

  links.forEach(function(link) {
    link.style.transition = 'none';
  });
}

// Chamar a função para remover a transição
removerTransicao();

  

  // Função para exibir o menu em tamanhos de tela maiores
  function exibirMenu() {
    var menu = document.getElementById('navbar');
    var larguraJanela = window.innerWidth;
  
    if (larguraJanela >= 901) { // Ajuste o valor conforme necessário
      menu.style.visibility = 'visible';
    }
  }
  
  // Adiciona um evento de redimensionamento para chamar a função de exibição do menu
  window.addEventListener('resize', exibirMenu);
  
  // Adiciona um evento de clique para cada link no menu
  var links = document.querySelectorAll('.navbar a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      fecharMenu();
      exibirMenu();
    });
  });