exports.forEach = (collection, callback) => {
	for(i = 0; i < collection.length; i++){
		callback(collection[i])
	}
}

