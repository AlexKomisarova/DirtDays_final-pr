$(document).ready(function() {
    $("body").css("opacity", "1");
});
$(".manybikes .add").click(function(event) {
    var $figure = $(event.target).closest("figure");
    var bike = {
        name: $figure.find(".name").text(),
        price: $figure.find(".price").text(),
        dollar: $figure.find(".dollar").text()
    };
    addBike(bike);
});
$(".chosen").click(function(event) {
    var $target = $(event.target);
    if ($target.is(".del>button")) {
        $target.closest("tr").remove();
    }
    sum();
    if ($(".rented > tbody > tr").length === 0) {
        $(".chosen").addClass("empty");
    }
});
function addBike(bike) {
    $(".chosen").removeClass("empty");
    $(".rented>tbody")
        .append(
            "<tr>" +
            '<td class="name">' +
            bike.name +
            "</td>" +
            '<td class="price">' +
            bike.price +
            "</td>" +
            '<td class="dollar">' +
            bike.dollar +
            "</td>" +
            '<td class="del"><button type="button">Delete</button></td>' +
            "<tr>"
        )
        .css("fontSize", "xx-small");
    sum();
}
function sum() {
    var total = 0;
    $(".rented > tbody > tr").each(function(i, tr) {
        var price = $(tr)
            .find(".price")
            .text();
        total += +price;
    });
    $(".rented .sum")
        .text(total + "$ per day")
        .css("padding", "10px");
}
