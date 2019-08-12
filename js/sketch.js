/**

    Jacob Seiler
    8/4/2016
    Lite Bikes
    Forest Hill C.I.
    
    ** Trails are broken, cause the game to lag, will be fixed SOON **
    
    - A game similar to snake for 1 - 4 players
    * Click on a button with coloured dots to play, click on as many dots for how many players you want
    * Click on instructions to learn how to play
    * Click on Credits to see who did what work
    * Once the game starts try to kill your opponents by having them run into your trail
    * Last one standin wins
    * In single player mode, try to get the best time
    - Have fun :)

**/

var xP1 = 180;
var yP1 = 180;
var xP2 = 220;
var yP2 = 180;
var xP3 = 180;
var yP3 = 220;
var xP4 = 220;
var yP4 = 220;
var directionP1 = 5;
var directionP2 = 5;
var directionP3 = 5;
var directionP4 = 5;
var radius = 10;
var speed = 3;
var beenTo = [];
var place_first = 0;
var place_second = 0;
var place_third = 0;
var place_fourth = 0;
var players = 0;
var countdown = 3;
var timer = 0;
var record = 0;

var page = 0;
var credit_programming = "Jacob";
var credit_art = "Jacob";
var credit_testing = "Jacob";

var state = 0;

function setup() {
	createCanvas(400, 400);
	frameRate(60);
	background(255, 255, 255);
}

var convertStringToInt = function(s) {
    for (var i = 0; i < 400; i++) {
        if (s === "" + i) {
            return i;
        }
    }
};

var playerIsOut = function(player) {
    if (place_fourth === player || place_third === player || place_second === player) {
        return true;
    }
    
    return false;
};

var moveUp = function(player) {
    if (!playerIsOut(1) && player === 1) {
        if (yP1 - radius <= 0) {
            return;
        } else if (yP1 - radius - speed <= 0) {
            yP1 = radius;
        } else {
            yP1 = yP1 - speed;
        }
    }
    
    if (!playerIsOut(2) && player === 2) {
        if (yP2 - radius <= 0) {
            return;
        } else if (yP2 - radius - speed <= 0) {
            yP2 = radius;
        } else {
            yP2 = yP2 - speed;
        }
    }
    
    if (!playerIsOut(3) && player === 3) {
        if (yP3 - radius <= 0) {
            return;
        } else if (yP3 - radius - speed <= 0) {
            yP3 = radius;
        } else {
            yP3 = yP3 - speed;
        }
    }
    
    if (!playerIsOut(4) && player === 4) {
        if (yP4 - radius <= 0) {
            return;
        } else if (yP4 - radius - speed <= 0) {
            yP4 = radius;
        } else {
            yP4 = yP4 - speed;
        }
    }
};

var moveDown = function(player) {
    if (!playerIsOut(1) && player === 1) {
        if (yP1 + radius >= 400) {
            return;
        } else if (yP1 + radius + speed >= 400) {
            yP1 = 400 - radius;
        } else {
            yP1 = yP1 + speed;
        }
    }
    
    if (!playerIsOut(2) && player === 2) {
        if (yP2 + radius >= 400) {
            return;
        } else if (yP2 + radius + speed >= 400) {
            yP2 = 400 - radius;
        } else {
            yP2 = yP2 + speed;
        }
    }
    
    if (!playerIsOut(3) && player === 3) {
        if (yP3 + radius >= 400) {
            return;
        } else if (yP3 + radius + speed >= 400) {
            yP3 = 400 - radius;
        } else {
            yP3 = yP3 + speed;
        }
    }
    
    if (!playerIsOut(4) && player === 4) {
        if (yP4 + radius >= 400) {
            return;
        } else if (yP4 + radius + speed >= 400) {
            yP4 = 400 - radius;
        } else {
            yP4 = yP4 + speed;
        }
    }
};

var moveLeft = function(player) {
    if (!playerIsOut(1) && player === 1) {
        if (xP1 - radius <= 0) {
            return;
        } else if (xP1 - radius - speed <= 0) {
            xP1 = radius;
        } else {
            xP1 = xP1 - speed;
        }
    }
    
    if (!playerIsOut(2) && player === 2) {
        if (xP2 - radius <= 0) {
            return;
        } else if (xP2 - radius - speed <= 0) {
            xP2 = radius;
        } else {
            xP2 = xP2 - speed;
        }
    }
    
    if (!playerIsOut(3) && player === 3) {
        if (xP3 - radius <= 0) {
            return;
        } else if (xP3 - radius - speed <= 0) {
            xP3 = radius;
        } else {
            xP3 = xP3 - speed;
        }
    }
    
    if (!playerIsOut(4) && player === 4) {
        if (xP4 - radius <= 0) {
            return;
        } else if (xP4 - radius - speed <= 0) {
            xP4 = radius;
        } else {
            xP4 = xP4 - speed;
        }
    }
};

var moveRight = function(player) {
    if (!playerIsOut(1) && player === 1) {
        if (xP1 + radius >= 400) {
            return;
        } else if (xP1 + radius + speed >= 400) {
            xP1 = 400 - radius;
        } else {
            xP1 = xP1 + speed;
        }
    }
    
    if (!playerIsOut(2) && player === 2) {
        if (xP2 + radius >= 400) {
            return;
        } else if (xP2 + radius + speed >= 400) {
            xP2 = 400 - radius;
        } else {
            xP2 = xP2 + speed;
        }
    }
    
    if (!playerIsOut(3) && player === 3) {
        if (xP3 + radius >= 400) {
            return;
        } else if (xP3 + radius + speed >= 400) {
            xP3 = 400 - radius;
        } else {
            xP3 = xP3 + speed;
        }
    }
    
    if (!playerIsOut(4) && player === 4) {
        if (xP4 + radius >= 400) {
            return;
        } else if (xP4 + radius + speed >= 400) {
            xP4 = 400 - radius;
        } else {
            xP4 = xP4 + speed;
        }
    }
};

var trails = function() {
    for (var i = 0; i < beenTo.length; i++) {
        var xBT = convertStringToInt(beenTo[i].split("|")[0]);
        var yBT = convertStringToInt(beenTo[i].split("|")[1]);
        var player = convertStringToInt(beenTo[i].split("|")[2]);
        
        if (!playerIsOut(1) && player === 1) {
            stroke(180, 25, 25);
            strokeWeight(3);
            fill(255, 50, 50);
            ellipse(xBT, yBT, radius * 2, radius * 2);
        }
        
        if (!playerIsOut(2) && player === 2) {
            stroke(50, 95, 145);
            strokeWeight(3);
            fill(105, 170, 250);
            ellipse(xBT, yBT, radius * 2, radius * 2);
        }
        
        if (!playerIsOut(3) && player === 3) {
            stroke(191, 183, 31);
            strokeWeight(3);
            fill(250, 240, 30);
            ellipse(xBT, yBT, radius * 2, radius * 2);
        }
        
        if (!playerIsOut(4) && player === 4) {
            stroke(80, 185, 60);
            strokeWeight(3);
            fill(95, 230, 70);
            ellipse(xBT, yBT, radius * 2, radius * 2);
        }
    }
};

var menu = function() {
    directionP1 = 5;
    directionP2 = 5;
    directionP3 = 5;
    directionP4 = 5;
    xP1 = 180;
    yP1 = 180;
    xP2 = 220;
    yP2 = 180;
    xP3 = 180;
    yP3 = 220;
    xP4 = 220;
    yP4 = 220;
    directionP1 = 5;
    directionP2 = 5;
    directionP3 = 5;
    directionP4 = 5;
    beenTo = [];
    place_first = 0;
    place_second = 0;
    place_third = 0;
    place_fourth = 0;
    players = 1;
    countdown = 3;
    timer = 0;
    
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(3);
    rect(-10, -10, 420, 420);
    
    if (page === 0) {
        fill(0, 0, 0);
        textSize(50);
		textAlign(CENTER, TOP);
		strokeWeight(0);
		text("Lite Bikes", 0, 50, 400, 400);
		strokeWeight(3);
        
        if ((mouseX >= 15 && mouseX <= 85 && mouseY >= 170 && mouseY <= 230)) {
            fill(227, 227, 227);
        } else {
            fill(201, 201, 201);
        }
        rect(15, 170, 70, 70);
        
        if ((mouseX >= 115 && mouseX <= 185 && mouseY >= 170 && mouseY <= 230)) {
            fill(227, 227, 227);
        } else {
            fill(201, 201, 201);
        }
        rect(115, 170, 70, 70);
        
        if ((mouseX >= 215 && mouseX <= 285 && mouseY >= 170 && mouseY <= 230)) {
            fill(227, 227, 227);
        } else {
            fill(201, 201, 201);
        }
        rect(215, 170, 70, 70);
        
        if ((mouseX >= 315 && mouseX <= 385 && mouseY >= 170 && mouseY <= 230)) {
            fill(227, 227, 227);
        } else {
            fill(201, 201, 201);
        }
        rect(315, 170, 70, 70);
        
        stroke(180, 25, 25);
        strokeWeight(3);
        fill(255, 50, 50);
        ellipse(50, 205, 30, 30);
        ellipse(135, 190, 30, 30);
        ellipse(233, 220, 30, 30);
        ellipse(335, 190, 30, 30);
        
        stroke(50, 95, 145);
        strokeWeight(3);
        fill(105, 170, 250);
        ellipse(165, 220, 30, 30);
        ellipse(250, 190, 30, 30);
        ellipse(335, 220, 30, 30);
        
        stroke(191, 183, 31);
        strokeWeight(3);
        fill(250, 240, 30);
        ellipse(267, 220, 30, 30);
        ellipse(365, 220, 30, 30);
        
        stroke(80, 185, 60);
        strokeWeight(3);
        fill(95, 230, 70);
        ellipse(365, 190, 30, 30);
        
        stroke(0, 0, 0);
        strokeWeight(3);
        if ((mouseX >= 45 && mouseX <= 195 && mouseY >= 280 && mouseY <= 350)) {
            fill(227, 227, 227);
        } else {
            fill(201, 201, 201);
        }
        rect(45, 280, 150, 70);
        if ((mouseX >= 205 && mouseX <= 355 && mouseY >= 280 && mouseY <= 350)) {
            fill(227, 227, 227);
        } else {
            fill(201, 201, 201);
        }
        rect(205, 280, 150, 70);
        fill(0, 0, 0);
        textSize(25);
		textAlign(CENTER, TOP);
		strokeWeight(0);
        text("Instructions", -78, 300, 400, 400);
        text("Credits", 80, 300, 400, 400);
    } else if (page === 1) {
        fill(0, 0, 0);
        stroke(0, 0, 0);
        strokeWeight(0);
        textSize(40);
        textAlign(CENTER, TOP);
        text("Credits", 0,10, 400, 400);
        textSize(30);
        textAlign(LEFT, TOP);
        text("Programming: " + credit_programming, 20,80, 400, 400);
        text("Art: " + credit_art, 20,120, 400, 400);
        text("Testing: " + credit_testing, 20,160, 400, 400);
        if (credit_programming === credit_art && credit_programming === credit_testing) {
            text("All the work: " + credit_programming, 20,200, 400, 400);
        }
        
        stroke(0, 0, 0);
        strokeWeight(3);
        if ((mouseX >= 100 && mouseX <= 300 && mouseY >= 300 && mouseY <= 350)) {
            fill(227, 227, 227);
        } else {
            fill(201, 201, 201);
        }
        rect(100, 300, 200, 50);
        fill(0, 0, 0);
        stroke(0, 0, 0);
        strokeWeight(0);
        textAlign(CENTER, TOP);
        text("Back", 5, 310, 400, 400);
    } else if (page === 2) {
        fill(0, 0, 0);
        stroke(0, 0, 0);
        strokeWeight(0);
        textSize(40);
        textAlign(CENTER, TOP);
        text("Instructions", 0,10, 400, 400);
        textSize(30);
        textAlign(LEFT, TOP);
        
        stroke(180, 25, 25);
        strokeWeight(3);
        fill(255, 50, 50);
        ellipse(50, 222, 30, 30);
        
        stroke(50, 95, 145);
        strokeWeight(3);
        fill(105, 170, 250);
        ellipse(150, 220, 30, 30);
        
        stroke(191, 183, 31);
        strokeWeight(3);
        fill(250, 240, 30);
        ellipse(250, 220, 30, 30);
        
        stroke(80, 185, 60);
        strokeWeight(3);
        fill(95, 230, 70);
        ellipse(350, 220, 30, 30);
        
        stroke(110, 110, 110);
        strokeWeight(1);
        fill(176, 176, 176);
        rect(335, 155, 30, 30);
        rect(305, 155, 30, 30);
        rect(365, 155, 30, 30);
        rect(335, 125, 30, 30);
        rect(235, 155, 30, 30);
        rect(205, 155, 30, 30);
        rect(265, 155, 30, 30);
        rect(235, 125, 30, 30);
        rect(135, 155, 30, 30);
        rect(105, 155, 30, 30);
        rect(165, 155, 30, 30);
        rect(135, 125, 30, 30);
        rect(35, 155, 30, 30);
        rect(05, 155, 30, 30);
        rect(65, 155, 30, 30);
        rect(35, 125, 30, 30);
        fill(0, 0, 0);
        textSize(15);
        text("W", 42,130, 400, 400);
        text("A", 12,160, 400, 400);
        text("S", 42,160, 400, 400);
        text("D", 72,160, 400, 400);
        text("↑", 142,130, 400, 400);
        text("←", 112,160, 400, 400);
        text("↓", 142,160, 400, 400);
        text("→", 172,160, 400, 400);
        text("T", 242,130, 400, 400);
        text("F", 212,160, 400, 400);
        text("G", 242,160, 400, 400);
        text("H", 272,160, 400, 400);
        text("I", 342,130, 400, 400);
        text("J", 312,160, 400, 400);
        text("K", 342,160, 400, 400);
        text("L", 372,160, 400, 400);
        
        textSize(30);
        stroke(0, 0, 0);
        strokeWeight(3);
        if ((mouseX >= 100 && mouseX <= 300 && mouseY >= 300 && mouseY <= 350)) {
            fill(227, 227, 227);
        } else {
            fill(201, 201, 201);
        }
        rect(100, 300, 200, 50);
        fill(0, 0, 0);
        stroke(0, 0, 0);
        strokeWeight(0);
        textAlign(CENTER, TOP);
        text("Back", 5, 310, 400, 400);
    }
};

var death = function() {
    fill(60, 60, 60, 10);
    rect(-10, -10, 420, 420);
    fill(255, 255, 255);
    stroke(176, 176, 176);
    textSize(50);
    textAlign(CENTER, TOP);
    if (players >= 2) {
		strokeWeight(0);
        text("Player " + place_first + " Wins", 0, 10, 400, 400);
        textAlign(LEFT, TOP);
        
        fill(60, 60, 60, 10);
        rect(-10, -10, 420, 420);
        fill(255, 255, 255);
		stroke(176, 176, 176);
		strokeWeight(0);
        
        text("1.", 50, 70, 400, 400);
        
        if (players >= 2) {
            text("2.", 50, 130, 400, 400);
        }
        
        if (players >= 3) {
            text("3.", 50, 190, 400, 400);
        }
        
        if (players >= 4) {
            text("4.", 50, 250, 400, 400);
        }
    } else {
		strokeWeight(0);
		text(floor(timer * 100)/100, 0, 10, 400, 400);
		
        if (timer >= record) {
            text("New Record!", 0, 150, 400, 400);
            record = timer;
        } else {
            text("Record: " + record, 20, 150, 380, 150);
        }
    }
    
    if (mouseX >= 50 && mouseX <= 350 && mouseY >= 325 && mouseY <= 385) {
        fill(227, 227, 227);
    } else {
        fill(201, 201, 201);
	}
	
	textAlign(LEFT, TOP);
	strokeWeight(3);
    rect(50, 325, 300, 60);
	fill(255, 255, 255);
	strokeWeight(0);
    text("Play Again", 75, 330, 400, 400);
    
    if (place_first === 1) {
        stroke(180, 25, 25);
        strokeWeight(3);
        fill(255, 50, 50);
    } else if (place_first === 2) {
        stroke(50, 95, 145);
        strokeWeight(3);
        fill(105, 170, 250);
    } else if (place_first === 3) {
        stroke(191, 183, 31);
        strokeWeight(3);
        fill(250, 240, 30);
    } else if (place_first === 4) {
        stroke(80, 185, 60);
        strokeWeight(3);
        fill(95, 230, 70);
    }
    ellipse(200, 100, 40, 40);
    
    if (place_second === 1) {
        stroke(180, 25, 25);
        strokeWeight(3);
        fill(255, 50, 50);
    } else if (place_second === 2) {
        stroke(50, 95, 145);
        strokeWeight(3);
        fill(105, 170, 250);
    } else if (place_second === 3) {
        stroke(191, 183, 31);
        strokeWeight(3);
        fill(250, 240, 30);
    } else if (place_second === 4) {
        stroke(80, 185, 60);
        strokeWeight(3);
        fill(95, 230, 70);
    }
    
    if (players >= 2) {
        ellipse(200, 160, 40, 40);
    }
    
    if (place_third === 1) {
        stroke(180, 25, 25);
        strokeWeight(3);
        fill(255, 50, 50);
    } else if (place_third === 2) {
        stroke(50, 95, 145);
        strokeWeight(3);
        fill(105, 170, 250);
    } else if (place_third === 3) {
        stroke(191, 183, 31);
        strokeWeight(3);
        fill(250, 240, 30);
    } else if (place_third === 4) {
        stroke(80, 185, 60);
        strokeWeight(3);
        fill(95, 230, 70);
    }
    
    if (players >= 3) {
        ellipse(200, 220, 40, 40);
    }
    
    if (place_fourth === 1) {
        stroke(180, 25, 25);
        strokeWeight(3);
        fill(255, 50, 50);
    } else if (place_fourth === 2) {
        stroke(50, 95, 145);
        strokeWeight(3);
        fill(105, 170, 250);
    } else if (place_fourth === 3) {
        stroke(191, 183, 31);
        strokeWeight(3);
        fill(250, 240, 30);
    } else if (place_fourth === 4) {
        stroke(80, 185, 60);
        strokeWeight(3);
        fill(95, 230, 70);
    }
    
    if (players >= 4) {
        ellipse(200, 280, 40, 40);
    }
};

var game = function() {
    fill(255, 255, 255);
    rect(-10, -10, 420, 420);
    
    trails();
    
    if (countdown > 0) {
        if (players >= 1) {
            stroke(180, 25, 25);
            strokeWeight(3);
            fill(255, 50, 50);
            ellipse(xP1, yP1, radius * 2, radius * 2);
        }
        
        if (players >= 2) {
            stroke(50, 95, 145);
            strokeWeight(3);
            fill(105, 170, 250);
            ellipse(xP2, yP2, radius * 2, radius * 2);
        }
        
        if (players >= 3) {
            stroke(191, 183, 31);
            strokeWeight(3);
            fill(250, 240, 30);
            ellipse(xP3, yP3, radius * 2, radius * 2);
        }
        
        if (players >= 4) {
            stroke(80, 185, 60);
            strokeWeight(3);
            fill(95, 230, 70);
            ellipse(xP4, yP4, radius * 2, radius * 2);
        }
        
		fill(0, 0, 0);
		strokeWeight(0);
		text(floor(countdown) + 1, 0, 0, 400, 400);
        countdown = countdown - 0.015;
        return;
    } else if (countdown > -1.5) {
		fill(0, 0, 0);
		strokeWeight(0);
        text("GO", 0, 0, 400, 400);
        countdown = countdown - 0.015;
        timer+=0.015;
        
        if (directionP1 === 5) {
            directionP1 = 3;
        }
        
        if (directionP2 === 5) {
            directionP2 = 2;
        }
        
        if (directionP3 === 5) {
            directionP3 = 3;
        }
        
        if (directionP4 === 5) {
            directionP4 = 2;
        }
    } else if (players === 1) {
        timer+=0.015;
		fill(0, 0, 0);
		strokeWeight(0);
        text(floor(timer) + " seconds", 0, 0, 400, 400);
    }
    
    if (directionP1 !== 5 && players >= 1) {
        if (!playerIsOut(1)) {
            append(beenTo, xP1 + "|" + yP1 + "|1");
        }
	}
    
    if (keyIsPressed && keyCode === 119 && directionP1 !== 0 && directionP1 !== 1) {
        directionP1 = 0;
    }
    
    if (keyIsPressed && keyCode === 115 && directionP1 !== 1 && directionP1 !== 0) {
        directionP1 = 1;
    }
    
    if (keyIsPressed && keyCode === 100 && directionP1 !== 2 && directionP1 !== 3) {
        directionP1 = 2;
    }
    
    if (keyIsPressed && keyCode === 97 && directionP1 !== 2 && directionP1 !== 3) {
        directionP1 = 3;
    }
     
    if (directionP1 === 0) {
        moveUp(1);
    } else if (directionP1 === 1) {
        moveDown(1);
    } else if (directionP1 === 2) {
        moveRight(1);
    } else if (directionP1 === 3) {
        moveLeft(1);
    }
    
    if (directionP2 !== 5 && players >= 2) {
        if (!playerIsOut(2)) {
            append(beenTo, xP2 + "|" + yP2 + "|2");
        }
    }
    
    if (keyIsPressed && keyCode === UP_ARROW && directionP2 !== 0 && directionP2 !== 1) {
        directionP2 = 0;
    }
    
    if (keyIsPressed && keyCode === DOWN_ARROW && directionP2 !== 1 && directionP2 !== 0) {
        directionP2 = 1;
    }
    
    if (keyIsPressed && keyCode === RIGHT_ARROW && directionP2 !== 2 && directionP2 !== 3) {
        directionP2 = 2;
    }
    
    if (keyIsPressed && keyCode === LEFT_ARROW && directionP2 !== 2 && directionP2 !== 3) {
        directionP2 = 3;
    }
     
    if (directionP2 === 0) {
        moveUp(2);
    } else if (directionP2 === 1) {
        moveDown(2);
    } else if (directionP2 === 2) {
        moveRight(2);
    } else if (directionP2 === 3) {
        moveLeft(2);
    }
    
    if (directionP3 !== 5 && players >= 3) {
        if (!playerIsOut(3)) {
            append(beenTo, xP3 + "|" + yP3 + "|3");
        }
    }
    
    if (keyIsPressed && keyCode === 116 && directionP3 !== 0 && directionP3 !== 1) {
        directionP3 = 0;
    }
    
    if (keyIsPressed && keyCode === 103 && directionP3 !== 1 && directionP3 !== 0) {
        directionP3 = 1;
    }
    
    if (keyIsPressed && keyCode === 104 && directionP3 !== 2 && directionP3 !== 3) {
        directionP3 = 2;
    }
    
    if (keyIsPressed && keyCode === 102 && directionP3 !== 2 && directionP3 !== 3) {
        directionP3 = 3;
    }
     
    if (directionP3 === 0) {
        moveUp(3);
    } else if (directionP3 === 1) {
        moveDown(3);
    } else if (directionP3 === 2) {
        moveRight(3);
    } else if (directionP3 === 3) {
        moveLeft(3);
    }
    
    if (directionP4 !== 5 && players >= 4) {
        if (!playerIsOut(4)) {
            append(beenTo, xP4 + "|" + yP4 + "|4");
        }
    }
    
    if (keyIsPressed && keyCode === 105 && directionP4 !== 0 && directionP4 !== 1) {
        directionP4 = 0;
    }
    
    if (keyIsPressed && keyCode === 107 && directionP4 !== 1 && directionP4 !== 0) {
        directionP4 = 1;
    }
    
    if (keyIsPressed && keyCode === 108 && directionP4 !== 2 && directionP4 !== 3) {
        directionP4 = 2;
    }
    
    if (keyIsPressed && keyCode === 106 && directionP4 !== 2 && directionP4 !== 3) {
        directionP4 = 3;
    }
     
    if (directionP4 === 0) {
        moveUp(4);
    } else if (directionP4 === 1) {
        moveDown(4);
    } else if (directionP4 === 2) {
        moveRight(4);
    } else if (directionP4 === 3) {
        moveLeft(4);
    }
    
    if (players >= 1) {
        stroke(180, 25, 25);
        strokeWeight(3);
        fill(255, 50, 50);
        ellipse(xP1, yP1, radius * 2, radius * 2);
    }
    
    if (players >= 2) {
        stroke(50, 95, 145);
        strokeWeight(3);
        fill(105, 170, 250);
        ellipse(xP2, yP2, radius * 2, radius * 2);
    }
    
    if (players >= 3) {
        stroke(191, 183, 31);
        strokeWeight(3);
        fill(250, 240, 30);
        ellipse(xP3, yP3, radius * 2, radius * 2);
    }
    
    if (players >= 4) {
        stroke(80, 185, 60);
        strokeWeight(3);
        fill(95, 230, 70);
        ellipse(xP4, yP4, radius * 2, radius * 2);
    }
    
    for (var i = 0; i < beenTo.length; i++) {
        var xBT = convertStringToInt(beenTo[i].split("|")[0]);
        var yBT = convertStringToInt(beenTo[i].split("|")[1]);
        var player = convertStringToInt(beenTo[i].split("|")[2]);
        
        var yP1Dif = yP1 - yBT;
        var xP1Dif = xP1 - xBT;
        var yP2Dif = yP2 - yBT;
        var xP2Dif = xP2 - xBT;
        var yP3Dif = yP3 - yBT;
        var xP3Dif = xP3 - xBT;
        var yP4Dif = yP4 - yBT;
        var xP4Dif = xP4 - xBT;
        
        if (players === 1) {
            place_fourth = 4;
            place_third = 3;
            place_second = 2;
        }
        
        if (players === 2) {
            place_fourth = 4;
            place_third = 3;
        }
        
        if (players === 3) {
            place_fourth = 4;
        }
        
        if ((yP1Dif < 2 && yP1Dif > -2) && (xP1Dif < 2 && xP1Dif > -2)) {
            if (playerIsOut(player) === false && players >= 2) {
                if (place_fourth === 0 && place_third !== 1 && place_second !== 1) {
                    place_fourth = 1;
                } else if (place_fourth !== 1 && place_third === 0 && place_second !== 1) {
                    place_third = 1;
                } else if (place_fourth !== 1 && place_third !== 1 && place_second === 0) {
                    place_second = 1;
                }
            } else {
                place_first = 1;
            }
        }
        
        if ((yP2Dif < 2 && yP2Dif > -2) && (xP2Dif < 2 && xP2Dif > -2)) {
            if (playerIsOut(player) === false && players >= 2) {
                if (place_fourth === 0 && place_third !== 2 && place_second !== 2) {
                    place_fourth = 2;
                } else if (place_fourth !== 2 && place_third === 0 && place_second !== 2) {
                    place_third = 2;
                } else if (place_fourth !== 2 && place_third !== 2 && place_second === 0) {
                    place_second = 2;
                }
            }
        }
        
        if ((yP3Dif < 2 && yP3Dif > -2) && (xP3Dif < 2 && xP3Dif > -2)) {
            if (playerIsOut(player) === false && players >= 2) {
                if (place_fourth === 0 && place_third !== 3 && place_second !== 3) {
                    place_fourth = 3;
                } else if (place_fourth !== 3 && place_third === 0 && place_second !== 3) {
                    place_third = 3;
                } else if (place_fourth !== 3 && place_third !== 3 && place_second === 0) {
                    place_second = 3;
                }
            }
        }
        
        if ((yP4Dif < 2 && yP4Dif > -2) && (xP4Dif < 2 && xP4Dif > -2)) {
            if (playerIsOut(player) === false && players >= 2) {
                if (place_fourth === 0 && place_third !== 4 && place_second !== 4) {
                    place_fourth = 4;
                } else if (place_fourth !== 4 && place_third === 0 && place_second !== 4) {
                    place_third = 4;
                } else if (place_fourth !== 4 && place_third !== 4 && place_second === 0) {
                    place_second = 4;
                }
            }
        }
        
        if (players === 1 && place_first === 1) {
            state = 2;
        }
        
        if (place_second !== 0 && players >= 2) {
            if (place_fourth !== 4 && place_third !== 4 && place_second !== 4) {
                place_first = 4;
            } else if (place_fourth !== 3 && place_third !== 3 && place_second !== 3) {
                place_first = 3;
            } else if (place_fourth !== 2 && place_third !== 2 && place_second !== 2) {
                place_first = 2;
            } else if (place_fourth !== 1 && place_third !== 1 && place_second !== 1) {
                place_first = 1;
            }
            
            state = 2;
        }
    }
};

draw = function() {
    if (state === 1) {
        game();
    } else if (state === 2) {
        death();
    } else {
        menu();
    }
};

var mousePressed = function() {
    if (state === 1) {
    } else if (state === 2) {
        if (mouseX >= 50 && mouseX <= 350 && mouseY >= 325 && mouseY <= 385) {
            state = 0;
        }
    } else {
        if ((mouseX >= 15 && mouseX <= 85 && mouseY >= 170 && mouseY <= 230) && page === 0) {
            players = 1;
            state = 1;
        }
        
        if ((mouseX >= 115 && mouseX <= 185 && mouseY >= 170 && mouseY <= 230) && page === 0) {
            players = 2;
            state = 1;
        }
        
        if ((mouseX >= 215 && mouseX <= 285 && mouseY >= 170 && mouseY <= 230) && page === 0) {
            players = 3;
            state = 1;
        }
        
        if ((mouseX >= 315 && mouseX <= 385 && mouseY >= 170 && mouseY <= 230) && page === 0) {
            players = 4;
            state = 1;
        }
        
        if ((mouseX >= 45 && mouseX <= 195 && mouseY >= 280 && mouseY <= 350) && page === 0) {
            page = 2;
        } else if ((mouseX >= 205 && mouseX <= 355 && mouseY >= 280 && mouseY <= 350) && page === 0) {
            page = 1;
        } else if ((mouseX >= 100 && mouseX <= 300 && mouseY >= 300 && mouseY <= 350) && page === 1) {
            page = 0;
        } else if ((mouseX >= 100 && mouseX <= 300 && mouseY >= 300 && mouseY <= 350) && page === 2) {
            page = 0;
        }
    }
};
