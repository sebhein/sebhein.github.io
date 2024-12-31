/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

interface AnimationStep {
	action: () => void;
	message: string;
}

class DbAnimation {
	private tableRows: HTMLElement [];
	private status: HTMLElement | null;
	private playBtn: HTMLButtonElement | null;
	private rowIdx = 0;
	private DELAY = 200;

	constructor() {
		this.tableRows = Array.from(document.querySelectorAll('.db-animation-row')).filter(row => !row.classList.contains('db-animation-header'));
		console.log(this.tableRows);
		this.status = document.getElementById('status');
		this.playBtn = document.getElementById('playBtn') as HTMLButtonElement;

		this.nextFrame();
	}

	private nextFrame(): void {
		this.tableRows.forEach(row => row.classList.remove('highlight'));
		const row = this.tableRows[this.rowIdx];
		row.classList.add('highlight');

		const nameCol = row.querySelector('.db-animation-cell:nth-child(2)');

		this.status.textContent = `${nameCol?.textContent} == Maelcum`;

		if (nameCol?.textContent === 'Maelcum') {
			console.log("flashing")
		} else if (nameCol?.textContent === '...') {
			console.log("wtf")
		}

		this.rowIdx = this.rowIdx == this.tableRows.length - 1 ? 0 : this.rowIdx + 1;
		window.setTimeout(() => this.nextFrame(), this.DELAY);
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	new DbAnimation();
});
