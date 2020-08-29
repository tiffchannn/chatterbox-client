var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //create an object for our message
    let message = {
      username: App.username,
      text: $('#message').val(),
      roomname: 'coooooolkidsonly'
    };
    //call our Parse.create(on our message)
    Parse.create(message);
    MessagesView.renderMessage(message);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};