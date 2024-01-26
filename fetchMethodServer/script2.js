function loadData(){
    fetch("student.json").then((response) => response.json())
    .then((data) => {
        console.log(data)
        for(var x in data){
            document.write(`${data[x].name} - ${data[x].age} - ${data[x].city}<br>`)
        }
    }).catch((error) => document.write("Error !!! can't fetch data"))
}
