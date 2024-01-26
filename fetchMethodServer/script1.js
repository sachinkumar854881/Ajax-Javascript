function loadData(){
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
    .then((data) =>{
        console.log(data)
        for(var x in data){
            document.write(`${data[x].name} - ${data[x].email} - ${data[x].address.city}<br>`)
        }
    }).catch((error) => document.write("Error Can't fetch data"))
}