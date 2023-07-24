//Add the campaign panel
$(function () {
	 $.get("coui://ui/mods/mod.lobby_browser/lobby_button.html").then(function(file){
		$("#mod_names").after(file)
	 })
});



model.switchToLobbyBrowser = function(){
	window.location.href = 'coui://ui/main/game/server_browser/server_browser.html';
	localStorage["modify_server_back_button"] = "true";
}

