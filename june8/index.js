function search(){
    var key = document.getElementById("search_input").value;
    if(key == ""){
        alert("Insert an input key")
    }
    else{
        window.open(`https://www.google.com/search?q=${key}`);
    }
}