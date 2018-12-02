const camera = document.getElementById('camera');
const seeEvaluateImg = document.getElementById('evaluateImg')
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
window.addEventListener("DOMContentLoaded", () => {
    camera.addEventListener('change', (e) => {
        const file = e.target.files[0];
        image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = function () {
            context.drawImage(image, 0, 0, 250, 300);
        }
    })
    seeEvaluateImg.addEventListener('click', () => {
        const canvas = document.getElementById('canvas');
        const img = canvas.toDataURL();
        console.log(img);

        var data = {
            imagenB64: img
        }
    
        $.ajax({
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            url: '/obtenerResultVR',
            type: 'POST',
            beforeSend: function () {
                $("#score").val("Procesando, espere por favor...");
            },
            success: function (response) {
                const data = response.images[0].classifiers[0].classes[0].score;
                if(data<=0.3){
                    good.removeAttribute('class');
                    soSo.setAttribute('class', 'hidden');
                    bad.setAttribute('class', 'hidden');
    
                }else if(data>=0.4 &&data<=0.7){
                    soSo.removeAttribute('class');
                    good.setAttribute('class', 'hidden');
                    bad.setAttribute('class', 'hidden');
    
                }else if(data>=0.7){
                    bad.removeAttribute('class');
                    soSo.setAttribute('class', 'hidden');
                    good.setAttribute('class', 'hidden');
    
                }else{
                    alert('toma la foto de nuevo')
    
                }
                console.log(response)
            }
        });
    })
})
