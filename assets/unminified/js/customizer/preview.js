"use strict";

/**
 * This file adds some LIVE changes to WeCodeArt Framework Customizer
 * @author		Bican Marian Valeriu 
 * @author_url  https://www.wecodeart.com/
 * @package 	WeCodeArt Framework
 * @since 		1.0
 * @version 	3.6.0.7
 */
(function ($) {
  var api = wp.customize;
  api('blogname', function (value) {
    return value.bind(function (to) {
      return $('.site-title a').text(to);
    });
  });
  api('blogdescription', function (value) {
    return value.bind(function (to) {
      return $('.site-description').text(to);
    });
  });
  api('header-bar-container', function (value) {
    value.bind(function (to) {
      var el = $('#header-bar .container, #header-bar .container-fluid');
      if ('container-fluid' === to) el.addClass('container-fluid').removeClass('container');else el.addClass('container').removeClass('container-fluid');
    });
  });
  var contentContexts = ['blog'];
  contentContexts.forEach(function (context) {
    var apiOption = 'content-layout-container';
    if (context.length) apiOption = [apiOption, context].join('-');
    api(apiOption, function (value) {
      value.bind(function (to) {
        var el = $('.content .container, .content .container-fluid');
        if ('container-fluid' === to) el.addClass('container-fluid').removeClass('container');else el.addClass('container').removeClass('container-fluid');
      });
    });
  });
  api('footer-layout-container', function (value) {
    value.bind(function (to) {
      var el = $('.footer__widgets .container, .footer__widgets .container-fluid');
      if ('container-fluid' === to) el.addClass('container-fluid').removeClass('container');else el.addClass('container').removeClass('container-fluid');
    });
  });
  api('footer-copyright-text', function (value) {
    return value.bind(function (to) {
      return $('.attribution__copyright').text(to);
    });
  });
})(jQuery);
//# sourceMappingURL=preview.js.map
