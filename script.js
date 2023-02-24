let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let vhod = document.getElementById("vhod").value;
let p = document.getElementById("text");
let words = vhod.split(" ");
let masiv =[];
console.log(masiv);
console.log(words);
let obekt = {
	ime: "petko",
	familiq: "kudin",
	vazrast: 45
}
console.log(obekt);
let nx = 5;
let ny = 5;
let sqside = 100;
let herox = 2;
let heroy = 1;
let heroimg = new Image();
heroimg.src = "checheneca.png";
canvas.width = nx * sqside;
canvas.height= ny * sqside;

//context.fillRect(herox * sqside, heroy * sqside, sqside, sqside);

function drawMap() {
context.fillStyle = "dalavera.jpg";
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(heroimg, herox * sqside, heroy * sqside, sqside, sqside);
	for(let i = 0; i < nx; i++) {
		for(let j = 0; j < ny; j++) {
			context.strokeRect(i * sqside, j * sqside, sqside, sqside);
		}
	}
}
drawMap();

canvas.onclick = function(e) {
    let x = e.x - canvas.offsetLeft;
    let y = e.y - canvas.offsetTop;
    herox = Math.floor(x / sqside);
    heroy = Math.floor(y / sqside);
    p .innerText = "Чеченеца се телепортираа";
	drawMap();
}

function moveLeft() {
	if(herox>0){
		herox--;
		
	}
	p .innerText = "Чеченеца се движи налявооо";
	drawMap();
}

function moveDown() {
	if(heroy < ny - 1) {
		heroy ++;
		
	}
	p .innerText = "Чеченеца се движи надолууу";
	drawMap();
}

function moveRight() {
	if(herox < nx - 1) {
		herox ++;
	}
	p .innerText = "Чеченеца се движи надяснооо";
	drawMap();
}

function moveUp() {
	if(heroy > 0) {
		heroy --;
	}
	p .innerText = "Чеченеца се движи нагореее";
	drawMap();
}


document.onkeypress = function(e) {
    let key = e.key;
    switch(key) {
    	case "a": moveLeft(); break;
    	case "s": moveDown(); break;
    	case "d": moveRight(); break;
    	case "w": moveUp(); break;
		console.log(key);
	}
}