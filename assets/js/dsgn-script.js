$('.grid').masonry({
    // use element for option
    columnWidth: '.grid-sizer',
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    percentPosition: true

});
