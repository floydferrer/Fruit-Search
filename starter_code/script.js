const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const allLIs = document.getElementsByTagName('li');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//filters fruit array to elements that include str 
const search = (str) => fruit.filter((val) => val.toLowerCase().includes(str.toLowerCase()));


// Assigns search container value to variable 'text', and calls showSuggestions using search container value and length
const searchHandler = () => showSuggestions(search(input.value), input.value.length);

// appends results parameter into suggestions ul and removes all suggestions if inputVal (search container input length)=== 0
function showSuggestions(results, inputVal) {
	if(allLIs.length >= 1) {
		for (let i = 0; i < allLIs.length; i) {
			allLIs[0].remove();
		}
	}
	if(inputVal === 0) return;
	for(let word of results) {
		const newLI = document.createElement('li');
		newLI.innerText = word;
		suggestions.appendChild(newLI);
	}
}

//populates search bar with suggestion
function useSuggestion(e) {
	const lowerCase = e.target.tagName.toLowerCase();
	if(lowerCase === 'li') {
		input.value = e.target.innerHTML;
		for (let i = 0; i < allLIs.length; i) {
			allLIs[0].remove();
		}
	}
}

//Calls searchHandler after a new key is pressed
input.addEventListener('keyup', searchHandler);

//when clicking on suggested search element, return clicked suggestion to search bar via useSuggestion function
suggestions.addEventListener('click', useSuggestion);