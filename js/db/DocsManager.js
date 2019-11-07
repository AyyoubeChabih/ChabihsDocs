function DocsManager() {
	this.docs = docs;
}

DocsManager.prototype.getDoc = function(name) {
    return this.docs.get(name);
};

DocsManager.prototype.searchByKeyword = function(keyword) {
	var data = new Map();
	for(var [doc, ele] of this.docs) {
		var titles = ele.keys();
		for(var title of titles) {
				if(title.toUpperCase().includes(keyword.toUpperCase())){
	        	data.set(title, doc);
	        }
		}
	}
	return data;
};

DocsManager.prototype.randomChapters = function() {
	var data = new Map();
	var techs = [];
	var i = 0;
	while( i < 6 ) {
		var techName = getRandomKey(this.docs);
		if (!techs.includes(techName)) {
			techs.push(techName);
			i++;
		} else continue;
	}
	for(var i = 0; i < techs.length; i++){
		var tech = this.docs.get(techs[i]);
		var chapterTitle;
		do {
			chapterTitle = getRandomKey(tech);
		} while (chapterTitle == "coursImg");
		var coursImg =  tech.get("coursImg");
		var chap = [chapterTitle, coursImg];
		data.set(techs[i], chap);
	}
	return data;
};

function getRandomKey(collection) {
    var keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}