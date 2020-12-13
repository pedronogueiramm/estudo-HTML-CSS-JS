
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

function nota(){
    var nota1 = parseFloat(document.getElementById("av1").value);
    var nota2 = parseFloat(document.getElementById("av2").value);

    var media = (nota1 + nota2)/2 ;
    var final = Math.abs(media - 10);

    if(media >= 7)
        if(media==10)
            alert("Uau! Aprovado com um FODENDO 10");
        else
            alert("Parabens, aprovado! Media "+media);
        else
            alert("Infelizmente você não passou direto! Você precisa tirar " + final + " pontos na Prova Final!");

   }
