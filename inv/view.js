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
  		if(obj.purPrice!=null){
  			output += '<td>Rs' + obj.purPrice+ '</td>';
  		}else{
  			output += '<td>N/A</td>';
  		}
  		if(obj.price!=null){
  			      output += '<td>Rs' + obj.price+ '</td>';
  		}else{
  			output += '<td>N/A</td>';
  		}

  		if(obj.qty!=null){
  			output += '<td>' + obj.qty+ '</td>';
  		}else{
  			output += '<td>N/A</td>';
  		}
  		output += '<td><a style = "font-size: 12px" href=\"#\" onClick=\"editItem(\''+ data.key +'\')\">edit</a> | <a style = "font-size: 12px; color:red" href=\"\" onClick=\"deleteItem(\''+ data.key +'\')\">delete</a> </td></tr>';
  		document.getElementById("addPrd").innerHTML += output;

	  	console.log(output);
	  	count++;
        });
});



function editItem(key){
	window.scrollTo(0,document.body.scrollHeight);
	firebase.database().ref('server/products/' + key).once('value').then(function(snapshot) {
	  	var dis = '';
		document.getElementById("newStyle").innerHTML = '<style>#editForm{display: block;}</style>';
		dis = '<strong>Edit ' + key + ':</strong>'
		dis += '<form><div class="form-row">';
		document.getElementById("editing").innerHTML = dis;
		document.getElementById("eName").value = snapshot.val().name;
		document.getElementById("eQty").value = snapshot.val().qty;
		document.getElementById("eSalePrice").value = snapshot.val().price;
		document.getElementById("ePurPrice").value = snapshot.val().purPrice;
		document.getElementById("eID").value = key;
	});


	console.log(key);
	return;
}

function updateValues(){
	var key =  document.getElementById("eID").value;
	var	nname = document.getElementById("eName").value;
	var nqty =	document.getElementById("eQty").value;
	var nsalePrice = 	document.getElementById("eSalePrice").value;
	var npurPrice =	document.getElementById("ePurPrice").value;
	firebase.database().ref('server/products/' + key)
        .update({ 
        	name: nname, 
        	price: nsalePrice,
        	purPrice: npurPrice,
        	qty: nqty
        });
}


function deleteItem(key){
  firebase.database().ref('server/products/' + key).remove();
}