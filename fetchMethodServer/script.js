function loadData(){
    fetch("https://jsonplaceholder.typicode.com/users") .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => document.write("can't fetch data"))
}
