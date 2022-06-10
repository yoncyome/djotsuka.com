// ========================================================================= //
//  ACCORDION
// ========================================================================= //
$(function() {
	var $target = $('.js-accordion-wrapper');
	$target.wrapInner('<div class="accordion-content js-accordion-content" style="display:none;"></div>');
	$target.append('<button class="accordion-trigger js-accordion-trigger">曲目リスト</button>');

	$target.on('click', '.js-accordion-trigger', function() {
		var $this = $(this);
		var $wrapper = $this.closest('.js-accordion-wrapper');
		var $content = $wrapper.find('.js-accordion-content');
		if ($wrapper.hasClass('is-open')) {
			$content.slideUp();
			$wrapper.removeClass('is-open');
			$this.text('曲目リスト');
		} else {
			$content.slideDown();
			$wrapper.addClass('is-open');
			$this.text('閉じる');
		}
	});
})();

