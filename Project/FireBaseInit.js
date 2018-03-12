(function() {
// Initialize Firebase

var config = {
	apiKey: "AIzaSyCcPhzOSSNKeB8tUIpBxgpgiN3qByeg2dY",
	authDomain: "snowsafe-b378c.firebaseapp.com",
	databaseURL: "https://snowsafe-b378c.firebaseio.com",
	projectId: "snowsafe-b378c",
	storageBucket: "",
	messagingSenderId: "676990316274"
};
firebase.initializeApp(config);
  	  		
}());

var UID = "";
var U_Name = "";
firebase.auth().onAuthStateChanged(function(firebaseUser){
	if(firebaseUser){
		UID = firebaseUser.uid;
		UserSignedIn();
		var name = database.ref("users/" + firebaseUser.uid+"/UserName");
		name.on('value', function(snapshot){
			U_name = snapshot.val();
			//document.getElementById("UserNameP").innerHTML = snapshot.val();
		});
	}else{
		alert("Would have sent them to login page");
		//window.location = "Login.html";
	}
});
