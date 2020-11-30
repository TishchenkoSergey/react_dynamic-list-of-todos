$('#carousel1, #carousel1b, #carousel1c').owlCarousel({
    margin:30,
    autoplay:false,
    dots: false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true,
    items:3,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            margin:10,
        },
        600:{
            margin:30,
        },
        1000:{
            margin:30,
        }
    }
});
$('#carousel10, #carousel10b').owlCarousel({
    margin:30,
    autoplay:false,
    dots: false,
    // mouseDrag: false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
        }
    }
});
$('#carousel9, #carousel8, #carousel7, #carousel6, #carousel5, #carousel4, #carousel3, #carousel2').owlCarousel({
    margin:30,
    autoplay:false,
    dots: false,
    // mouseDrag: false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            margin:10,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
});





// $('.drop-opening').hide(); 
// $('.open-drop').click(function(){
//     $('.drop-opening').slideToggle('slow');     
// })('.drop-opening').click(function (event) {
//     event.stopPropagation();
// });



// $('.drop-opening').hide(); 
// $('.open-drop').click(function(){
//     event.preventDefault();
//     $('.drop-opening').slideToggle('slow');
// });

// $('.drop-opening2').hide(); 
// $('.open-drop2').click(function(){
//     event.preventDefault();
//     $('.drop-opening2').slideToggle('slow');
// });

// $(".popper2").click(function(){
//   $(".pop-content2").addClass("d-block");
// });

// $(".popper2-close").click(function(){
//   $(".pop-content2").removeClass("d-block");
// });





// Notification and user deopdown
var $contents = $('.user-menu');
$contents.hide();
$('.open-drop').click(function() {
  var $target = $('#' + this.id + 'show').slideToggle('slow');
  $contents.not($target).slideUp('slow');
});


// collapse in user my profile page
var $myGroup = $('.collapse-area');
$myGroup.on('show.bs.collapse','.collapse', function() {
$myGroup.find('.collapse.show').collapse('hide');
});



// Customize bootstrap popover
$('.popper').popover({
    container: 'body',
    html: true,
    sanitize: false,
    content: function () {
        return $(this).next('.pop-content').html();
    }
});

// popup inside addtoplaylist button on queue page
$(document).on("click", ".popper2", function() {
    $(".pop-content2").addClass("d-block");
});
$(document).on("click", ".popper2-close", function() {
    $(".pop-content2").removeClass("d-block");
});



// mobile search click
$( ".mobilesearch" ).click(function() {
$( ".src-mobile input" ).focus();
});






































