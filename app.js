function ativaModal(){
    $('.fundo-modal').css('display', 'flex')
}

function desativaModal(){
    const modal = document.querySelector('#corpoModal');
    document.addEventListener('click', function(event){
        if (event.target === corpoModal){
            corpoModal.style.display = 'none'
        }
    })
}

desativaModal()

function cadastroRealizado(){
 
    const inputNome = document.getElementById('caixa1')
    const inputSobrenome = document.getElementById('caixa2')
    const inputEmail = document.getElementById('caixa3')
    const inputSenha = document.getElementById('caixa4')
  
    
    let nome = inputNome.value;
    let sobrenome = inputSobrenome.value;
    let email = inputEmail.value;
    let senha = inputSenha.value;

 if (nome.length >= 3 && sobrenome.length >= 3 && email.length >= 13 && senha.length >= 8 ){

    $('.cadastro').children().remove();
    $('.cadastro').append('<h2 class="obrigado">Obrigado</h2>');

   
    
 } else ( alert('Nome e Sobrenome acima de 3 letras / email valido / senha somente com mais de 8 caracteres'));

}
