$(function(){
  var items = [];
  $("#add-item").focus();
  
  // jQuery methods 
  
  $('#add-Frm').submit (function (event) {
      event.preventDefault();
      var newItem = $('#add-item').val();
      if (items.indexOf(newItem) >= 0) {
        alert("You already have " + newItem + " on your list!")
        $('#add-item').val("");
        // $('#add-item').focus();   // this doesn't work 
        document.getElementById("add-item").focus();
        return;
      }
      items.push(newItem);
      $('#add-item').val("");
      $('.js-container-area').append(
          '<div class="js-item-container">' +
          '<div class="js-item-name">' + newItem + '</div>' +
          '<div class="js-item-controls">' +
          '<input class="js-check-item" type="submit" value="check" />' +
          '<input class="js-delete-item" type="submit" value="delete" />' +
          '</div></div>'
        );
        document.getElementById("add-item").focus();
  });
  
  // Event Delegation - check parent for added <div>'s events
  
    $('.js-container-area').on('click', '.js-delete-item', function(event) {
        event.preventDefault();
        var item = $(this).closest('.js-item-container').text();
        var ndx = items.indexOf(item);
        if (ndx > -1) {
            items.splice(ndx, 1);
        }
        $(this).closest('.js-item-container').remove();
        
        document.getElementById("add-item").focus();
    });
    $('.js-container-area').on('click', '.js-check-item', function(event) {
        event.preventDefault();
        if ($(this).closest('.js-item-container').find('.js-item-name').is(".check-item")) {
            $(this).closest('.js-item-container').find('.js-item-name').removeClass("check-item");   
        }
        else {
          $(this).closest('.js-item-container').find('.js-item-name').addClass("check-item");
        document.getElementById("add-item").focus();
        }
    });
});

// placed inside .container-area 
// <div class="js-item-container">
//   <div class="js-item-name">milk</div>
//   <div class="js-item-controls">
//     <input class="js-check-item" type="submit" value="check" />
//     <input class="js-delete-item" type="submit" value="delete" />
//   </div>
// </div>