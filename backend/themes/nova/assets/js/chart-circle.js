// ______________Chart-circle
function circlechart() {
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color:  myVarVal || "#0a1e63",
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'transparent',
				lineCap: 'round'
			});
		});
	}
}

if ($('.dark-side-body .chart-circle').length) {
	$('.dark-side-body .chart-circle').each(function() {
		let $this = $(this);
		$this.circleProgress({
			fill: {
				color: $this.attr('data-color')
			},
			size: $this.height(),
			startAngle: -Math.PI / 4 * 2,
			emptyFill: '#25273e',
			lineCap: 'round'
		});
	});
}