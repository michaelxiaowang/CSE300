$(document).ready(function() {

    
    //$('#main').css('height', $('body').height()-$('#header').height()-$('#footer').height());
    $('#home').show();
    
    //Replaces svg images with inline svg, code from stackoverflow was used
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });

    //Display a particular '.maincontent' div when the related link is clicked
    $('li').click(function(evt) {

        //Check to see if li clicked is related to pdf file
        var pdf = false

        //Make the pdf objects' height equal to the space between header and footer
        $('object').css("min-height", $('body').height()-$('#header').height()-$('#footer').height());

        var name = $(this).text();

        switch(name) {
            case "Home":
                $('.maincontent').hide();
                $('#home').show();
                break;
            case "About Me":
                $('.maincontent').hide();
                $('#about').show();
                break;
            default:
                //do nothing
                break;
        }
        //Prevent the li events from bubbling up
        evt.stopPropagation();
    });
})