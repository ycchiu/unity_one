﻿#pragma strict
// Lose Script

// Inspector Variables 
var loseQuote : String = "You Lose!";

//function Start () {
//
//}
//
//function Update () {
//
//}

function OnGUI ()
{
	GUI.BeginGroup (Rect(Screen.width / 2 - 100, Screen.height / 2 -100, 200, 100));
	
	GUI.Box (Rect(0, 0, 200, 200), "You Lose");
	
	GUI.Label (Rect(10, 30, 100, 50), "Your Score : ");
	
	if (GUI.Button(Rect(60, 60, 80, 30), "Main Menu") ) {
		Application.LoadLevel ("scene_menu");
	}
	
	GUI.EndGroup ();
}