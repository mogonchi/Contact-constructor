// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}

// user interface logic
$(document).ready(function() {
    $('form#new-contact').submit(function(event) {
        event.preventDefault();
        let inputtedFirstName = $('input#new-first-name').val();
        let inputtedLastName = $('input#new-last-name').val();

        $('ul#contacts').append('<li><span class="contact">' + newContact.firstname + '</span></li>');
        $('input#new-first-name').val('');
        $('input#new-last-name').val('');

    });
})
$(".contact").last().click(function() {
    $('#show-contact').show();
    $('#show-contact h2').text(newContact.firstName);
    $('#.first-name').text(newContact.firstName);
    $('.last-name').text(newContact.lastName);
});