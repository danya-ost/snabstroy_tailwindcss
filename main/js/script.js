let doc = $(document);

// The function of calculating the indentation of the main block
let app__main_padding_top = (function() {

    function main_pt(){
        let __header_h = $('header').height();
        $('main').css('padding-top', __header_h);
        $('.adapt-nav').css('padding-top', __header_h);
    }

    function init(){
        $(window).resize(function () { 
            main_pt();
        });
        $(document).ready(function () {
            main_pt();
        });
    }

    return {
        init: init
    }

})();

// The manages function a owl-slider in index page
let app__owl_main = (function() {

    function owl_main( __owl_block ){
        __owl_block.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            dots: false,
            dotsEach: 1,
            dotsContainer: '#dots-owl-main',
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });

        $('#prev-owl-main').on('click', function(){
            __owl_block.trigger("prev.owl.carousel");
        });

        $('#next-owl-main').on('click', function(){
            __owl_block.trigger("next.owl.carousel");
        });

        $('.owl-dot').click(function () {
            __owl_block.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
    }

    function owl_load( __index_owl ){
        let __dots_canvas = $('#dots-owl-main');
        __dots_canvas.html('');
        for( let i = 0; i < __index_owl; i++ ){
            __dots_canvas.append('<button class="owl-dot h-4 w-4 bg-white border-2 border-white border-solid rounded-full mx-1"></button>');
        }
    }

    function init(){
        __owl_block = $('.owl-carousel-main');
        let __index_owl = __owl_block.index();
        owl_load( __index_owl );
        owl_main( __owl_block );
    }

    return {
        init: init
    }

})();

// The manages function a owl-slider "sale" in index page
let app__owl_sale = (function() {

    function owl_main( __owl_block ){
        __owl_block.owlCarousel({
            responsive:{
                0:{
                    items: 2,
                    margin: 20,
                    autoplayTimeout:6000,
                },
                990:{
                    items: 3,
                    margin: 20,
                    autoplayTimeout:6000,
                },
                1200:{
                    items: 4,
                    margin: 20,
                    autoplayTimeout:5000,
                },
                1350:{
                    items: 5,
                    margin: 20,
                    autoplayTimeout:5000,
                },
                1550:{
                    items: 6,
                    margin: 30,
                    autoplayTimeout:5000,
                }
            },
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });

        $('#prev-owl-sale').on('click', function(){
            __owl_block.trigger("prev.owl.carousel");
        });

        $('#next-owl-sale').on('click', function(){
            __owl_block.trigger("next.owl.carousel");
        });
    }

    function init(){
        __owl_block = $('.owl-carousel-sale');
        owl_main( __owl_block );
    }

    return {
        init: init
    }

})();

// The manages function a owl-slider "image-product" in index page
let app__owl_product = (function() {

    function owl_product( __owl_block ){
        __owl_block.owlCarousel({
            responsive:{
                0:{
                    margin: 10,
                    items: 4,
                },
                450:{
                    margin: 10,
                    items: 5,
                },
                670:{
                    margin: 30,
                    items: 4,
                }
            },
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            center: false,
            dots: false,
        });

        // $('#prev-owl-sale').on('click', function(){
        //     __owl_block.trigger("prev.owl.carousel");
        // });

        // $('#next-owl-sale').on('click', function(){
        //     __owl_block.trigger("next.owl.carousel");
        // });
    }

    function init(){
        __owl_block = $('.owl-carousel-product');
        owl_product( __owl_block );
    }

    return {
        init: init
    }

})();

// Navbar
let app__navbar = (function() {

    function adapt_nav_open( __adpt_nav ){
        __adpt_nav.removeClass('-translate-y-full');
        $('body').css('overflow-y', 'hidden');
    }

    function adapt_nav_close( __adpt_nav ){
        __adpt_nav.addClass('-translate-y-full');
        $('body').css('overflow-y', 'scroll');
    }

    function init(){
        let __adpt_nav = $('.adapt-nav');
        $('.adapt_menu_btn').on('click', function(){
            let __this = $(this);
            let __status = __this.attr('snabstroy-status');
            if( __status == 0 ){
                adapt_nav_open( __adpt_nav );
                __this.attr('snabstroy-status', '1');
                $('.adapt_menu_btn > .menu_open').addClass('hidden');
                $('.adapt_menu_btn > .menu_close').removeClass('hidden');
            } else{
                adapt_nav_close( __adpt_nav );
                __this.attr('snabstroy-status', '0');
                $('.adapt_menu_btn > .menu_open').removeClass('hidden');
                $('.adapt_menu_btn > .menu_close').addClass('hidden');
            }
        });
    }

    return {
        init: init
    }

})();

// Notification
let app__notification = (function() {

    function notification_close(){
        $('.static-example-notifiction').each( function(){ 
            $(this).addClass('translate-y-[150%]');
        });
    }

    function init(){
        $('.btn-colse-notification').on('click', function(){
                console.log('click');
                notification_close();
        });
    }

    return {
        init: init
    }

})();

// The manages function a owl-slider "parners" in index page
let app__owl_parners = (function() {

    function owl_parners( __owl_block ){
        __owl_block.owlCarousel({
            responsive:{
                0:{
                    items: 2,
                    margin: 20,
                    autoplayTimeout:6000,
                },
                990:{
                    items: 3,
                    margin: 20,
                    autoplayTimeout:6000,
                },
                1200:{
                    items: 4,
                    margin: 20,
                    autoplayTimeout:5000,
                },
                1350:{
                    items: 5,
                    margin: 20,
                    autoplayTimeout:5000,
                },
                1550:{
                    items: 6,
                    margin: 30,
                    autoplayTimeout:5000,
                }
            },
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true
        });

        $('#prev-owl-partners').on('click', function(){
            __owl_block.trigger("prev.owl.carousel");
        });

        $('#next-owl-partners').on('click', function(){
            __owl_block.trigger("next.owl.carousel");
        });
    }

    function init(){
        __owl_block = $('.owl-carousel-partners');
        owl_parners( __owl_block );
    }

    return {
        init: init
    }

})();

// The manages function a owl-slider "services" in index page
let app__owl_services = (function() {

    function owl_services( __owl_block ){
        __owl_block.owlCarousel({
            responsive:{
                0:{
                    items: 1,
                    margin: 0,
                    autoplayTimeout:6000,
                },
                1024:{
                    items: 2,
                    margin: 36,
                    autoplayTimeout:5000,
                }
            },
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true
        });

        $('#prev-owl-services').on('click', function(){
            __owl_block.trigger("prev.owl.carousel");
        });

        $('#next-owl-services').on('click', function(){
            __owl_block.trigger("next.owl.carousel");
        });
    }

    function init(){
        __owl_block = $('.owl-carousel-services');
        owl_services( __owl_block );
    }

    return {
        init: init
    }

})();

// Product imge item
let app__product_image = (function() {

    function prodcut_image( __src ){
        $('div[snabstroy-name="img-main-item"]').removeAttr('style').css('background-image', 'url(\''+__src+'\')');
    }

    function init(){
        $('.img-item').on('click', function(){
            let __src = $(this).attr('snabstroy-src');
            prodcut_image( __src );
        });
    }

    return {
        init: init
    }

})();

doc.ready(app__main_padding_top.init);
doc.ready(app__owl_main.init);
doc.ready(app__owl_sale.init);
doc.ready(app__owl_product.init);
doc.ready(app__owl_parners.init);
doc.ready(app__owl_services.init);
doc.ready(app__navbar.init);
doc.ready(app__notification.init);
doc.ready(app__product_image.init);