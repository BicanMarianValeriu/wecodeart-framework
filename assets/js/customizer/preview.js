"use strict";!function(t){var n=wp.customize;n("blogname",function(n){n.bind(function(n){t(".site-title a").text(n)})}),n("blogdescription",function(n){n.bind(function(n){t(".site-description").text(n)})}),n("header-bar-container",function(n){n.bind(function(n){t("#header-bar .grid-container").toggleClass("fluid","grid-container fluid"==n)})}),n("content-layout-container",function(n){n.bind(function(n){t(".content .grid-container").toggleClass("fluid","grid-container fluid"==n)})}),n("footer-layout-container",function(n){n.bind(function(n){t(".footer__widgets .grid-container").toggleClass("fluid","grid-container fluid"==n)})}),n("footer-copyright-text",function(n){n.bind(function(n){t(".copyright").text(n)})})}(jQuery);