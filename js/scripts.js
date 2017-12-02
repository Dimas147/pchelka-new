// Document ready
$(function () {
    var search = $('#search-form').html();
    $('#mobile-search').html("<form action='/search-results.html' method='get'>"+search+"</form>");
});