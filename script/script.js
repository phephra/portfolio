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
