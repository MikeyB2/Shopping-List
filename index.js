
//this is how to add the class shopping-item__checked when they select the check button
//also addClass('hidden') could be used for delete or remove() probably remove since it needs to be permanent removal
// function doHelloWorld() {
//   $('.js-hide-it').addClass('hidden');
//   $('.js-hello-world').text('hello world from JS');
// }
// doHelloWorld();

//use the fizz buzz code as example on how to add html

$(function(){
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  let newItem = $('.js-shopping-list-entry').val();
  $('.js-shopping-list-entry').val('');
  const results = []; 
        results.push($(
          `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`));  
    $(".shopping-list").append(results);
  });
  //remove the item on click of delete button.
   $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    //need to remove the li item.  hidden doesnt permanently delete it the item it has to be remove()
    $(this).closest('li').remove();
  });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    //check is the same idea as delete just different classes pointed to.  and need to switch/toggle the class to be the strike through class
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  
});
