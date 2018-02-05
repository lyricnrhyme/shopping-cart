// for (var i=0; i<priceList.length; i++) {subtotal += priceList[i]}

//var shoppingCart = ["White Tea", "Surfing Gear", "Bitcoin", "More Tea", "Money"];

var shoppingCart = [{
	listImage: "White", 
}];

function getData(data){
	for(var i=0; i<data.length; i++) {
		// var divElem = makeElements("div", "itemsBox", "test");
		// main.appendChild(divElem);
		
		// var productBox = makeElements("div", "itemNames", data[i].product);
		// divElem.appendChild(productBox);

		// var priceBox = makeElements("div", "itemPrice", data[i].price);


		var divElem = document.createElement("div");
		divElem.className = "itemsBox";
		main.appendChild(divElem);

		var productBox = document.createElement("div");
		productBox.className = "itemNames";
		productBox.innerHTML = data[i].product;
		divElem.appendChild(productBox);
	
	var priceBox = document.createElement("div");
		priceBox.className = "itemPrice";
		priceBox.innerHTML = data[i].price;
		divElem.appendChild(priceBox);
	var descripBox = document.createElement("div");
		descripBox.className = "itemPrice";
		descripBox.innerHTML = data[i].descrip;
		divElem.appendChild(descripBox);
	}
}

// function makeElements(elem, marker, data){
// 	var createBox = document.createElement(elem);
// 	createBox.className = marker;
// 	createBox.innerHTML = data;

// 	return createBox;
// }



