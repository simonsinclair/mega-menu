// main.js
//

(function(w, $, undefined) {
  "use strict";

	var Menu = {

    init: function() {

      Menu.bindEvts();
    },

    bindEvts: function() {

      $("#js-primary-nav").on('click', 'a:not(#js-all-news)', Menu.onPrimaryNavClick);
      $("#js-all-news").on('click', Menu.onAllNewsClick);
    },

    onPrimaryNavClick: function(e) {
      e.preventDefault();

      if( ! $(this).parent().hasClass('active') ) {

        $("#js-primary-nav li").removeClass('active');
        $(this)
          .parent()
          .addClass('active');
      }
    },

    onAllNewsClick: function(e) {
      e.preventDefault();
    }
  };

	$(Menu.init);
})(this, jQuery);
