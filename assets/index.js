$(function () {
  // ====== TOGGLE POPOVER TECHNICAL ======
  const $popoverTech = $('[data-toggle="popover-technical"]');

  $popoverTech.click(function () {
    $popoverTech.popover('hide')
  });

  $popoverTech.popover({
    html: true,
    container: '.js-popover-technical',
    content: function () {
      let content = $(this).siblings('.js-popover-content').html();
      return $(content).show();
    }
  });

  $('html').on('click', function (e) {
    if (typeof $(e.target).data('original-title') == 'undefined' &&
      !$(e.target).parents().is('.popover.in')) {
      $('[data-original-title]').popover('hide');
    }
  });
})
