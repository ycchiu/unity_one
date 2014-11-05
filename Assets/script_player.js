//*************************
//*     Player Script     *
//*************************

//Inspector Variables
var speed: float = 8.0;
var rotationSpeed : float = 100.0;
//Private Variables

function Start () {

}

function Update () 
{
	
	var transV : float = Input.GetAxis("Vertical") * speed * Time.deltaTime;
	var transH : float = Input.GetAxis("Horizontal") * speed * Time.deltaTime;
	
	transform.Translate (transH, transV, 0);
	
	if (transform.position.x > 2 )
		transform.position.x = 2;
	
	if (transform.position.x < -2)
		transform.position.x = -2;
	
	
	if (transform.position.y > 2 )
		transform.position.y = 2;
	
	if (transform.position.y < -2)
		transform.position.y = -2;
	
}