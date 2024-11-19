

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var body =document.querySelector("body");
    

    

    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
