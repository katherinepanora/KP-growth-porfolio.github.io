$(".project1open,.project2open,.project3open").hide();

$(".pbutton1").click(function() {
    $(".project1open").toggle();
});
$(".pbutton2").click(function() {
    $(".project2open").toggle();
});
$(".pbutton3").click(function() {
    $(".project3open").toggle();
});