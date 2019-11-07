function View() {
	
}

View.prototype.addRow = function(chapter, id) {
    var data = '<a class="element" onclick="smoothScroll(document.getElementById(\'' + chapter.split("'").join('_') + '\'))">' + chapter + "</a>";
    document.getElementById("table-of-content").innerHTML += data;
};

View.prototype.addParagraph = function(title, text) {
    var data = '<span id="' + title.split("'").join('_') + '" class="title"><span class="hashtag"><b># </b></span>' + title + "</span>";
    data += '<span class="text">' + text + "</span>";
    document.getElementById("content").innerHTML += data;
};

View.prototype.doc = function(doc, currentPage) {
    document.getElementById(currentPage).classList.add("hidden");
    document.getElementById("cours").classList.remove("hidden");
    document.getElementById("Technologies").classList.add("hidden");
    document.getElementById("table-of-content").innerHTML = "";
    document.getElementById("content").innerHTML = "";
    var coursImg = doc.get("coursImg");
    document.getElementById("content").innerHTML = '<img src="img/' + coursImg + '.png" style="width: 100%;"/><br>';
    var i = 0;
    for (var [title, text] of doc) {
        if(title == "coursImg") continue;
        this.addRow(title, i);
        this.addParagraph(title, text);
        i++;
    }
    TopscrollTo();
};

View.prototype.searchResult = function(result, keyword) {
    document.getElementById(currentPage).classList.add("hidden");
    document.getElementById("tutos").classList.add("hidden");
    document.getElementById("cours").classList.add("hidden");
    document.getElementById("Technologies").classList.remove("hidden");
    document.getElementById("search-result").classList.remove("hidden");
    document.getElementById("search-result").innerHTML = "";
    if (result == "" || result.size == 0) {
        document.getElementById("search-result").innerHTML = '<div class="aucun">Aucun résultat</div>';
    } else {
        result.delete("coursImg");
        for(var [title, doc] of result) {
            document.getElementById("search-result").innerHTML += '<div class="result-element" onclick="goToChapter(\'' + doc + '\',\'' + title.split('\'').join('_') + '\')">' + doc.toUpperCase() + ' : ' + title.toUpperCase().replace(keyword.toUpperCase(), "<span class=\"keyword\">" + keyword.toUpperCase() + "</span>")  + '</div>';
        }
    }
};

View.prototype.randomChapters = function(result) {
    var techs = Array.from(result.keys());
    for (var i = 0; i < 4; i++) {
        document.getElementById("acc-" + i).style.backgroundImage = "url('img/" + result.get(techs[i])[1] + "-tuto.png')";
        document.getElementById("acc-" + i + "-title").innerHTML = result.get(techs[i])[0];
        document.getElementById("acc-" + i).setAttribute('onclick', 'goToChapter("' + techs[i] + '","' + result.get(techs[i])[0].split('\'').join('_') + '");');
    }
    for (var i = 4; i < 6; i++) {
        document.getElementById("acc-" + i + "-img").src = "img/" + result.get(techs[i])[1] + "-tuto.png";
        document.getElementById("acc-" + i + "-title").innerHTML = result.get(techs[i])[0];
        document.getElementById("acc-" + i).setAttribute('onclick', 'goToChapter("' + techs[i] + '","' + result.get(techs[i])[0].split('\'').join('_') + '");');
    }
};