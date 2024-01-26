function loadData(){
    fetch("json.txt").then((response) => {
        return response.text();
    }).then((data) => {
        // console.log(data)
        document.write(data)
    })
}
