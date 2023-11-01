const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const allLIs = document.getElementsByTagName('li');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//filters fruit array to only elements that include str 
const search = (str) => fruit.filter((val) => val.toLowerCase().includes(str.toLowerCase()));

// Prevents search results when space is added without characters. Removes search results when deleting input.value. Sends search input value and length to showSuggestions function
function searchHandler(){
	if(input.value.trim() === '') {
		if(allLIs.length >= 1) {
			suggestions.innerHTML = ''; 
		}
	} else {
		return showSuggestions(search(input.value), input.value.length);
	}
}

// Resets suggestions ul when input.value changes (except when input.value is completed removed), appends results parameter into suggestions ul. Prevents all search results from appending to suggestions ul if search input value is deleted. Assigns input.value to searchStr, converting to whole word to lowercase and bolding searchStr, assigning result to searchNAme. appending results after capitalizing first character to suggestions ul
function showSuggestions(results, inputLength) {
	if(allLIs.length >= 1) { //try a different logic
		suggestions.innerHTML = ''; 
	}
	if(inputLength === 0) return;
	for(let word of results) {
		const newLI = document.createElement('li');
		const searchStr = input.value.toLowerCase();
		const searchName = word.toLowerCase().replaceAll(searchStr, `<b>${searchStr}</b>`);
		newLI.innerHTML = capitalizeWithBold(searchName);
		suggestions.appendChild(newLI);
	}
}

// Capitalizes first character whether it is bold or not
function capitalizeWithBold(boldWord){
	if(boldWord[0] === '<'){
		return `<b>${boldWord.charAt(3).toUpperCase()}${boldWord.slice(4)}`;
	} else { // don't need else if there is a return in if statement
		return `${boldWord.charAt(0).toUpperCase()}${boldWord.slice(1)}`; 
	}
}

// Populates search bar with suggestion
function useSuggestion(e) {
	const lowerCase = e.target.tagName.toLowerCase();
	if(lowerCase === 'li') {
		input.value = e.target.innerHTML.replaceAll("<b>", "").replaceAll("</b>", "");
		suggestions.innerHTML = ''; 
	} else if(lowerCase === 'b') {
		input.value = e.target.parentElement.innerHTML.replaceAll("<b>", "").replaceAll("</b>", "");
		suggestions.innerHTML = ''; 
	}
}

// Calls searchHandler after a new key is pressed
input.addEventListener('keyup', searchHandler);

// when clicking on suggested search element, return clicked suggestion to search bar via useSuggestion function
suggestions.addEventListener('click', useSuggestion);