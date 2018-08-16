
var address;

$("#nearByVetsBtn").on("click", function(event){

    event.preventDefault();
    var apikey = "AIzaSyATvFSKs1YEJMLy6w9qAIXKWgzoteNXrmg";
    //var address = "19750 Auburn Dr, Cupertino, CA";

    var vets = "Veterinarians Near" + address;
    console.log("vets = "+ vets);

    var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + vets + "&key=" + apikey;
    console.log("queryURL = "+ queryURL);

    $("#google-map").attr("src", queryURL);


});

$("#getMapBtn").on("click", function(event){

    event.preventDefault();
    var apikey = "AIzaSyATvFSKs1YEJMLy6w9qAIXKWgzoteNXrmg";
    address =  $("#addressInput").val();
    console.log("vets = "+ address);

    var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + address + "&key=" + apikey;
    console.log("queryURL = "+ queryURL);

    $("#google-map").attr("src", queryURL);


});