
function start() {
    alert("Welcome");

}

/*Post displays the required content and hides the others*/
function post(id) {
    var post = "post" + id;

    for (var i = 0; i < 5; i++) {
        if (id == i) {
            document.getElementById(post).style.display = 'inline-block';
        }
        else {
            document.getElementById("post" + i).style.display = 'none';
        }
    }
}