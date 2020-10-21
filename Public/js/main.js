let irRegistro = document.querySelector(".ir_registro");
let bodyCardInicio = document.querySelector(".body_card_inicio");


const carpetaViews = "/public/views/";
const registrarseView = "registrarse.html";


irRegistro.addEventListener('click', ()=>{
    CargarRegistro(carpetaViews+registrarseView);
});


function CargarRegistro(file){
    let archivo  = new XMLHttpRequest();
        archivo.open("Get",file,false);
        archivo.onreadystatechange = function ()
        {
            if(archivo.readyState === 4)
            {
                if(archivo.status === 200 || archivo.status == 0)
                {
                    var content = archivo.responseText;
                    bodyCardInicio.innerHTML=content;
                }
            }
        }
    //AddScript()
    archivo.send(null);
}
