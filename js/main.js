$(document).ready(function(){

        $("#accueil").css('display','block');
        $("#club").css('display','none');
        $("#inscrire").css('display','none');
        $("#contact").css('display','none');
        $("#shop").css('display','none');

    $("#buy").click(function(){
        $("#accueil").css('display','none');
        $("#club").css('display','none');
        $("#inscrire").css('display','none');
        $("#contact").css('display','none');
        $("#shop").css('display','block');
    })
})