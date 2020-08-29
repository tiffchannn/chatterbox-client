var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

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
