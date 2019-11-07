function Controller() {
	var service = new Service(new DAO(new DocsManager()));
	this.action = new Action(service);
	this.view = new View();
}

var currentPage = "Accueil";

function show(id) {
	document.getElementById(currentPage + "-menu-item").classList.remove("item-active");
	document.getElementById(id + "-menu-item").classList.add("item-active");
	document.getElementById(currentPage).classList.add("hidden");
	document.getElementById(id).classList.remove("hidden");
	document.getElementById("cours").classList.add("hidden");
	document.getElementById("search-result").classList.add("hidden");
	if (id == "Technologies") {
		document.getElementById("tutos").classList.remove("hidden");
	}
	currentPage = id;
	TopscrollTo();
}

Controller.prototype.do = function(request) {
	if(request.name == "keyword" || request.name == "keyword2") {
		var context = new Context(request);
		var result = this.action.search(context);
		var keyword = context.getParameter(request.name);
		this.view.searchResult(result, keyword);		
	} else {
		if (request.name == "random") {
			var result = this.action.randomChapters();
			this.view.randomChapters(result);
		} else {
			var result = this.action.doc(request.name);
			this.view.doc(result, currentPage);
		}
	}
};

function hide(id) {
	document.getElementById(id).style.display = "none";
}

