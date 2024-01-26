document.getElementById("saveForm").addEventListener("click", function(e){
    e.preventDefault();
    var obj = {
        title:document.getElementById("titleText").value,
        body:document.getElementById("bodyText").value,
        userid:document.getElementById("userid").value,
    }
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-type':'application/json; charset=UTF-8',
        }
    }).then((response) => response.json())
    .then((json) => console.log(json))
})
