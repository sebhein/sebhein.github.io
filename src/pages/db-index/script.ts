/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

interface TableRow {
	id: string | number;
	name: string;
	flag: boolean;
}

const tableData: TableRow[] = [
	{ id: '...', name: '...', flag: false },
	{ id: 42, name: 'Neo', flag: true },
	{ id: 43, name: 'Cypher', flag: true },
	{ id: 44, name: 'Morpheus', flag: false },
	{ id: 45, name: 'Trinity', flag: true },
	{ id: '...', name: '...', flag: false },
	{ id: 420, name: 'Case', flag: true },
	{ id: 421, name: 'Armitage', flag: true },
	{ id: 422, name: 'Maelcum', flag: false },
	{ id: 423, name: 'Molly', flag: false },
	{ id: '...', name: '...', flag: false },
];

function createTable(): HTMLElement {
  const table = document.createElement('div');
  table.className = 'db-animation-table';

  const header = document.createElement('div');
  header.className = 'db-animation-row db-animation-header';
  header.innerHTML = `
    <span class="db-animation-cell">id: int</span>
    <span class="db-animation-cell">name: str</span>
    <span class="db-animation-cell">flag: bool</span>
  `;
  table.appendChild(header);

  tableData.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.className = 'db-animation-row';
    rowElement.innerHTML = `
      <span class="db-animation-cell">${row.id}</span>
      <span class="db-animation-cell">${row.name}</span>
      <span class="db-animation-cell">${row.flag}</span>
    `;
    table.appendChild(rowElement);
  });

  return table;
}

class DbAnimation {
	private tableRows: Element [];
	private rowIdx = 0;
	private status: HTMLElement;
	private result: HTMLElement;
	private next: HTMLButtonElement;
	private reset: HTMLButtonElement;

	constructor() {
		this.rowIdx = 0;
		this.tableRows = Array.from(document.querySelectorAll(".db-animation-row")).filter((row) => !row.classList.contains("db-animation-header"));
		console.log(this.tableRows);
		this.status = document.getElementById("status")!;
		this.next = document.getElementById("nextBtn") as HTMLButtonElement;
		this.next.addEventListener("click", () => { this.nextFrame(); });
		this.reset = document.getElementById("resetBtn") as HTMLButtonElement;
		this.reset.addEventListener("click", () => { this.resetAnimation() });
		this.result = document.getElementById("result")!;
	}

	private resetAnimation(): void {
		this.rowIdx = 0;
		this.next.disabled = false;
		// so gross lol
		this.result.innerHTML = "Result:"
	}

	private nextFrame(): void {
		if (this.rowIdx >= this.tableRows.length) {
			this.tableRows.forEach((row2) => row2.classList.remove("highlight"));
			this.next.disabled = true;
			return
		}
		this.tableRows.forEach((row2) => row2.classList.remove("highlight"));
		const row = this.tableRows[this.rowIdx];
		row.classList.add("highlight");
		const nameCol = row.querySelector(".db-animation-cell:nth-child(2)");
		this.status.textContent = `${nameCol?.textContent} == Maelcum`;
		if (nameCol?.textContent === "Maelcum") {
			const idCol = row.querySelector(".db-animation-cell:nth-child(1)");
			this.result.innerHTML = `Result: ${idCol?.textContent}`
		} 
		this.rowIdx += 1;
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.db-animation-section')!;
	container.appendChild(createTable());
	new DbAnimation();
});
