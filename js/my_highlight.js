$(function () {
    $('pre code').each(function(i, block) {
        //hljs.highlightBlock(block);
        var lines = $(this).text().split('\n').length - 1;
        var $numbering = $('<ul/>').addClass('pre-numbering');
        $(this).parent()
            .addClass('has-numbering')
            // .parent()
            .append($numbering);
        for(i=1;i<=lines;i++){
            var tmp = "";
            if(i < 10)
                tmp = "0" + i;
            else
                tmp += i;
            $numbering.append($('<li/>').text(tmp));
        }
    });
});
