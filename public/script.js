$(document).ready(function(){
    $(".nav-bar").click(function(){
        $(".search-box").toggle();
        $("input[type='text']").focus();
    });
});