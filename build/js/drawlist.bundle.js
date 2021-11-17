(() => {
	var e = {
			954: () => {
				const e = document.querySelector('.button-top');
				e.addEventListener('click', () => {
					document.documentElement.clientHeight,
						window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
				}),
					window.addEventListener('scroll', function () {
						(scrollPos = document.documentElement.scrollTop),
							scrollPos > 30 ? (e.style.opacity = 1) : (e.style.opacity = 0);
					});
			},
			595: () => {
				console.log('hello!');
			},
		},
		o = {};
	function t(r) {
		var n = o[r];
		if (void 0 !== n) return n.exports;
		var l = (o[r] = { exports: {} });
		return e[r](l, l.exports, t), l.exports;
	}
	(t.n = (e) => {
		var o = e && e.__esModule ? () => e.default : () => e;
		return t.d(o, { a: o }), o;
	}),
		(t.d = (e, o) => {
			for (var r in o)
				t.o(o, r) &&
					!t.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: o[r] });
		}),
		(t.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
		(() => {
			'use strict';
			t(595), t(954);
		})();
})();
