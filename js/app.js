// for (var i=0; i<priceList.length; i++) {subtotal += priceList[i]}

//var shoppingCart = ["White Tea", "Surfing Gear", "Bitcoin", "More Tea", "Money"];

var shoppingCart = [{listImg: "../images/happy.png", itemName: "Happy Friend", itemDescription: "Someone who will always remind you to smile!", price: 100.00},
	{listImg: "../images/Github.png", itemName: "Github", itemDescription: "The world's leading software developing platform", price: 1000.00},
	{listImg: "../images/SquareUp.png", itemName: "Square", itemDescription: "It's Easy to Take Credit Cards", price: 1000.00},
	{listImg: "../images/LetterH.jpg", itemName: "Letter H", itemDescription: 'Start your words right like "Hello", "Hi, "Happy", "Horchata", and more!', price: 1000.00},
	{listImg: "../images/Tinder.png", itemName: "Tinder", itemDescription: "Swipe. Match. Chat.", price: 1000.00}];

function getData(data){
	for(var i=0; i<shoppingCart.length; i++) {
		// var divElem = makeElements("div", "itemsBox", "test");
		// main.appendChild(divElem);
		
		// var productBox = makeElements("div", "itemNames", data[i].product);
		// divElem.appendChild(productBox);

		// var priceBox = makeElements("div", "itemPrice", data[i].price);

		var wholeCart = document.getElementById("wholeCart");

		var cartElem = document.createElement("div");
		cartElem.className = "cartItem";
		wholeCart.appendChild(cartElem);

		var imgElem = document.createElement("IMG");
		imgElem.className = "listImg";
		imgElem.setAttribute("src", data[i].listImg);
		cartElem.appendChild(imgElem);

		var infoElem = document.createElement("div");
		infoElem.className = "itemInfo";
		cartElem.appendChild(infoElem);

		var nameElem = document.createElement("div");
		nameElem.className = "itemName";
		nameElem.innerHTML = data[i].itemName;
		infoElem.appendChild(nameElem);

		var detailElem = document.createElement("div");
		detailElem.className = "itemDescription";
		detailElem.innerHTML = data[i].itemDescription;
		infoElem.appendChild(detailElem);

		var priceElem = document.createElement("div");
		priceElem.className = "price";
		priceElem.innerHTML = data[i].price;
		cartElem.appendChild(priceElem);
	// 	var divElem = document.createElement("div");
	// 	divElem.className = "itemsBox";
	// 	main.appendChild(divElem);

	// 	var productBox = document.createElement("div");
	// 	productBox.className = "itemNames";
	// 	productBox.innerHTML = data[i].product;
	// 	divElem.appendChild(productBox);
	
	// var priceBox = document.createElement("div");
	// 	priceBox.className = "itemPrice";
	// 	priceBox.innerHTML = data[i].price;
	// 	divElem.appendChild(priceBox);
	// var descripBox = document.createElement("div");
	// 	descripBox.className = "itemPrice";
	// 	descripBox.innerHTML = data[i].descrip;
	// 	divElem.appendChild(descripBox);
	}
}

getData(shoppingCart);

// function makeElements(elem, marker, data){
// 	var createBox = document.createElement(elem);
// 	createBox.className = marker;
// 	createBox.innerHTML = data;

// 	return createBox;
// }



