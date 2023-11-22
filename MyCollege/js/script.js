function aparecerTexto(txt, img){
    let texto = document.getElementById(txt)
    let imagem = document.getElementById(img)

    let id = setInterval(frame, 10);
    let imgPos = 0;
    let txtPos = 20;

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
    let texto = document.getElementById(txt)
    let imagem = document.getElementById(img)

    let id = setInterval(frame, 10);
    let imgPos = -80;
    let txtPos = 36;

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

let showing = 0
let totalImages = 0
function loadImages(images)
{
    totalImages = images
    
    const slider = document.getElementById('imageSlider')
    for (let image = 1;image <= images; image++) 
    {
        slider.innerHTML += `<img class="slide" src="img/slidesImgs/${image}.jpg">`
    }
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide, index) => {
        slide.style.left = index*100 + "%"
    })
}

function slideImage(direction)
{
    showing += direction>0? 1:-1
    if (showing < 0) showing = 0
    if (showing >= totalImages) showing = totalImages-1
    
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${showing*100}%)`
    })
}