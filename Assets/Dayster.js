#pragma strict
var main : UnityEngine.UI.Text;
var Image0 : GameObject;
var Image1 : GameObject;
var Image2 : GameObject;
var Image3 : GameObject;
var Image4 : GameObject;
var Image5 : GameObject;
var Image6 : GameObject;
var Image7 : GameObject;
var Image8 : GameObject;
var Image9 : GameObject;
var Image10 : GameObject;
var Image11 : GameObject;
var Image12 : GameObject;
var Image13 : GameObject;
var Image14 : GameObject;
var Image15 : GameObject;
var Image16 : GameObject;
var Image17 : GameObject;
var Image18 : GameObject;
var Image19 : GameObject;
var Image20 : GameObject;
var Image21 : GameObject;
var Image22 : GameObject;
var Image23 : GameObject;
var Image24 : GameObject;
var Image25 : GameObject;
var Image26 : GameObject;
var Image27 : GameObject;


function Start () {
	main.text = "MEME OF " + System.DateTime.UtcNow.ToString("MM/dd/yyyy");
	if (PlayerPrefs.GetString("Today") != System.DateTime.UtcNow.ToString("MM/dd/yyyy")) {
		PlayerPrefs.SetString("Today", System.DateTime.UtcNow.ToString("MM/dd/yyyy"));
		var number = Random.Range(0,28);
		PlayerPrefs.SetInt("Todays", number);
		var go : GameObject;
		go = GameObject.Find("Image (" + PlayerPrefs.GetInt("Todays") + ")");
		HIDE ();
		go.SetActive (true);
	}else {
		var gos : GameObject;
		gos = GameObject.Find("Image (" + PlayerPrefs.GetInt("Todays") + ")");
		HIDE ();
		gos.SetActive (true);
	}
	Debug.Log(System.DateTime.UtcNow.ToString("MM/dd/yyyy"));
}

function HIDE () {
	Image0.SetActive(false);
	Image1.SetActive(false);
	Image2.SetActive(false);
	Image3.SetActive(false);
	Image4.SetActive(false);
	Image5.SetActive(false);
	Image6.SetActive(false);
	Image7.SetActive(false);
	Image8.SetActive(false);
	Image9.SetActive(false);
	Image10.SetActive(false);
	Image11.SetActive(false);
	Image12.SetActive(false);
	Image13.SetActive(false);
	Image14.SetActive(false);
	Image15.SetActive(false);
	Image16.SetActive(false);
	Image17.SetActive(false);
	Image18.SetActive(false);
	Image19.SetActive(false);
	Image20.SetActive(false);
	Image21.SetActive(false);
	Image22.SetActive(false);
	Image23.SetActive(false);
	Image24.SetActive(false);
	Image25.SetActive(false);
	Image26.SetActive(false);
	Image27.SetActive(false);
}