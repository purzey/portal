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
  var database = firebase.database();

  function addValues(){
  	var key =  document.getElementById("eID").value;
  	var	nname = document.getElementById("eName").value;
  	var nqty =	document.getElementById("eQty").value;
  	var nsalePrice = 	document.getElementById("eSalePrice").value;
  	var npurPrice =	document.getElementById("ePurPrice").value;
  	firebase.database().ref('server/products/' + key).set({ 
          	name: nname, 
          	price: nsalePrice,
          	purPrice: npurPrice,
          	qty: nqty
          });
    console.log(nname);
}

