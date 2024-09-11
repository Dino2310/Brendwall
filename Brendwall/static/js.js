function formLern(e){e.preventDefault()}

function init() {
    $.ajax({
        url: '/getProd',
        type: "GET",
        data: {},

        success: function (data) {
            $('#table').html(data['content']['products'])
        },
        error: function (s) {
            console.log('err')
        }
    })
    


}

function setProd() {   
    let form = new FormData()
    form.append('name', $('#name').val())
    form.append('price', $('#price').val())
    $.ajax({
        

        url: '/setProd/',
        type: "POST",
        cache: false,
        contentType: false,
        processData: false,
        data: form,
        dataType : 'json',

        success: function (data) {
            $('#table').html(data['content']['products'])  
        },
        error: function (s) {
            console.log('err')
        }

    })
    $('#name').val('')
    $('#price').val('')
    $('#send').attr("disabled" , true)  
}

function check_input(){
    $('#send').attr("disabled" , !($('#name').val() && parseFloat($('#price').val())>0))   
}

$('#name').on('input', check_input)
$('#price').on('input', check_input)

init()