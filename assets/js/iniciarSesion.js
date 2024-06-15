
$(document).ready(function(){
    let email = "";
    let password = "";
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $("#btn-Ingresar").click(function(){

        $("#error1").text("");
        $("#error2").text("");

        email= $("#email").val();

        if(email.trim() === ""){
            $("#error1").text("Deben ingresar su correo electronico");
            return
        }else{
            $("#error1").text("");
        }

        if(!emailRegex.test(email)){
            $("error1").text("porfavor, ingrese un correo electronico valido");
            return
        }else{
            $("#error1").test("");
        }

        password = $("#password").val();

        if(password.trim()=== ""){
            $("#error2").text("Debe ingresar su contraseña");
            return
        }else{
            $("#error2").text("");
        }

        

    })

})