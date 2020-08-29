var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $.ajax( {
      url: Parse.server,
      contentType: 'application/json',
      type: 'GET',
      data: { order: '-createdAt' },
      success: function(data) {
        let uniqRooms = [];
        //when chatterbox is run
        //iterate over the data.results

        for (let i = 0; i < data.results.length; i++) {
          //first add all the text to Messages obj (make sure key is their username)
          let userName = data.results[i].username;
          let text = data.results[i].text;
          let roomName = data.results[i].roomname;
          if (!uniqRooms.includes(roomName)) {
            uniqRooms.push(roomName);
          }
          let $messages = $(`<div class="message"><span><a href="#" class="username">${userName}:</a> ${text}</span></div>`);
          MessagesView.$chats.append($messages);
        }
        for (let j = 0; j < uniqRooms.length; j++) {
          RoomsView.renderRoom(uniqRooms[j]);
        }
      }
    });

    //add event listener here for username
    MessagesView.$chats.on('click', 'a', function(event) {
      Friends.toggleStatus();
    });
  },

  renderMessage: function(message) {
    let userName = message.username;
    let text = message.text;
    // set $message to
    let $message = $(`<div class="message"><span><a href="#" class="username">${userName}:</a> ${text}</span></div>`);
    // adds message to messageView
    MessagesView.$chats.prepend($message);
  },


  render: function() {

  }
};

//this one renders all the messages.
