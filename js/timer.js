function carregar() {
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    
    if (hora >= 0 && hora < 12 ) {
        img.src = 'fotos/ftmanha.png'
        document.body.style.background = '#d2bb79'
    } else if (hora >= 12 && hora < 18){
        img.src = 'fotos/fttarde.png'
        document.body.style.background = '#da6f1a'
    } else {
        img.src = 'fotos/ftnoite.png'
        document.body.style.background = '#52575c'
    }
}