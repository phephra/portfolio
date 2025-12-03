    $(document).ready(function () {

        $(function () {
            $('body').removeClass('fade-out');
        });

        function removeit() {
            if ($(window).width() < 600) {
                $('.thumb-img-hover').remove();
            }
            if ($(window).width() < 600) {
                $('#myTopnav').remove();
            }
            if ($(window).width() > 600) {
                $('.mobile-nav').remove();
            }
        }
        $(function () {
            removeit();
        });
        // Initialize Masonry
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item-a',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            transitionDuration: '0.2s',
            stagger: '0.03s',
            horizontalOrder: true,
            percentPosition: true,
            fitWidth: true
        });
        // layout Masonry after each image loads
            $grid.imagesLoaded().progress( function() {
            $grid.masonry('layout');
        });       
    });

    function openNav() {
        document.getElementById("myNav").style.opacity = "1";
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.opacity = "0";
        document.getElementById("myNav").style.width = "0%";
    }

    window.onload = function () {
        document.getElementById('loading-mask').style.display = 'none';
    }

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {addSticky()};

    // Get the navbar
    var sidebar = document.getElementById("sidebar");
    console.log("F1 OK");

    // Get the offset position of the navbar
    var sticky = sidebar.offsetTop;
    console.log("F2 OK");

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function addSticky() {
        if (window.scrollY >= sticky) {
            sidebar.classList.add("sticky")
        } else {
            sidebar.classList.remove("sticky");
        }
    }


