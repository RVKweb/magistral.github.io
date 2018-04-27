document.getElementById('rus').onclick = rus;
function rus() {
	var rus = document.getElementById('rus');
	style = rus.style;
	style.backgroundColor = "#FFFFFFFF";
	style.boxShadow = " 1px 1px 0 rgba(255, 255, 255, 0.81), inset 1px 2px 3px rgba(0, 0, 0, 0.52)";
	style.color = "#cf1e34";
	style.textDecoration = "underline";
    var eng = document.getElementById('eng');
    style = eng.style;
	style.backgroundColor = "#aeb4ba";
	style.boxShadow = "none";
	style.color = "#FFFFFFFF";
	style.textDecoration = "none";
}
document.getElementById('eng').onclick = eng;
function eng() {
	var eng = document.getElementById('eng');
	style = eng.style;
	style.backgroundColor = "#FFFFFFFF";
	style.boxShadow = " 1px 1px 0 rgba(255, 255, 255, 0.81), inset 1px 2px 3px rgba(0, 0, 0, 0.52)";
	style.color = "#cf1e34";
	style.textDecoration = "underline";
    var rus = document.getElementById('rus');
    style = rus.style;
	style.backgroundColor = "#aeb4ba";
	style.boxShadow = "none";
	style.color = "#FFFFFFFF";
	style.textDecoration = "none";
}
function active(activ) {
    var style = activ.style;
	style.backgroundColor = "#FFFFFFFF";
	style.boxShadow = " 1px 1px 0 rgba(255, 255, 255, 0.81), inset 1px 2px 3px rgba(0, 0, 0, 0.52)";
}

function deActive(deActiv) {
    var style = deActiv.style;
	style.backgroundColor = "#aeb4ba";
	style.boxShadow = "none";
	style.color = "#FFFFFFFF";
}

document.getElementById('home').onclick = home;
function home() {
	var activ = document.getElementById('home');
    active(activ);
    
    var deActiv = document.getElementById('news');
    deActive(deActiv);
    var deActiv = document.getElementById('company');
    deActive(deActiv);
    var deActiv = document.getElementById('forums');
    deActive(deActiv);
    var deActiv = document.getElementById('projects');
    deActive(deActiv);
    var deActiv = document.getElementById('production');
    deActive(deActiv);
    var deActiv = document.getElementById('contacts');
    deActive(deActiv);
    var deActiv = document.getElementById('photoVideo');
    deActive(deActiv);
}

document.getElementById('news').onclick = news;
function news() {
	var activ = document.getElementById('news');
    active(activ);
    
    var deActiv = document.getElementById('home');
    deActive(deActiv);
    var deActiv = document.getElementById('company');
    deActive(deActiv);
    var deActiv = document.getElementById('forums');
    deActive(deActiv);
    var deActiv = document.getElementById('projects');
    deActive(deActiv);
    var deActiv = document.getElementById('production');
    deActive(deActiv);
    var deActiv = document.getElementById('contacts');
    deActive(deActiv);
    var deActiv = document.getElementById('photoVideo');
    deActive(deActiv);
}

document.getElementById('company').onclick = company;
function company() {
	var activ = document.getElementById('company');
    active(activ);
    
    var deActiv = document.getElementById('home');
    deActive(deActiv);
    var deActiv = document.getElementById('news');
    deActive(deActiv);
    var deActiv = document.getElementById('forums');
    deActive(deActiv);
    var deActiv = document.getElementById('projects');
    deActive(deActiv);
    var deActiv = document.getElementById('production');
    deActive(deActiv);
    var deActiv = document.getElementById('contacts');
    deActive(deActiv);
    var deActiv = document.getElementById('photoVideo');
    deActive(deActiv);
}
document.getElementById('forums').onclick = forums;
function forums() {
	var activ = document.getElementById('forums');
    active(activ);
    
    var deActiv = document.getElementById('home');
    deActive(deActiv);
    var deActiv = document.getElementById('news');
    deActive(deActiv);
    var deActiv = document.getElementById('company');
    deActive(deActiv);
    var deActiv = document.getElementById('projects');
    deActive(deActiv);
    var deActiv = document.getElementById('production');
    deActive(deActiv);
    var deActiv = document.getElementById('contacts');
    deActive(deActiv);
    var deActiv = document.getElementById('photoVideo');
    deActive(deActiv);
}
document.getElementById('projects').onclick = projects;
function projects() {
	var activ = document.getElementById('projects');
    active(activ);
    
    var deActiv = document.getElementById('home');
    deActive(deActiv);
    var deActiv = document.getElementById('news');
    deActive(deActiv);
    var deActiv = document.getElementById('forums');
    deActive(deActiv);
    var deActiv = document.getElementById('company');
    deActive(deActiv);
    var deActiv = document.getElementById('production');
    deActive(deActiv);
    var deActiv = document.getElementById('contacts');
    deActive(deActiv);
    var deActiv = document.getElementById('photoVideo');
    deActive(deActiv);
}
document.getElementById('production').onclick = production;
function production() {
	var activ = document.getElementById('production');
    active(activ);
    
    var deActiv = document.getElementById('home');
    deActive(deActiv);
    var deActiv = document.getElementById('news');
    deActive(deActiv);
    var deActiv = document.getElementById('forums');
    deActive(deActiv);
    var deActiv = document.getElementById('company');
    deActive(deActiv);
    var deActiv = document.getElementById('projects');
    deActive(deActiv);
    var deActiv = document.getElementById('contacts');
    deActive(deActiv);
    var deActiv = document.getElementById('photoVideo');
    deActive(deActiv);
}
document.getElementById('contacts').onclick = contacts;
function contacts() {
	var activ = document.getElementById('contacts');
    active(activ);
    
    var deActiv = document.getElementById('home');
    deActive(deActiv);
    var deActiv = document.getElementById('news');
    deActive(deActiv);
    var deActiv = document.getElementById('forums');
    deActive(deActiv);
    var deActiv = document.getElementById('company');
    deActive(deActiv);
    var deActiv = document.getElementById('projects');
    deActive(deActiv);
    var deActiv = document.getElementById('production');
    deActive(deActiv);
    var deActiv = document.getElementById('photoVideo');
    deActive(deActiv);
}

document.getElementById('photoVideo').onclick = photo;
function photo() {
	var activ = document.getElementById('photoVideo');
    active(activ);
    
    var deActiv = document.getElementById('home');
    deActive(deActiv);
    var deActiv = document.getElementById('news');
    deActive(deActiv);
    var deActiv = document.getElementById('forums');
    deActive(deActiv);
    var deActiv = document.getElementById('company');
    deActive(deActiv);
    var deActiv = document.getElementById('projects');
    deActive(deActiv);
    var deActiv = document.getElementById('contacts');
    deActive(deActiv);
    var deActiv = document.getElementById('production');
    deActive(deActiv);
}






document.getElementById('sliderLeft').onclick = sliderLeft;
document.getElementById('sliderRight').onclick = sliderRight;
var left = 0;
var right =0;

function sliderLeft() {
	
	var polosa = document.getElementById('polosa');
	left = left-202;
	if (left< -606) {
		left = 0;
	}
	polosa.style.left = left+'px';

}
function sliderRight() {
	
	var polosa = document.getElementById('polosa');
	left = left+202;
	if (left> 0) {
		left = -606;
	}
	polosa.style.left = left+'px';
}