$(document).ready(function() {
    $("body").css("opacity", "1");
});
$(".header").hover(function() {
    $(".guide").toggle(400);
});
var map;
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.0379, lng: -122.954 },
        zoom: 11
    });
}
$(".firstname").click(function() {
    $("#whistler").toggle(400);
    initMap(map);
});
$(".secondname").click(function() {
    $("#threelakes").toggle(400);
});
$(".thirdname").click(function() {
    $("#montefior").toggle(400);
});
$(".fourthname").click(function() {
    $("#hahnenkamm").toggle(400);
});