var myIndex3 = 0;       // Set initial index to 0
TableTennis();          // Call the TableTennis function

// Define TableTennis function
function TableTennis() {
    var ii;                 // Declare variable ii
    var xx = document.getElementsByClassName("content-image3");         // Get all elements with class "content-image3" and store in variable xx
    for (ii = 0; ii < xx.length; ii++) {                                // Hide all elements with class "content-image3"
        xx[ii].style.display = "none";
    }
    myIndex3++;                                                         // Increment index by 1
    if (myIndex3 > xx.length) { myIndex3 = 1 }                          // If index is greater than length of array, reset to 1
    xx[myIndex3 - 1].style.display = "flex";                            // Show element at index (myIndex3 - 1)
    setTimeout(TableTennis, 3000);                                      // Call TableTennis function again after 3 seconds
}

var myIndex = 0;                                                        // Set initial index to 0
TableTennisPlay();                                                      // Call the TableTennisPlay function

// Define TableTennisPlay function
function TableTennisPlay() {
    var i;                                                              // Declare variable i
    var x = document.getElementsByClassName("content-image");           // Get all elements with class "content-image" and store in variable x
    for (i = 0; i < x.length; i++) {                                    // Hide all elements with class "content-image"
        x[i].style.display = "none";
    }
    myIndex++;                                                          // Increment index by 1
    if (myIndex > x.length) { myIndex = 1 }                             // If index is greater than length of array, reset to 1
    x[myIndex - 1].style.display = "flex";                              // Show element at index (myIndex - 1)

    setTimeout(TableTennisPlay, 3000);                                  // Call TableTennisPlay function again after 3 seconds

}
