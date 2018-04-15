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
  count = 1;
  firebase.database().ref('server/products').on("value", function(snapshot) {
  	snapshot.forEach(function(data) {
  		document.getElementById("loadingM").innerHTML= "";
  		obj = data.val();
  		console.log(data.key);
  		var output = '<tr><th scope=\"row\">' + count  + '</th>';
  		output += '<td>' + data.key+ '</td>';
  		if(obj.name!=null){
  			      output += '<td>' + obj.name+ '</td>';
  		}else{
  			output += '<td>N/A</td>';
  		}
  		if(obj.price!=null){
  			      output += '<td>Rs' + obj.price+ '</td>';
  		}else{
  			output += '<td>N/A</td>';
  		}
  		if(obj.purPrice!=null){
  			output += '<td>Rs' + obj.purPrice+ '</td>';
  		}else{
  			output += '<td>N/A</td>';
  		}
  		if(obj.qty!=null){
  			output += '<td>' + obj.qty.value+ '</td>';
  		}else{
  			output += '<td>N/A</td>';
  		}

  		document.getElementById("addPrd").innerHTML += output;
	  	console.log(output);
	  	count++;
        });
});
