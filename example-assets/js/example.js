/**
 * Created by Deepak on 11/6/2016.
 */
;
(function ($) {

	var body = $("body");
	body.append('<link href="example-assets/css/prism.css" rel="stylesheet" type="text/css">');
	body.append('<script async src="example-assets/js/prism.js"></script>');

	var menuList = {
		"DOCUMENTATION": {
			"Getting started": "documentation.html#",
			"jQuery Flipbook Options" : "documentation.html#options"
		},
		"EXAMPLES ( basic )": {
			"Basic Flipbook - Jquery": "example-basic-flipbook.html",
			"(HTML) Light-boxes": "example-lightbox-html.html"
			//"Light-boxes : extended": "html_lightbox_button.html"
		},
		"EXAMPLES extended": {
			"Custom outline (image flipbook)": "example-custom-outline-image.html",
			"Custom Hotspots (full transparent)": "example-custom-hotspots.html",
			"PDF outline": "example-pdf-outline.html",
			"Translation": "example-translate.html",
			//"RequireJs Usage(buggy)": "example-requirejs-usage.html",
			"Controls Customization": "example-custom-controls-position.html",	"Custom Location of Files": "example-custom-locations-of-files.html"

		},
		"DEMOS ( advanced )": {
			//"Intro : Read this": "demos intro.html",
			"Lightbox (Similar to Live Demo)": "demo_advanced-lightbox.html",
			"Full Height (max Window height)": "demo-fullheight.html",
			"Open PDF File": "demo-open-file.html",
			"Flickr Album Experimental (CORS)": "demo-flickr-experimental.html"
			//"photography": ""
		}

	};


	body.addClass("has-example-menu");

	if (window.location.href.indexOf("http") !== 0) {
		var hostWarning = $('<div id="host-warning">')
			.html("You are running this code in File system directly and may not work properly. Host this code in localhost or a server for best results.");
		body.append(hostWarning).addClass("host-warning");
	}
	var menuDiv = $('<div id="example-menu" class="collapsed"></div>').appendTo(body);

	var hamburger = $('<a id="hamburger" href="#">').on('click', function (e) {
		menuDiv.toggleClass("collapsed");
		e.preventDefault();
	}).html('<span></span><span></span><span></span>').appendTo(menuDiv);

	var viewSourceButton = $('<a>', {
		id: "button",
		href: 'view-source:' + location.href
	}).html('View Current Source');

//exampleMenu.append(viewSourceButton);

	var exampleHeader = $('<h1 class="example-menu-header"><a href="index.html">DFlip</a> / examples</h1>').appendTo(menuDiv);
	var debugInfo = $('<div class="debug-info">').appendTo(menuDiv);
	var menuListDiv = $('<div id="example-menu-content"></div>').appendTo(menuDiv);

	var currentFile = window.location.href.split(".html")[0].split("/").splice(-1)[0];

	for (var key in menuList) {

		var section = menuList[key];

		var header = $('<h2 class="example-menu-category">').html(key);
		menuListDiv.append(header);

		for (var menu in section) {
			var menuFile = section[menu];
			var menuLink = $('<a>', {
				class: 'example-menu-link' + (menuFile == currentFile ? " active-example" : "" ),
				href: menuFile
			}).html(menu);
			menuListDiv.append(menuLink);

		}

	}

})(jQuery);
