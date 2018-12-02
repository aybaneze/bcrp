const camera = document.getElementById('camera');
const seeEvaluateImg = document.getElementById('evaluateimg');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
window.addEventListener("DOMContentLoaded", () => {
    camera.addEventListener('change', (e) => {
        const file = e.target.files[0];
        image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = function () {
            context.drawImage(image,0,0);
        }
        seeomi.setAttribute('class','hidden');
        seeconti.removeAttribute('class');
        seeconti.setAttribute('class','col-md-12 pt-1 text-center');

    })
    seeEvaluateImg.addEventListener('click', () => {
        const canvas = document.getElementById('canvas');
        const img = canvas.toDataURL();

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
                if(data<=0.5){
                    bad.removeAttribute('class');
                    good.setAttribute('class', 'hidden');
                }else if(data>=0.51){
                    good.removeAttribute('class');
                    bad.setAttribute('class', 'hidden');
                }else{
                    alert('toma la foto de nuevo')
    
                }
                console.log(response)
            }
        });
    })
})