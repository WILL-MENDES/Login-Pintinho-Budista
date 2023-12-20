function ativaModal(){
    $('.fundo-modal').css('display', 'flex')
}

function desativaModal(){
    const modal = document.querySelector('#corpoModal');
    alert(modal)
    document.addEventListener('click', function(event){
        if (event.target === corpoModal){
            corpoModal.style.display = 'none'
        }
    })
}

desativaModal()
