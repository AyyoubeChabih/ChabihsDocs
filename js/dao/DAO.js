function DAO(docs) {
	this.docs = docs;
}

DAO.prototype.doc = function(name) {
	return this.docs.getDoc(name);
};

DAO.prototype.search = function(keyword) {
	return this.docs.searchByKeyword(keyword);
};

DAO.prototype.randomChapters = function() {
	return this.docs.randomChapters();
};