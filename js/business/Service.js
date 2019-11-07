function Service(dao) {
	this.dao = dao;
}

Service.prototype.doc = function(name) {
	return this.dao.doc(name);
};

Service.prototype.search = function(keyword) {
	return this.dao.search(keyword);
};

Service.prototype.randomChapters = function() {
	return this.dao.randomChapters();
};