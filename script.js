//About Me
function aboutExpandContract() {
	let aboutMoreInfo = document.getElementById("aboutMoreInfo");
	let aboutSeeMoreLess = document.getElementById("aboutSeeMoreLess");
	
	
	if (aboutMoreInfo.classList.contains("hidden")){
		aboutMoreInfo.classList.remove("hidden");
		aboutSeeMoreLess.innerHTML = "See Less...";
	}
	else {
		aboutMoreInfo.classList.add("hidden");
		aboutSeeMoreLess.innerHTML = "See More...";
	}
}
function futureExpandContract() {
	let futureMoreInfo = document.getElementById("futureMoreInfo");
	let futureSeeMoreLess = document.getElementById("futureSeeMoreLess");
	
	
	if (futureMoreInfo.classList.contains("hidden")){
		futureMoreInfo.classList.remove("hidden");
		futureSeeMoreLess.innerHTML = "See Less...";
	}
	else {
		futureMoreInfo.classList.add("hidden");
		futureSeeMoreLess.innerHTML = "See More...";
	}
}

//Slide Show
setInterval(changeSlide, 10000);

function changeSlide() {
	let picOne = document.getElementById ("pic-one");
	let picTwo = document.getElementById ("pic-two");
	let picThree = document.getElementById ("pic-three");
	let picFour = document.getElementById ("pic-four");

	if (picTwo.classList == "hidden" && picThree.classList == "hidden" && picFour.classList == "hidden") {
		picOne.classList.add("hidden");
		picTwo.classList.remove("hidden");
	}
	else if (picOne.classList == "hidden" && picThree.classList == "hidden" && picFour.classList == "hidden") {
		picTwo.classList.add("hidden");
		picThree.classList.remove("hidden");
	}
	else if (picOne.classList == "hidden" && picTwo.classList == "hidden" && picFour.classList == "hidden") {
		picThree.classList.add("hidden");
		picFour.classList.remove("hidden");
	}
	else if (picOne.classList == "hidden" && picTwo.classList == "hidden" && picThree.classList == "hidden") {
		picFour.classList.add("hidden");
		picOne.classList.remove("hidden");
	}
}

//Quiz
function showScore() {
	let qOne = document.getElementById("q-one").value;
	let qTwo = document.getElementById("q-two").value;
	let qThree = document.getElementById("q-three").value;
	let qFour = document.getElementById("q-four").value;
	let resultText = document.getElementById("result-text");
	let total = 0;
	
	resultText.innerHTML = "";
	
	resultText.innerHTML = "<h3>Quiz Results:</h3>"
	
	if (qOne.toLowerCase() == "id is used for one element"){
		resultText.innerHTML += "<p>Question 1 - correct</p>";
		total += 1;
	}
	else{
		resultText.innerHTML += "<p>Question 1 - incorrect</p>";
	}
	
	if (qTwo.toLowerCase() == "at the end of the body section"){
		resultText.innerHTML += "<p>Question 2 - correct</p>";
		total += 1;
	}
	else{
		resultText.innerHTML += "<p>Question 2 - incorrect</p>";
	}
	
	if (qThree.toLowerCase() == "p"){
		resultText.innerHTML += "<p>Question 3 - correct</p>";
		total += 1;
	}
	else{ 
		resultText.innerHTML += "<p>Question 3 - incorrect</p>";
	}
	
	if (qFour.toLowerCase() == "36"){
		resultText.innerHTML += "<p>Question 4 - correct</p>";
		total += 1;
	}
	else{ 
		resultText.innerHTML += "<p>Question 4 - incorrect</p>";
	}
	
	resultText.innerHTML += "<p>Score: " + total + "/4";
}


