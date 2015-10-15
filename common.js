(function(){
    function endsWith(string, searchString, position) {
        var subjectString = string+'';
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    }


    $.ajax('menu.html').then(function(data) {
        [].some.call($('#menu').html(data).find('a'), function(el){
            if(endsWith(location.href, el.getAttribute('href'))) {
                console.log(el);
                $(el.parentNode).toggleClass('active', true);
                return true;
            };
        });
    });
}());

        
$(document.body).on('change keyup keydown input', 'input[type="range"][data-output-to]', function(e){
    var outputId = this.getAttribute('data-output-to');
    $('#'+outputId).text(this.value);
});
$('input[type="range"][data-output-to]').trigger('input');