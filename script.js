$("#HAI").click(function(){
    $("#button").hide();
    $('#opening').text("Is it because...");
    $('#causes').show();
});

$("#HAI2").click(function(){
    $("#causes").hide();
    $('#opening').text("If so, consider..?");
    $('#causes').show();
});

$('#causes').hide();