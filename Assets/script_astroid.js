#pragma strict

var astroidSpeed : float = 6.0;
var destroyLimit : float = -9;
var defaultAstroidY : float = 9;

var explosion	: Transform;
var sceneManager : GameObject;

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
		
		other.GetComponent(script_player).lives -= 1;
		sceneManager.transform.GetComponent(script_sceneManager).SubstractLife();
		
		if( explosion ) {
			Instantiate (explosion, transform.position, transform.rotation);
		}
	}
}