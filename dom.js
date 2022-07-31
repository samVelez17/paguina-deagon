var formularioo=function(){
    var Nom=document.getElementById('nombre').value;
    var mail=document.getElementById('correo').value;
    var telefono=document.getElementById("num").value;
    var mensaje=document.getElementById("chat").value;
    var pais=document.getElementById("Pais").value;

    
    
    if(Nom==""){
        document.getElementById('nombre').focus();
    } else {
        if(mail==""){
            document.getElementById('correo').focus()
        } else {
            if(telefono==""){ 
            document.getElementById('num').focus()
            }else if ( mensaje==""){
                document.getElementById('chat').focus()

            } else if (pais==""){
                document.getElementById('Pais').focus()

            }else { 
                alert("Hola " +Nom+" Tus datos son: correo " +mail+" Telefono"+telefono+" tu pais es "+pais+ " tu opinión de la pelicula es " + mensaje );
                document.getElementById('nombre').value="";
                document.getElementById('correo').value="";
                document.getElementById("num").value="";
                document.getElementById("chat").value="";
                document.getElementById("Pais").value="Argentina";
            }
        } 
    } 
    }