#pragma strict

var astroidSpeed : float = 6.0;
var destroyLimit : float = -9;
var defaultAstroidY : float = 9;


function Start () {

}

function Update () 
{
	transform.Translate(Vector3.down * astroidSpeed * Time.deltaTime);
	
	if( transform.position.y <= destroyLimit ) {
		transform.position.y = defaultAstroidY;
		transform.position.x = Random.Range(-6, 6);
	}
}

function OnTriggerEnter (other : Collider )
{
	if( other.gameObject.tag == "Player") {
		//other.GetComponent("script_player").lives -= 1;
		if( other.GetComponent("script_player") != null ) {
			print (other.GetComponent("script_player").lives);
		}
	}
}