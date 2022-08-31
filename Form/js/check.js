function validate(){
    var phone = document.getElementById("phone");
    if(! /^[7-9][0-9]{9}$/.check(phone)){
        document.getElementById("phone").setAttribute('value','My default value');
    }
}