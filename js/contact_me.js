$(function () {
    $('#contactForm').on('submit', function (){
        $("#btnSubmit").attr("disabled", false);
        $('#success').html("<div class='alert alert-success'>");
        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
        $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
        $('#success > .alert-success')
            .append('</div>');
        
        // leave a time to send google form before reset the form
        setTimeout(function() {
            $('#contactForm').trigger("reset"); 
        }, 1000);
    })
})

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
