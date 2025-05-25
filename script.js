fetch('books.json')
    .then(response => response.json())
    .then(books => {
        const list = document.getElementById('books-list');
        books.forEach(book => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${book.image}" alt="${book.title}" width="150"/>
                <h2>${book.title}</h2>
                <p>Price: ${book.price}</p>
                <p>Stock: ${book.stock}</p>
                <p>Rating: ${book.rating}</p>
                <a href="${book.link}">More Info</a>
            `;
            list.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching books:', error));
