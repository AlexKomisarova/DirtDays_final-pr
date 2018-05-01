$(document).ready(function() {
    $("body").css("opacity", "1");
});
$(".btn").click(function() {
    var text = $("#name").val();
    var mail = $("#mail").val();
    if (text === "" || mail === "") {
        alert("We need this information");
    } else {
        localStorage.setItem("name", text);
        localStorage.setItem("email", mail);
    }
});