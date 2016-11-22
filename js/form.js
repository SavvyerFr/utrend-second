$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/fokshei.d@gemail.com", 
            method: "POST",
            data: {
                name: $('name').val()
            },
            dataType: "json"
        })
        .done(function(){
            $('form').html('Ми скоро звяжемося з тобою!');
        }) 
        .fail(function() {
            $('form').html('Таблиця була заповнена невірно');
        });
    });	
});// JavaScript Document