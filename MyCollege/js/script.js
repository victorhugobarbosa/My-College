function aparecerTexto(txt, img){
    var texto = document.getElementById(txt)
    var imagem = document.getElementById(img)

    var id = setInterval(frame, 10);
    var imgPos = 0;
    var txtPos = 20;

    function frame() {
        if (imgPos == -80) {
            clearInterval(id);
        } else {
            imgPos -= 5
            txtPos += 1
            imagem.style.marginTop = imgPos + 'px';
            texto.style.marginTop = txtPos + 'px'; 
        }
    }
}

function desaparecerTexto(txt, img){
    var texto = document.getElementById(txt)
    var imagem = document.getElementById(img)

    var id = setInterval(frame, 10);
    var imgPos = -80;
    var txtPos = 36;

    function frame() {
        if (imgPos == 0) {
            clearInterval(id);
        } else {
            imgPos += 5
            txtPos -= 1
            imagem.style.marginTop = imgPos + 'px';
            texto.style.marginTop = txtPos + 'px'; 
        }
    }
}

var counter = 1;
setInterval(function(){
    document.getElementById('radio' +  counter).checked = true;
    counter++;
    if(counter > 11){
        counter = 1;
    }
}, 5000);