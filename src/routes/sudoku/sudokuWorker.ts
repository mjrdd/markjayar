import { generate, removeHints } from "@mjrdd/sudoku";

self.addEventListener("message", (e) => {
	const { key, payload } = e.data;

	if (key === "generate") {
		self.postMessage(removeHints(generate(), payload));
	}
});
