$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("jU8Coewco9JpSCbKOAlOhpjgjaZ8piG8HuUXoein", "DprEOeSj3pW0jTssXzbn0DxgcjkeNdcf8ePAyhvU");   
    var currentUser = Parse.User.Current();
    if (currentUser) {
    	// stay on page
    	alert("user is logged in!");
    	window.location = "login.html";
    }
    else {
    	alert("user not logged in");
    	window.location = "login.html";
    }
});