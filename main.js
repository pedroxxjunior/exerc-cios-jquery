$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('input').val();
        const addlist = $(`<li>${nomeTarefa}</li>`)

        $(addlist).appendTo('ul')
        $('input').val('')
    })

    $('ul').on('click', 'li', function(e){
        e.preventDefault();
        $(this).toggleClass('add-linha')
    })
})