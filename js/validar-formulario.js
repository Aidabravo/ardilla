//SCRIPT DE FORMULARIO

//identificar campos del formulario
var miFormulario= document.getElementById('form-contacto');
//para identificar el campo del nombre
var campoNombre= document.getElementById('dato-usuario');
//para identificar el campo de la consulta
var campoComparte= document.getElementById('dato-comparte');


//identificar MENSAJES DE ERROR:------------------------------------------------------
var msjNombre= document.getElementById('msj-nombre');
var msjComparte= document.getElementById('msj-comparte');
var msjClausulas= document.getElementById('msj-clausulas');


var todosLosMsjError= document.querySelectorAll('.mensaje-error');// para seleccionar todos los mensajes de error en el bucle


//dar valor inicial a las variables
var valorNombre = null;
var valorComparte = null;


//--------EXPRESIONES DE PATRONES PARA VALIDACION----------------
var patronNombre = /^[\w\sñáéíóú]{2,15}$/i;
var patronComparte = /^[\w\sñáéíóú]{1,1000}$/i;



//FUNCION PARA CHEQUEAR LOS CAMPOS
function validarFormulario(evento){

    //ocultar mensajes de error:------------------------------
        //1º opcion: BUCLE
        for(let i=0; i<todosLosMsjError.length; i++){
            todosLosMsjError[i].style.display="none";
        }


    //capturar los valores de los campos: utilizamos el atributo value
	valorNombre = campoNombre.value;// para obtener el valor del campo nombre
	valorComparte = campoComparte.value;// para obtener el valor del campo consulta


    //para seleccionar los input que están chequeados en el input CLAUSULAS. 
    var campoClausulas= document.querySelectorAll('[name="dato-clausulas"]:checked');



    //comienza el chequeo de los datos
		if(!patronNombre.test(valorNombre) || valorNombre==null){ // si no se cumple el patron que salga la alerta
            
            msjNombre.style.display="block"; //esto hace que se vea el MENSAJE DE ERROR de Escriba su nombre...

			evento.preventDefault(); //para que no se envie el formulario
			campoNombre.focus(); //para que el campo tenga foco


        } else if(!patronComparte.test(valorComparte) || valorComparte==null){
			
            msjComparte.style.display="block"; //esto hace que se vea el MENSAJE DE ERROR de Escriba su consulta

			evento.preventDefault();
			campoComparte.focus(); //te MARCA el campo que hay que rellenar con un color más intenso

			
		} else if(campoClausulas.length==0){

            msjClausulas.style.display="block"; //esto hace que se vea el MENSAJE DE ERROR de Debe aceptar las clausulas
			
			evento.preventDefault();
			campoClausulas.focus(); //te MARCA el campo que hay que rellenar con un color más intenso

		}



}//-----------------FIN DE LA FUNCION----------------------




//evento 'submit' para enviar formulario con la funcion validarFormulario
miFormulario.addEventListener('submit', validarFormulario);
