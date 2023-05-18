//your code here
const bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'AC/DC'];

function sortBandNamesWithoutArticles(names) {
  const articles = ['a', 'an', 'the'];

  const sortedNames = names.sort((a, b) => {
    const nameA = removeArticles(a.toLowerCase());
    const nameB = removeArticles(b.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  return sortedNames;
}

function removeArticles(name) {
  const words = name.split(' ');
  const filteredWords = words.filter(word => !articles.includes(word));
  return filteredWords.join(' ');
}

const ulElement = document.querySelector('#bands');

sortBandNamesWithoutArticles(bandNames).forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

