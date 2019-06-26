$( document ).ready(function() {

  /* Function for filter accordion start */
  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    };
    
    var accordion = new Accordion($('.accordion_menu'), false);
  });
  /* Function for filter accordion end */


  
  /* Slick slider settings start */

  $('.section_similar_goods__wrapepr').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    mobileFirst: true,
    nextArrow: $('#nextSlide'),
    prevArrow: $('#prevSlide'),
    appendDots: $('#customDots'),
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          centerMode: true,
          variableWidth: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* Slick slider settings end */


});