

    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const body =document.querySelector("body");
    

    

    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
