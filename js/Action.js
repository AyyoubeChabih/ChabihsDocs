function Action(service) {
	this.service = service;
}

Action.prototype.doc = function(name) {
	return this.service.doc(name);
};

Action.prototype.search = function(context) {
	var keyword = context.getParameter(context.request.name);
	if (keyword.length > 0) {
		return this.service.search(keyword);
	} else return "";
};

Action.prototype.randomChapters = function() {
	return this.service.randomChapters();
};