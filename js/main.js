var submit = $('#submit');
var button = $('.button');

 button.on('click', function() {
    var score = $(this).val();
    var message = $('.score');
    message.text(score);
 })

 submit.on('click', function() {
    event.preventDefault();
    $('.interactive-rating-component.-success').css({
        display: 'flex'
    })

    $('.interactive-rating-component.-normal').css({
        display: 'none'
    })
 })