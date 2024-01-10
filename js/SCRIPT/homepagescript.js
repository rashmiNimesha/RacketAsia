mainLine = document.querySelector(".mainLine");     // Select the first HTML element with the class "mainLine"
mainLine.onclick = function () {                    // Add an onclick event listener to the "mainLine" element
    navBar = document.querySelector("nav");         // Select the first <nav> element on the page
    navBar.classList.toggle("active");              // Toggle the "active" class on the <nav> element
}