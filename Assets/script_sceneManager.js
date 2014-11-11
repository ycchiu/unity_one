#pragma strict

//Inspector Variables
var gameTime : float = 0.0;
static var score : int = 0;
static var lives : int = 3;
var labelRight : float = 100;


//Private Variabls


function Start () {

}

function Update () 
{
	print("Player Score: " + score + " Player lives: " + lives);
}

function AddScore()
{
	score += 1;
}

function SubstractLife()
{
	lives -= 1;
}

function OnGUI()
{
	GUI.Label(Rect(10, 10, 150, 20), "Player Score: " + score);
	GUI.Label(Rect(10, 30, 200, 20), "Player Lives: " + lives);
	GUI.Label(Rect(Screen.width-labelRight, 10, 100, 20), "Counter: " + gameTime);
}