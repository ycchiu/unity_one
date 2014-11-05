﻿//*************************
//*     Player Script     *
//*************************

//Inspector Variables
var speed: float = 8.0;
var vert_max : float = 0.0;
var vert_min : float = -0.0;
var horz_max : float = 0.0;
var horz_min : float = -0.0;
//Private Variables

function Start () {

}

function Update () 
{
	
	var transV : float = Input.GetAxis("Vertical") * speed * Time.deltaTime;
	var transH : float = Input.GetAxis("Horizontal") * speed * Time.deltaTime;
	
	transform.Translate (transH, transV, 0);
	transform.position.x = Mathf.Clamp(transform.position.x, horz_min, horz_max);
	transform.position.y = Mathf.Clamp(transform.position.y, vert_min, vert_max);
}