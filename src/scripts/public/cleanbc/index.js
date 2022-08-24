/**
 * General CleanBC DOM manipulation.
 */
const domReady = () => {
	/*
	 * SafarIE bug requires 0ms timeout.
	 */
	setTimeout(function() {
		if ('cleanbc' === window.site.siteName) {
			document.querySelector('body').classList.add(window.site.siteName);
		}
	}, 0);
};

if ('complete' === document.readyState) {
	domReady();
} else {
	document.addEventListener('DOMContentLoaded', domReady);
}