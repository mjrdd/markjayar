import * as PIXI from "pixi.js";

const x = 1080;
const y = 1080;

let app: PIXI.Application;

const boardContainer = new PIXI.Container();

const grid = new PIXI.Graphics();

grid.beginFill(0xffffff);
grid.drawRect(0, 0, x, y);
grid.endFill();

grid.lineStyle(2, 0xcfcfcf, 1);
grid.moveTo((x / 9) * 1, 0);
grid.lineTo((x / 9) * 1, y);
grid.moveTo((x / 9) * 2, 0);
grid.lineTo((x / 9) * 2, y);
grid.moveTo((x / 9) * 4, 0);
grid.lineTo((x / 9) * 4, y);
grid.moveTo((x / 9) * 5, 0);
grid.lineTo((x / 9) * 5, y);
grid.moveTo((x / 9) * 7, 0);
grid.lineTo((x / 9) * 7, y);
grid.moveTo((x / 9) * 8, 0);
grid.lineTo((x / 9) * 8, y);
grid.moveTo(0, (y / 9) * 1);
grid.lineTo(x, (y / 9) * 1);
grid.moveTo(0, (y / 9) * 2);
grid.lineTo(x, (y / 9) * 2);
grid.moveTo(0, (y / 9) * 4);
grid.lineTo(x, (y / 9) * 4);
grid.moveTo(0, (y / 9) * 5);
grid.lineTo(x, (y / 9) * 5);
grid.moveTo(0, (y / 9) * 7);
grid.lineTo(x, (y / 9) * 7);
grid.moveTo(0, (y / 9) * 8);
grid.lineTo(x, (y / 9) * 8);

grid.lineStyle(4, 0x393939, 1);
grid.moveTo((x / 9) * 3, 0);
grid.lineTo((x / 9) * 3, y);
grid.moveTo((x / 9) * 6, 0);
grid.lineTo((x / 9) * 6, y);
grid.moveTo(0, (y / 9) * 3);
grid.lineTo(x, (y / 9) * 3);
grid.moveTo(0, (y / 9) * 6);
grid.lineTo(x, (y / 9) * 6);

grid.lineStyle(4, 0x393939, 1, 1);
grid.moveTo(0, 0);
grid.lineTo(0, y);
grid.moveTo(0, y);
grid.lineTo(x, y);

grid.lineStyle(4, 0x393939, 1, 0);
grid.moveTo(0, 0);
grid.lineTo(x, 0);
grid.moveTo(x, 0);
grid.lineTo(x, y);

boardContainer.addChild(grid);

let j = 0;
let k = 0;

let hint: PIXI.Text;
const hintContainer: PIXI.Text[][] = [];

for (j = 0; j < 9; j++) {
	hintContainer[j] = [];

	for (k = 0; k < 9; k++) {
		hint = new PIXI.Text("", {
			fontFamily: "Inter var, Inter, sans-serif",
			fontSize: (x / 9) * 0.55,
			fontWeight: "200"
		});

		hint.anchor.set(0.5, 0.5);
		hint.position.set(k * (x / 9) + 60, j * (y / 9) + 60);

		hintContainer[j][k] = hint;
		boardContainer.addChild(hint);
	}
}

export function view(canvas: HTMLCanvasElement) {
	app = new PIXI.Application({
		antialias: false,
		view: canvas,
		width: x,
		height: y
	});

	app.stage.addChild(boardContainer);

	return {
		destroy() {
			app.destroy(true, { children: true });
		}
	};
}

export function show(board: number[][]) {
	for (j = 0; j < 9; j++) {
		for (k = 0; k < 9; k++) {
			hintContainer[j][k].text = board[j][k] !== 0 ? `${board[j][k]}` : "";
		}
	}
}

const anchor = document.createElement("a");
const renderer = new PIXI.Renderer();
anchor.download = "sudoku.jpg";

export async function download() {
	anchor.href = await renderer.extract.base64(boardContainer, "image/jpeg", 1);
	anchor.click();
}
