$(document).ready(function(){
	
	$(".swap").hover(function() {
		$(this).find("img").stop().fadeTo(100, 0);
	}, function() {
		$(this).find("img").stop().fadeTo(100, 100);
	});

    $(".icon").click(function() {
        $(".dropdown").css({
            right: -($(".dropdown").width())
        }).show().animate({
            right: 0
        }, 500);
    });

	$(".close").click(function() {
        $(".dropdown").animate({
            right: -($(".dropdown").width())
        }, 500, function() {
            $(".dropdown").hide();
        });
    });
    var frm = document.getElementById('ifrm');
    $(window).resize(function() {
        if (frm) frm.style.height = $(document).height() - 120 + 'px';
    });

    if (frm) frm.style.height = $(document).height() - 120 + 'px';
	
});


function getDocHeight(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/...
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}
function getDocWidth(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/...
    var body = doc.body, html = doc.documentElement;
    var width = Math.max( body.scrollWidth, body.offsetWidth, 
        html.clientHeight, html.scrollWidth, html.offsetWidth );
    return width;
}

function setIframeHeight(id) {
    var ifrm = document.getElementById(id);
    var doc = ifrm.contentDocument? ifrm.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.height = "10px"; // reset to minimal height ...
    // IE opt. for bing/msn needs a bit added or scrollbar appears
    ifrm.style.height = getDocHeight( doc ) + 4 + "px";
    ifrm.style.visibility = 'visible';
}

function setIframeWidth(id) {
    var ifrm = document.getElementById(id);
    var doc = ifrm.contentDocument? ifrm.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.width = "10px"; // reset to minimal height ...
    // IE opt. for bing/msn needs a bit added or scrollbar appears
    ifrm.style.width = getDocWidth( doc ) + 4 + "px";
    ifrm.style.visibility = 'visible';
}
