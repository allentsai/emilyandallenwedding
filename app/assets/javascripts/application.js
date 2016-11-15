// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require skrollr
//= require_tree .
//= stub footer

$(document).ready(function () {
    if ($(window).width() > 767) {
        skrollr.init(
            {
                mobileCheck: function() {
                    //hack - forces mobile version to be off
                    return false;
                }
            }
        );
    }

    // disable skrollr if the window is resized below 768px wide
    $(window).on('resize', function () {
        if ($(window).width() <= 767) {
            skrollr.init().destroy(); // skrollr.init() returns the singleton created above
        }
    });
});
