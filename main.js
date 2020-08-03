var time;
var mlp;
var opop;


function MathQuiz(op){
	mlp = mdc.linearProgress.MDCLinearProgress.attachTo(document.getElementById("progressbar"));
	mlp.progress=1;
	lf();
	clearInterval(startint);
	opop=op;
	var part1 = document.getElementById("part1");
	var part2 = document.getElementById("part2");
	var edittime = document.getElementById("edit-time");
	if(edittime.value != ""){
		time = parseFloat(edittime.value);
	}else{
		time=10;
	}
	
	part1.style.display = "none";
	part2.style.display = "inline-block";
	
	doStuff(op);
}

var timinginterval;
function doStuff(op){
	var buttons=[];	
	buttons[0] = document.getElementById("button1");
    buttons[1] = document.getElementById("button2");
    buttons[2] = document.getElementById("button3");
    buttons[3] = document.getElementById("button4");
	setup(buttons, document.getElementById("text"));
	var iter = 0;
	timinginterval = setInterval(function(){
		iter++;
		if(window.navigator.userAgent.indexOf("Edge") > -1){
			mlp.progress = 1-Math.round(time*iter/(time*10))/time;
		}else{
			mlp.progress = 1-iter/(time*10); 
		}
		if(iter/(time*10)>=1){
			clearInterval(timinginterval);
			youLost(op);
		}else {
			console.log(1-iter/(time*10));
		}
	},100);
}

function interruptTimer(buttonnumber){
	clearInterval(timinginterval);
	if(buttonnumber == rightbutton){
		youWon(opop, mlp);
	}else{
		youLost(opop);
	}
}

var score = 0;
function youWon(op, mlp){
	score += 5;
	mlp.progress = 1;
	setTimeout(function(){doStuff(op);},300);
}

function youLost(op){
	displayResults(op);
}

function displayResults(op){
	var part2 = document.getElementById("part2");
	var part3 = document.getElementById("part3");
	var text2 = document.getElementById("text2");
	part2.style.display = "none";
	part3.style.display = "block";
	text2.innerHTML += (""+score);
}

var rightbutton;
var sum;
var num1;
var num2;
var butons;
function setup(buttons, text){
    butons = buttons;
    if(opop == "M"){
    	num1 = Math.round(Math.random()*12);
    	num2 = Math.round(Math.random()*12);
    	text.innerHTML = (num1 + " x " + num2);
    	sum = num1*num2;
    }else if(opop == "S"){
    	num1 = Math.round(Math.random()*9);
    	num2 = Math.round(Math.random()*9);
    	text.innerHTML = (num1 + " - " + num2);
    	sum = num1-num2;
    }else if(opop == "A"){
    	num1 = Math.round(Math.random()*9);
    	num2 = Math.round(Math.random()*9);
    	text.innerHTML = (num1 + " + " + num2);
    	sum = num1+num2;
    }else if(opop == "D"){
    	num1 = Math.round(Math.random()*9);
    	num2 = Math.round(Math.random()*9);
    	if(num2 < num1){
    		var why = num1;
    		num1 = num2;
    		num2 = why;
    	}
    	text.innerHTML = (num1 + " - " + num2);
    	sum = num1-num2;
    }
    rightbutton = Math.round(Math.random()*3);
    buttons[rightbutton].innerHTML = sum+"";
    var possiblevalues;
    if(rightbutton == 0){
        possiblevalues = [1, 2, 3];
    }else if(rightbutton == 1){
        possiblevalues = [0, 2, 3];
    }else if(rightbutton == 2){
        possiblevalues = [0, 1, 3];
    }else if(rightbutton == 3){
        possiblevalues = [0, 1, 2];
    }
    for(var i = 0; i < possiblevalues.length; i++){
        if(opop == "M"){
        	buttons[possiblevalues[i]].innerHTML = sperand(144)+"";
        }else if(opop == "S"){
        	buttons[possiblevalues[i]].innerHTML = sperand(18)-9+"";
        }else if(opop == "A"){
        	buttons[possiblevalues[i]].innerHTML = sperand(18)+"";
        }else if(opop == "D"){
        	buttons[possiblevalues[i]].innerHTML = sperand(9)+"";
        }
    }
}

function sperand(max){
	var num = (Math.round(Math.random()*max));
	for(var i = 0; i < 3; i++){
		if(((butons[i].innerHTML != "") && num == (parseInt(butons[i].innerHTML))) || num == sum){
			return sperand(max);
		}
	}
	return num;
}

function once(fn, context) { 
    var result;
    return function() { 
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}

MathQuiz = once(MathQuiz);

mdc.autoInit(); //init ripple