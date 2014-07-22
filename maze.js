"use strict";

function Maze(width,height) {
this.width = 7;
this.height = 5;

this.startX = null;
this.startY = null;
this.startOrientation = null;
this.endX = null;
this.endY = null;

this.spaces = [];

var x, y;
for (x=1; x <= width; x += 1) {
	this. spaces[x] = [];
	for (y=1; y <= height; y += 1) {
		this.spaces[x] [y] = new mazeSpace;
	}
}
}


Maze.prototype.setStart = function(x, y, orientation) {
	this.startX = x;
	this.startY = y;
	this.startOrientation = orientation;


	
}


Maze.prototype.setEnd = function(x, y){
	this.endX = x;
	this.endY = y;

}

Maze.prototype.setWall = function(x, y, direction )