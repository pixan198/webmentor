axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(function (resp) {
        var data = resp.data;
        const response = document.getElementById('response');
        const quoteElement = document.createElement ('p');
        quoteElement.appendChild(document.createTextNode(data.en));
        response.appendChild(quoteElement);

        const authorElement = document.createElement ('p');
        authorElement.appendChild(document.createTextNode(`- ${data.author}`));
        response.appendChild(authorElement);
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });