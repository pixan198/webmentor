const fetchProgrammingQuotesResponseObject = () => {
    fetch ('https://programming-quotes-api.herokuapp.com/quotes/random')
        .then (response => {
            console.log (response);
        })
}

const fetchProgrammingQuotes = () => {
    fetch ('https://programming-quotes-api.herokuapp.com/quotes/random')
        .then (response => response.json())
        .then (data => {
            console.log (data);
            const response = document.getElementById('response');
            const quoteElement = document.createElement ('p');
            quoteElement.appendChild(document.createTextNode(data.en));
            response.appendChild(quoteElement);

            const authorElement = document.createElement ('p');
            authorElement.appendChild(document.createTextNode(`- ${data.author}`));
            response.appendChild(authorElement);
        })
}

fetchProgrammingQuotes();