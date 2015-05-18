// main.js
//

(function(w, $, undefined) {
  "use strict";

	var Menu = {

    open: false,

    init: function() {
      Menu.bindEvts();
    },

    bindEvts: function() {
      $("#js-primary-nav").on('click', 'a:not(#js-all-news)', Menu.onPrimaryLinkClick);
      $("#js-all-news").on('click', Menu.toggleMegaMenu);
    },

    onPrimaryLinkClick: function(e) {
      e.preventDefault();

      // If the clicked link isn't 'active'
      if( ! $(this).parent().hasClass('active') ) {

        // Remove .active from all li's...
        $("#js-primary-nav li").removeClass('active');

        // ...and add it to the clicked link
        $(this)
          .parent()
          .addClass('active');
      }
    },

    toggleMegaMenu: function(e) {
      e.preventDefault();

      if(Menu.open) {
        $('#js-mega-nav').removeClass('mega-nav--open');
        $('#js-primary-nav').removeClass('primary-nav--blend');
        Menu.fadePrimaryNavItemsIn( 23 );
      } else {
        $('#js-mega-nav').addClass('mega-nav--open');
        $('#js-primary-nav').addClass('primary-nav--blend');
        Menu.fadePrimaryNavItemsOut( 23 );
      }

      Menu.open = !Menu.open;
    },

    fadePrimaryNavItemsOut: function(delay) {
      var $itemsOut = $('#js-primary-nav a:not(#js-all-news)');
      var $itemsIn  = $('#js-upper-primary a');
      var currIteration = 0;

      // TURD
      var fade = function() {
        if( currIteration !== $itemsOut.length ) {

          var currElemOut = $itemsOut[currIteration];
          var currElemIn  = $itemsIn[currIteration];

          $(currElemOut).css('opacity', 0);
          $(currElemIn).css('opacity', 1);

          setTimeout(fade, delay);
          currIteration++;
        }
      };
      fade();
    },

    fadePrimaryNavItemsIn: function(delay) {
      var $itemsOut = $('#js-upper-primary a');
      var $itemsIn  = $('#js-primary-nav a:not(#js-all-news)');
      var currIteration = 0;

      // TURD
      var fade = function() {
        if( currIteration !== $itemsIn.length ) {

          var currElemOut = $itemsOut[currIteration];
          var currElemIn  = $itemsIn[currIteration];

          $(currElemOut).css('opacity', 0);
          $(currElemIn).css('opacity', 1);

          setTimeout(fade, delay);
          currIteration++;
        }
      };
      fade();
    }
  };

	$(Menu.init);
})(this, jQuery);
