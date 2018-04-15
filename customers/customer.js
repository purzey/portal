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
  count = 0;
  firebase.database().ref('server/messenger').on("value", function(snapshot) {
  	snapshot.forEach(function(data) {
  		obj = data.val();
	  	if(obj.Name!=null){
	  		document.getElementById("loadingM").innerHTML = "";
	  		var dp, name, gender, university, campus;
	  		if(obj.dp!=null){
	  			dp = obj.dp.value;
	  		}else{
	  			dp = '';
	  		}
	  		if(obj.name!=null){
	  			name = obj.name.value;
	  		}else{
	  			name = '';
	  		}
	  		if(obj.gender!=null){
	  			gender = obj.gender.value;
	  		}else{
	  			gender = '';
	  		}
	    	
	    	var output = '<div class=\"media text-muted pt-3\"><img src=\"';
	    	if(obj.dp != null){
	    		output += obj.dp.value;
	    	}
	    	output += '\" alt=\"\" class=\"mr-2 rounded\" width=\"80\" height=\"80\">';
	    	output += '<p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\"><strong class=\"d-block text-gray-dark\" style=\"font-size:15px\">';
	    	if(obj.Name !=null){
	    		output += obj.Name.value;
	    	}
	    	output += '</strong>';
	    	if(obj.University != null){
	    		output += "<b>University</b>: " + obj.University.value + '<br>';
	    	}
	    	if(obj.Campus != null){
	    		output += "<b>Campus</b>: " + obj.Campus.value+ '<br>';
	    	}
	    	if(obj.Gender != null){
	    		output += "<b>Gender</b>: " + obj.Gender.value+ '<br>';
	    	}
	    	if(obj.Phone != null){
	    		output += "<b>Phone Number</b>: " + obj.Phone.value+ '<br>';
	    	}
	    	output += '</p></div>';
	    	console.log(count++);
	    	document.getElementById("newCustomer").innerHTML += output;
	    	if(obj.dp != null){
	    		console.log(output);
	    	}
    	}
        });
});
