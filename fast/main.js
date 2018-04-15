// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBC27pDldUEHDVeDFVzT-2058O77E2kUEc",
    authDomain: "purzey-b9cbd.firebaseapp.com",
    databaseURL: "https://purzey-b9cbd.firebaseio.com",
    projectId: "purzey-b9cbd",
    storageBucket: "purzey-b9cbd.appspot.com",
    messagingSenderId: "899372738982"
  };
  firebase.initializeApp(config);
  displaySpammers(config);

function displaySpammers(uni){
	count=0;
	firebase.database().ref('server/messenger').orderByChild('University').equalTo('Fast-NU').on("value", function(snapshot) {
    snapshot.forEach(function(data) {
    	showTemplate(data.val(), ++count);
    	console.log(data.val());
        });
});
}


function showTemplate(obj, count){
	console.log(obj);

}