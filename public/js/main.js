//page loads: Check state
console.log('page loads check state', state)
checkStateAndRender();
//Events
//seeUsersEvent
$('.see-users').click(seeUsersEvent);
//username value event
$form.submit(function( event ) {
    // event.preventDefault();
    $('#username').val($('#username').val());
    $('#email').val($('#email').val());
    

  });





