/**
 * Load Script
 * - Checks for default assets enqueued via wp function then check by ID in the DOM
 * 
 * @param {string} id
 * @param {string} url
 * @param {function} callback
 * 
 * @return void
 */
const executeFnQueue = function (key, queue_array) {
	// Remove and execute all items in the array
	while (queue_array[key].length > 0) (queue_array[key].shift())();
};

export default function LoadScript(id, url, callback) {
	// Check if script exists in WP_Scripts->Queue object then check it by ID on DOM. Create and run callback if not.
	var inOBJ = (wecodeart.assetsEnqueue.indexOf(id) > -1) ? true : null; // In WP Scripts Queue object
	// If external asset is already in DOM and loaded, we can execute the callback immediately
	if (typeof wecodeart.assetsLoaded == 'undefined') {
		wecodeart.assetsLoaded = [];
	}
	if (inOBJ || wecodeart.assetsLoaded[id] === true) {
		callback();
		return;
	}
	if (typeof wecodeart.functionsQueue == 'undefined') {
		wecodeart.functionsQueue = [];
	}
	if (typeof wecodeart.functionsQueue[id] == 'undefined') {
		wecodeart.functionsQueue[id] = [];
	}
	wecodeart.functionsQueue[id].push(callback);
	var inDOM = document.getElementById(id); // Search in DOM via ID
	// If we don't have the script, create it and run callback
	if (inDOM == null) {
		var body = document.getElementsByTagName('body')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		script.id = id;
		script.onload = function () {
			wecodeart.assetsLoaded[id] = true;
			executeFnQueue(id, wecodeart.functionsQueue);
		};
		script.onreadystatechange = function () {
			wecodeart.assetsLoaded[id] = true;
			executeFnQueue(id, wecodeart.functionsQueue);
		};
		// Fire the script
		body.appendChild(script);
	}
};