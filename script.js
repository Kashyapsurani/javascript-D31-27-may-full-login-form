function myfununction() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = "kashyap";
    let pass = "surani";
    if (username == user && password == pass) {
        location.replace("http://127.0.0.1:5500/welcome.html")
    } else if (username != user && password == pass) {
        Swal.fire({
            icon: "error",
            title: "your username is worng",
        });
    } else if (username == user && password != pass) {
        Swal.fire({
            icon: "error",
            title: "your password is worng",
        });
    }

}

// open in new tab 


// let url = "http://127.0.0.1:5500/welcome.html"
// window.open(url, '_blank');

