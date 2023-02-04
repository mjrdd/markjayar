import type { ComponentType } from "svelte";
import { writable } from "svelte/store";

export interface ModalInit {
	slot: ComponentType;
	onClose?: () => any;
}

function createModalStore() {
	const { set, subscribe, update } = writable<ModalInit[]>([]);

	return {
		subscribe,

		trigger(modal: ModalInit) {
			update((store) => {
				store.push(modal);
				return store;
			});
		},

		close: () => {
			update((store) => {
				if (store.length <= 0) return store;

				const modal = store.pop();

				if (modal && modal.onClose) {
					modal.onClose();
				}

				return store;
			});
		},

		clear: () => set([])
	};
}

export const modalStore = createModalStore();
