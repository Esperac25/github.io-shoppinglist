// creates function
$(function(){
    //prevent default
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      // assign newItem to value entered
      const newItem = ($(event.currentTarget).find(
          'input[name="shopping-list-entry"]').val());
     // create temp variable
      const results = `<li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
    // append results
      $('.shopping-list').append(results);
       
    });
    //on shopping list click item delete, remove closest items
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      event.stopPropagation();
      console.log(this.closest('li'));
      this.closest('li').remove();

    });
    //on shopping list item toggle, closest item checked.
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      event.stopPropagation();
      $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });
  
  });
