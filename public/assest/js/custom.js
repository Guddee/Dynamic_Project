

// Tab and images popup
    $('.di').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      }
    });

    $('.sh').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      }
    });


var gallery = $('.gallery-masonry');
var category = '.item';
function filterIsotope( filter ) {
    var filter = filter || '*';
    gallery.isotope({
        filter: filter,
    });
}

var lightbox = $('.gallery-masonry');
function lightboxFilter( filter ) {
    var filter = filter || '*';
    lightbox.magnificPopup({
        delegate: filter+'>a',
        type: 'image',
        gallery: {
            enabled: true,
        }
    });
}

filterIsotope();
lightboxFilter();

gallery.imagesLoaded().progress(function() {
    filterIsotope();
});

$('[data-category]').on('click', function() {
    var category = $(this).data('category');
    filterIsotope( category );
    lightboxFilter( category );
    $(".gallery-item-filter span").removeClass("active");
    $(this).addClass("active");  
});

$('.popup-ajax').magnificPopup({
    type: 'ajax', 
    closeOnBgClick: false,
    callbacks: {
        beforeOpen: function() {
            jQuery('body').css('overflow-y', 'hidden');
            jQuery('body').css('position', 'fixed');
        },
        beforeClose: function() {
            jQuery('body').css('overflow-y', 'auto');
            jQuery('body').css('position', 'relative');
        }
    }
});
 let id;
$('[data-target][data-toggle=modal]').on('click', function() {
    id = $(this).attr('data-target');
    $('.modal #exampleModalCenter').attr('id', id).modal('show');
});



window.$zopim || (function(g, a) {
    var f = $zopim = function(d) {
            f._.push(d)
        },
        b = f.s = g.createElement(a),
        c = g.getElementsByTagName(a)[0];
    f.set = function(d) {
        f.set._.push(d)
    };
    f._ = [];
    f.set._ = [];
    b.async = !0;
    b.setAttribute("charset", "utf-8");
    b.src = "//v2.zopim.com/?2F4uasrDz8AwB7cxrCz3igHZtZovK0w4";
    f.t = +new Date;
    b.type = "text/javascript";
    c.parentNode.insertBefore(b, c)
})(document, "script");
$zopim(function() {
    $zopim.livechat.button.setOffsetVerticalMobile(55);
    $zopim.livechat.button.setOffsetHorizontalMobile(10)
})

