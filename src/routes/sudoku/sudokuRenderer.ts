import * as PIXI from "pixi.js";

export function createSudokuRenderer(canvas: HTMLCanvasElement) {
	const app = new PIXI.Application({
		view: canvas,
		antialias: false,
		width: 1080,
		height: 1080
	});

	const boardContainer = new PIXI.Container();

	const gridGraphics = createGridGraphics(1080, 1080);
	boardContainer.addChild(gridGraphics);

	const { hintsContainer, hintsGroup } = createHintsGroup();
	boardContainer.addChild(hintsContainer);

	app.stage.addChild(boardContainer);

	return {
		destroy() {
			app.destroy(true, { children: true });
		},

		async downloadAsImage() {
			const anchor = document.createElement("a");
			const time = Date.now();

			anchor.download = `sudoku-${time}.jpg`;
			anchor.href = await (app.renderer as PIXI.Renderer).extract.base64(boardContainer, "image/jpeg", 1);
			anchor.click();
			anchor.remove();
		},

		render(board: number[][]) {
			let row = 0;
			let col = 0;

			for (row = 0; row < 9; row++) {
				for (col = 0; col < 9; col++) {
					hintsGroup[row][col].text = board[row][col] !== 0 ? `${board[row][col]}` : "";
				}
			}
		}
	};
}

function createGridGraphics(x: number, y: number) {
	const graphics = new PIXI.Graphics();

	graphics.beginFill(0xffffff);
	graphics.drawRect(0, 0, x, y);
	graphics.endFill();

	graphics.lineStyle(2, 0xcfcfcf, 1);
	graphics.moveTo((x / 9) * 1, 0);
	graphics.lineTo((x / 9) * 1, y);
	graphics.moveTo((x / 9) * 2, 0);
	graphics.lineTo((x / 9) * 2, y);
	graphics.moveTo((x / 9) * 4, 0);
	graphics.lineTo((x / 9) * 4, y);
	graphics.moveTo((x / 9) * 5, 0);
	graphics.lineTo((x / 9) * 5, y);
	graphics.moveTo((x / 9) * 7, 0);
	graphics.lineTo((x / 9) * 7, y);
	graphics.moveTo((x / 9) * 8, 0);
	graphics.lineTo((x / 9) * 8, y);

	graphics.moveTo(0, (y / 9) * 1);
	graphics.lineTo(x, (y / 9) * 1);
	graphics.moveTo(0, (y / 9) * 2);
	graphics.lineTo(x, (y / 9) * 2);
	graphics.moveTo(0, (y / 9) * 4);
	graphics.lineTo(x, (y / 9) * 4);
	graphics.moveTo(0, (y / 9) * 5);
	graphics.lineTo(x, (y / 9) * 5);
	graphics.moveTo(0, (y / 9) * 7);
	graphics.lineTo(x, (y / 9) * 7);
	graphics.moveTo(0, (y / 9) * 8);
	graphics.lineTo(x, (y / 9) * 8);

	graphics.lineStyle(4, 0x393939, 1);
	graphics.moveTo((x / 9) * 3, 0);
	graphics.lineTo((x / 9) * 3, y);
	graphics.moveTo((x / 9) * 6, 0);
	graphics.lineTo((x / 9) * 6, y);
	graphics.moveTo(0, (y / 9) * 3);
	graphics.lineTo(x, (y / 9) * 3);
	graphics.moveTo(0, (y / 9) * 6);
	graphics.lineTo(x, (y / 9) * 6);

	graphics.lineStyle(4, 0x393939, 1, 1);
	graphics.moveTo(0, 0);
	graphics.lineTo(0, y);
	graphics.moveTo(0, y);
	graphics.lineTo(x, y);

	graphics.lineStyle(4, 0x393939, 1, 0);
	graphics.moveTo(0, 0);
	graphics.lineTo(x, 0);
	graphics.moveTo(x, 0);
	graphics.lineTo(x, y);

	return graphics;
}

function createHintsGroup() {
	const hintsContainer = new PIXI.Container();
	const hintsGroup: PIXI.Text[][] = [];

	let row = 0;
	let col = 0;
	let hint: PIXI.Text;

	for (row = 0; row < 9; row++) {
		hintsGroup[row] = [];

		for (col = 0; col < 9; col++) {
			hint = new PIXI.Text("", {
				fontFamily: "Inter var, Inter, sans-serif",
				fontSize: 60,
				fontWeight: "200"
			});

			hint.anchor.set(0.5, 0.5);
			hint.position.x = col * 120 + 60;
			hint.position.y = row * 120 + 60;

			hintsGroup[row][col] = hint;
			hintsContainer.addChild(hint);
		}
	}

	return {
		hintsGroup,
		hintsContainer
	};
}
