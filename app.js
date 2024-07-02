var Menuitems= document.getElementById("Menuitems");
Menuitems.style.maxHeight="0px"
function menutoggle(){
    if(Menuitems.style.maxHeight=="0px"){
        Menuitems.style.maxHeight="200px";
    }
    else{
        Menuitems.style.maxHeight="0px";
    }
}

    // for account form

function register() {
    document.getElementById('registerform').style.transform = 'translateX(0px)';
    document.getElementById('loginform').style.transform = 'translateX(0px)';
    document.getElementById('indicator').style.transform = 'translateX(150px)';
}

function login() {
    document.getElementById('registerform').style.transform = 'translateX(300px)';
    document.getElementById('loginform').style.transform = 'translateX(300px)';
    document.getElementById('indicator').style.transform = 'translateX(50px)';
}
