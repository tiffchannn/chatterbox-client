var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //create our event listener here for $button
    RoomsView.$button.on('click', function() {
      Rooms.add();
      let roomName = window.prompt('Enter Your Desired Room Name: ');
      RoomsView.renderRoom(roomName);
    });

    RoomsView.$select.on('change', function(event) {
      let specificRoom = $(this).val();
      MessagesView.$chats.empty();
      //call render function
      RoomsView.render(specificRoom);
    });
  },
  renderRoom: function(roomName) {
    //input = string (room name)
    //output = add a roomname to our Dropdown bar (<option>roomName</option>)
    //create a variable for our roomname
    let $roomName = $(`<option>${roomName}</option>`);
    //$select append
    RoomsView.$select.append($roomName);
  },

  render: function(specificRoomName) {
    //iterate over Messages.results
    //if Messages.results[i].roomname === specificRoom
    for (let i = 0; i < Messages.results.length; i++) {
      let specRoom = Messages.results[i].roomname;
      if (specRoom === specificRoomName) {
        MessagesView.renderMessage(Messages.results[i]);
      }
    }
  }
};
