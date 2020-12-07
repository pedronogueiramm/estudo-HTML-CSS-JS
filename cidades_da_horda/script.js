const paineis = document.querySelectorAll('.painel')

paineis.forEach((painel) => {
    painel.addEventListener('click', () => {
        removeClasseAtiva()
        painel.classList.add('ativo')
    })
})


function removeClasseAtiva(){
    paineis.forEach(painel => {
        painel.classList.remove('ativo')
    })
}