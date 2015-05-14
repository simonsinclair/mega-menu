// main.js
//

(function(w, $, undefined) {
  "use strict";

	var Menu = {

    init: function() {

      Menu.bindEvts();
    },

    bindEvts: function() {

      $("#js-primary-nav").on('click', 'a', Menu.onPrimaryNavClick);
    },

    onPrimaryNavClick: function(e) {
      e.preventDefault();

      $("#js-primary-nav li").removeClass('active');
      $(this)
        .parent()
        .addClass('active');
    }
  };

	$(Menu.init);
})(this, jQuery);
