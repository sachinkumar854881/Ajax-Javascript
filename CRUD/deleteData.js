var obj = {
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1,
}
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
        body: JSON.stringify(obj),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    .then((json) => console.log(json));
}
