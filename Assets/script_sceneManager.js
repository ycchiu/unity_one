#pragma strict

//Inspector Variables
var gameTime : float = 0.0;
static var score : int = 0;
//Private Variabls


function Start () {

}

function Update () 
{
	print("Player Score: " + score);
}

function AddScore()
{
	score += 1;
}