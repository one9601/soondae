$(document).ready(function(){
    $('.a').click(function(){
        $('.menuBtn').toggleClass('active');
    });
 });
$(document).ready(function(){
        $('.a').click(function(){
            if ( document.body.clientWidth <= 1264) { 
            $(".menuNav").hide();
        }
    });
});
                

// 서브메뉴 하나씩
jQuery(document).ready(function(){
    jQuery(".menuBtn").click(function(){
        jQuery(".menuNav").slideToggle();
    });
});
jQuery(document).ready(function(){
    jQuery(".submenu-title-1").click(function(){
        jQuery(".submenu_box-1").slideToggle();
    });
});
jQuery(document).ready(function(){
    jQuery(".submenu-title-2").click(function(){
        jQuery(".submenu_box-2").slideToggle();
    });
});
jQuery(document).ready(function(){
    jQuery(".submenu-title-3").click(function(){
        jQuery(".submenu_box-3").slideToggle();
    });
});
jQuery(document).ready(function(){
    jQuery(".submenu-title-4").click(function(){
        jQuery(".submenu_box-4").slideToggle();
    });
});
jQuery(document).ready(function(){
    jQuery(".submenu-title-5").click(function(){
        jQuery(".submenu_box-5").slideToggle();
    });
});