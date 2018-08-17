
var address;
var apikey = "AIzaSyATvFSKs1YEJMLy6w9qAIXKWgzoteNXrmg";

$("#nearByVetsBtn").on("click", function(event){
    event.preventDefault();
    address =  $("#addressInput").val();
    var vets = "Veterinarians Near" + address;
    var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + vets + "&key=" + apikey;
    console.log("queryURL = "+ queryURL);
    $("#google-map").attr("src", queryURL);
});

$("#getMapBtn").on("click", function(event){

    event.preventDefault();
    address =  $("#addressInput").val();
    var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + address + "&key=" + apikey;
    console.log("queryURL = "+ queryURL);
    $("#google-map").attr("src", queryURL);

});