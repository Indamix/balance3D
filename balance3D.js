/*!
 *    balance3D
 *    http://indamix.github.com/balance3D/
 *
 *    Copyright 2012, Indamix
 *    http://indamix.github.com/license.txt
 *
 */

// TODO mind initial device orientation
// TODO grid demo with gradient for smooth, perspective
// TODO check whether browser is css3d compatible
// TODO fallback to css2d
// TODO add documentation
// TODO add css3d support for non-webkit browsers, if any
// TODO different angle layouts for laptops (_/) and phones/tablets (_)
(function(global, undefined){

var elms = [],
	initialized = false,
	balance3D;

balance3D = global.balance3D = function(elm, options){
	if (!window.DeviceOrientationEvent) return; // throw?
	if (!(this instanceof balance3D)) return new balance3D(elm, options);
	
	options.perspective = options.perspective || 1000;
	options.smooth = options.smooth === undefined ? .3 : options.smooth;

	elms.push({elm: elm, options: options})
	
	elm.style.webkitTransition = 'all ' + options.smooth + 's';

	if (initialized) return;
	window.addEventListener('deviceorientation', listener); // no need to maintain 'attachEvent', anyway, IE<=9 doesn't support deviceorientation
	initialized = true;
}

balance3D.stop = function(elm){// TODO elms array
	if (elm === undefined || elms.length === 1) {
		elms = [];
		window.removeEventListener('deviceorientation', listener);
	} else {
		for (var i = 0, l = elms.length; i < l; ++i)
			if (elms[i].elm === elm) {
				elms.splice(i, 1);
				break;
			}

	}
}

function listener(e){console.log(e)
	for (var i = 0, l = elms.length; i < l; ++i)
		elms[i].elm.style.webkitTransform = 'perspective(' + elms[i].options.perspective + 'px) rotateZ(' + -e.gamma + 'deg) rotateX(' + e.beta + 'deg)';

}

})(this);