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
  },
  renderRoom: function(roomName) {
    //input = string (room name)
    //output = add a roomname to our Dropdown bar (<option>roomName</option>)
    //create a variable for our roomname
    let $roomName = $(`<option>${roomName}</option>`);
    //$select append
    RoomsView.$select.append($roomName);
  }
};
