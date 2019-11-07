var controller;

function main() {
	controller = new Controller();
	randomChapters();
}

function switchTo(page) {
    var request = new Request(page);
    controller.do(request);
}

function search(search) {
	var request = new Request(search);
    controller.do(request);
}

function randomChapters() {
	var request = new Request("random");
	controller.do(request);
}

function goToChapter(page, chapter) {
	switchTo(page);
	window.scrollTo(0, document.getElementById(chapter).offsetTop - 100);
}

function TopscrollTo() {
    if(window.scrollY!=0) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

function smoothScroll(target) {
    var scrollContainer = target;
    do { 
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop - 60;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 10);
    }

    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}