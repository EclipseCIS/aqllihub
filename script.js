"use strict"

let mode = document.getElementById("mode_changer")

mode.addEventListener("click", function() {
    let navbar = document.getElementById("navbarmenu");
    if (navbar.getAttribute("data-bs-theme") == "dark") {
        navbar.setAttribute("data-bs-theme", "light")
    

    }else {
        navbar.setAttribute("data-bs-theme", "dark")
    }
    document.addEventListener("DOMContentLoaded", function() {
        const content = document.getElementById("singuptext");
        const toggleButton = document.getElementById("mode");
    
        toggleButton.addEventListener("click", function() {
            content.classList.toggle("light");
        });
    });
    
    document.querySelectorAll(".card").forEach(function(card) {
        console.log(card)
        if (card.getAttribute("data-bs-theme") == "dark") {
            card.setAttribute("data-bs-theme", "light")
    
        }else {
            card.setAttribute("data-bs-theme", "dark")
        }
    })
    document.body.classList.toggle("dark")
    let pagination = document.getElementById("paginationnav");
    if(pagination!= null)
{   
    if (pagination.getAttribute("data-bs-theme") == "dark") {
        pagination.setAttribute("data-bs-theme", "light")

    }else {
        pagination.setAttribute("data-bs-theme", "dark")
    }
}
    let accordion = document.getElementById("accordionExample");
    
    if (accordion.getAttribute("data-bs-theme") == "dark") {
        accordion.setAttribute("data-bs-theme", "light")

    }else {
        accordion.setAttribute("data-bs-theme", "dark")
    }

    
    // document.addEventListener("DOMContentLoaded", function() {
    //     const content = document.getElementById("profile1");
    //     toggleButton.addEventListener("click", function() {
    //         content.classList.toggle("light");
    //     });
    // });


    // if (navbar.getAttribute("data-bs-theme" == "dark")) {
    //     profile.setAttribute("data-bs-theme", "blue")
    // }
    document.addEventListener("DOMContetLoaded", function() {
        const content = document.getElementById("profile1");
        const toggleButton = document.getElementById("mode");
    
        toggleButton.addEventListener("click", function() {
            content.classList.toggle("dark-mode");
        });
    });


    document.addEventListener("DOMContentLoaded", function() {
        const savol = document.getElementById("fw-bold");
        const toggleButton = document.getElementById("mode");
    
        toggleButton.addEventListener("click", function() {
            savol.classList.toggle("dark-mode");
        });
    });
    
    








    
})