$( document ).ready(function() {

    // Keep menu button's background color
    $(".navbar-toggle").css("background-color","transparent");

    // For "Ready to Win"" title in the mobile view and I had to use jquery css to overwrite styling
    $(".navbar-brand").css({
        "color": "#fff",
        "font-size": "26px",
        "line-height": "24px"
    });

    // Brings back to the top of the page when to the top link or Ready To Win is clicked
    $('#toTheTop, .navbar-brand').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 1000);
        return false;
    });

    /* Hide side buttons initially */
    $("#floating-buttons").css("display","none");

    /* Detect scroll action and hide side buttons until scrolled down using z-index */
    $(window).scroll(function() {

        /* find how much is being scrolled down  */
        var currentHeight = $(window).scrollTop();

        /* once scrolled down enough, display side buttons and hide them when scrolled up using z-index */
        if(currentHeight > 600) {
            $("#floating-buttons").css("display","block");
            $("#floating-buttons").css("z-index","9999999");
        }else {
            $("#floating-buttons").css("display","none");
            $("#floating-buttons").css("z-index","999");
        }
    });
});