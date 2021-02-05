var clair = "#A5A5A5";
var fonce = "#808080";
var divActual = document.getElementById("mon CV");
/*const dateDebutStage = new Date("2021-05-24 00:00:00")*/

function changerTheme(color){
	var ancientColor = clair;
	switch (color) {
		case "blue":
			fonce = "#186496";
			clair = "#3884b6";
			break;
		case "orange":
			fonce = "#bc4500";
			clair = "#dc6500";
			break;
		case "grey":
			clair = "#A5A5A5";
			fonce = "#808080";
			break;
		default:
			console.log("What did just happend here?!");
			throw (color);
	}
	if (clair != ancientColor) {
		console.log("Color changement in " + color);
		changeColor();
	}
}

function changeColor() { 
	section.style.backgroundColor = clair;
	footer.style.backgroundColor = fonce;
	aside.style.backgroundColor = fonce;
	nav.style.backgroundColor = fonce;
}

function changeSection(section){
	if(divActual != document.getElementById(section)){
		divActual.style.display = "none";
		divActual = document.getElementById(section);
		divActual.style.display = "block";
		console.log("Section changé pour la section de " + section);
	}
	
}

function passwordVerification() {
	if (document.getElementById("verification").value == document.getElementById("password").value){
		return true;
	}
	alert("le mot de passe et le mot de passe de vérification que vous avez marqués sont différents");
	return false;
}

function isGreen(id){
	return document.getElementById(id).style.color == "green";
}

function isOK(password){
	return (isGreen("mdp_majuscule") && isGreen("mdp_minuscule") && password.length >= 8 && isGreen("mdp_number") && isGreen("mdp_special"));
}

function passwordIndication(){
	var mdp = document.getElementById("password").value;
	var i = mdp.length - 1;
	if(i >= 7){
		document.getElementById("mdp_nb_caractere").style.color = "green";
	}
	else{
		document.getElementById("mdp_nb_caractere").style.color = "red";
	}
	var OK = false;
	var actualChar;
	document.getElementById("mdp_majuscule").style.color = "red";
	document.getElementById("mdp_minuscule").style.color = "red";
	document.getElementById("mdp_chiffre").style.color = "red";
	document.getElementById("mdp_special").style.color = "red";
	while (i>=0 && !OK){
		actualChar = mdp[i];
		if(!isGreen("mdp_majuscule") && (actualChar<='Z' && actualChar>='A')){
			document.getElementById("mdp_majuscule").style.color = "green";
		}
		else if(!isGreen("mdp_minuscule") && (actualChar <= 'z' && actualChar >= 'a')){
			document.getElementById("mdp_minuscule").style.color = "green";
		}
		else if(!isGreen("mdp_chiffre") && (actualChar >= '0' && actualChar <= '9')){
			document.getElementById("mdp_chiffre").style.color = "green";
		}
		else if(!isGreen("mdp_special") && ((actualChar >= String.fromCharCode(0x20) && actualChar <= '/') || (actualChar >= ':' && actualChar <= '@')
		|| (actualChar >= '[' && actualChar <= '`') || (actualChar >= '{'))){
			document.getElementById("mdp_special").style.color = "green";
		}
		OK = isOK(password);
		i = i - 1;
	}
	return OK;
}

function verifierFormulaireInscription(){
	if(!passwordVerification() || !passwordIndication()){
		event.preventDefault;
	}
}

/*function tempsRestant() {
	const total = dateDebutStage - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const heures = Math.floor ((total / (1000 * 60 * 60)) % 24);
	const jours = Math.floor(total / (1000 * 60 * 60 * 24));

	return {
		total,
		journées,
		heures,
		minutes,
		secondes
	};

	document.getElementById

}*/

window.onload = function(){
	var footer = document.getElementById("footer");
	var aside = document.getElementById("aside");
	var nav = document.getElementById("nav");
	var section = document.getElementById("section");
	document.getElementById("orangeBox").addEventListener("click",function(){changerTheme("orange")});
	document.getElementById("blueBox").addEventListener("click",function(){changerTheme("blue")});
	document.getElementById("greyBox").addEventListener("click",function(){changerTheme("grey")});
	document.getElementById("nav_inscription").addEventListener("click",function(){changeSection("inscription")});
	document.getElementById("nav_connexion").addEventListener("click",function(){changeSection("connexion")});
	document.getElementById("nav_mon_cv").addEventListener("click",function(){changeSection("mon CV")});
	document.getElementById("password").addEventListener("input",passwordIndication);
	document.getElementById("verification").addEventListener("click",verifierFormulaireInscription);
}