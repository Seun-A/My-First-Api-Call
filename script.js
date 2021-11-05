let content = document.getElementById('content')

function fetchFromAPI(url, callback) {
    var obj; 
    fetch(url)
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => callback(obj))
}

fetchFromAPI('https://jsonplaceholder.typicode.com/posts', setInTable)

function setInTable(arrOfObjs) {
    arrOfObjs.forEach((x) => {
        content.innerHTML += 
        `
            <tr>
                <td>${x.id}</td>
                <td>${x.userId}</td>
                <td>${x.title}</td>
                <td>${x.body}</td>
            </tr>
        `
    })
}
