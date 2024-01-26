var obj = {
    title:'sachin kumar',
    body:'human',
    userId:1,
};
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-type':'application/json;Charset=UTF-8', 
        },
    }).then((response) => response.json())
    .then((json) => console.log(json))
}
