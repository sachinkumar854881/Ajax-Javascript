function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
            // document.getElementById("demo").innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status ==404){
            document.getElementById("demo").innerHtml = "File not found !!!"
        }
    }
xhttp.open('GET',"https://jsonplaceholder.typicode.com/users",true)
xhttp.send()
}
