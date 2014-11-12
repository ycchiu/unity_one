#pragma strict
//*************************
//*     Player Script     *
//*************************

//Inspector Variables
public var lives : int = 3;

var speed: float = 8.0;
var vert_max : float = 0.0;
var vert_min : float = -0.0;
var horz_max : float = 0.0;
var horz_min : float = -0.0;
var numberOfShields	: int = 3;
var shieldKeyInput : KeyCode;

var projectTile : Transform;
var socketProjectTile : Transform;
var shieldMesh : Transform;

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
	
	if (Input.GetKeyDown("space"))
	{
		Instantiate (projectTile, socketProjectTile.position, socketProjectTile.rotation);
	}
	
	//create shield
	if ( Input.GetKeyDown(shieldKeyInput) )
	{
		Instantiate (shieldMesh, transform.position, transform.rotation);
		shieldMesh.transform.parent = transform;
	}
}