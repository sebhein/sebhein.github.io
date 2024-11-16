/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

interface AnimationStep {
	action: () => void;
	message: string;
}

class DbAnimation {
	private tableRows: HTMLElement [];
	private status: HTMLElement;

	constructor() {
		this.tableRows = Array.from(document.querySelectorAll('.db-animation-row')).filter(row => !row.classList.contains('db-animation-header'));
		console.log(this.tableRows);
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new DbAnimation();
});
