toto = 123
function majProfil(pseudo) {
	$.get("./api/getProfil.php?name="+pseudo)
	.done( function(data){
    	profil = jQuery.parseJSON(data);
    	//$( "#result" ).text(profil.name );
    	console.log(profil);
    	console.log(profil.name);
    	console. log (profil.summonerLevel);
    	console.log("le niveau de "+ profil.name+ " est de "+profil.summonerLevel)
    	$("#pseudo").text(profil.name);
    	$("#level").text(profil.summonerLevel);
		// body...

		$("#icon").attr('src','htpp://ddragon.leaguelegends.com/cdn/12.4.1/img/profileicon/'+profil.profileiconid+'.png');
	});
}
majProfil("toto");


$(document).ready(function(){
	$("#input_button").click(function(){
		var textUtilisateur = $("#input_text").val();
		majProfil(textUtilisateur);
	});

});



