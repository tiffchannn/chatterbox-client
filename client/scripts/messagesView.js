var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $.getJSON(Parse.server, function(data) {
      //when chatterbox is run
      //iterate over the data.results
      for (let i = 0; i < data.results.length; i++) {
      //first add all the text to Messages obj (make sure key is their username)
        let userName = data.results[i].username;
        let text = data.results[i].text;
        //check inside Messages.userName and see if its defined
        if (Messages[userName]) {
          //if it is defined then Messages.userName.push(text)
          Messages[userName].push(text);
        } else {
          Messages[userName] = [text];
        }
        let $messages = $(`<div class="message"><span><a href="#" class="userName">${userName}:</a> ${text}</span></div>`);
        MessagesView.$chats.append($messages);
      }
    });
  },
  renderMessage: function(message) {
    //create a userName
    let userName = message.username;
    //create a text
    var text = message.text;
    //create a $message
    var $message = $(`<div class="message"><span><a href="#" class="userName">${userName}:</a> ${text}</span></div>`);
    //append it to the chats div
    MessagesView.$chats.append($message);
  },

  // render all messages
  render: function() {

  }
};

//this one renders all the messages.
