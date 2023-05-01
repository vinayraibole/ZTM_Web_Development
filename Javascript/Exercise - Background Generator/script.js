var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.getElementById("randomize");

// Generates random hex value
function generateRandomColor(){
	var letters = "ABCDEF0123456789";
	var color = "#";
	for (var i=0;i<6;i++){
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Converts RGB value gotten from split to hex
function RGBToHex(r,g,b) {
  r = Number(r).toString(16);
  g = Number(g).toString(16);
  b = Number(b).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

// Concats values from split with space
function concatArr(array){
	text = "";
	for (var i=4;i<12;i++){
		text += array[i]+ " ";
	}
	return text+";";
}

function setGradient(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

bodyStyle =  getComputedStyle(body)['background'].split(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/);
color1.value = RGBToHex(bodyStyle[1],bodyStyle[2],bodyStyle[3]);
color2.value = RGBToHex(bodyStyle[5],bodyStyle[6],bodyStyle[7]);
css.textContent =  concatArr(getComputedStyle(body)['background'].split(" "));

randomize.addEventListener("click", fillRandomColor);