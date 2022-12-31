<script lang="ts">
	import { onMount } from "svelte";
	import * as THREE from "three";

	let canvasElement: HTMLCanvasElement;

	onMount(() => {
		let renderer: THREE.Renderer;
		let camera: THREE.PerspectiveCamera;
		let scene: THREE.Scene;
		let group: THREE.Group;

		let pointerX = 0;
		let pointerY = 0;

		function handleWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		function handlePointerMove(event: PointerEvent) {
			pointerX = event.clientX;
			pointerY = event.clientY;
		}

		function setup() {
			camera = new THREE.PerspectiveCamera(
				60,
				window.innerWidth / window.innerHeight,
				1,
				10000
			);
			camera.position.z = 500;

			scene = new THREE.Scene();
			scene.background = new THREE.Color(0x2b2b2b);

			const geometry = new THREE.BoxGeometry(100, 100, 100);
			const material = new THREE.MeshNormalMaterial();

			group = new THREE.Group();

			for (let i = 0; i < 500; i++) {
				const mesh = new THREE.Mesh(geometry, material);

				mesh.position.x = Math.random() * 2000 - 1000;
				mesh.position.y = Math.random() * 2000 - 1000;
				mesh.position.z = Math.random() * 2000 - 1000;

				mesh.rotation.x = Math.random() * 2 * Math.PI;
				mesh.rotation.y = Math.random() * 2 * Math.PI;

				mesh.matrixAutoUpdate = false;
				mesh.updateMatrix();

				group.add(mesh);
			}

			scene.add(group);

			renderer = new THREE.WebGLRenderer({ antialias: false, canvas: canvasElement });
			renderer.setSize(window.innerWidth, window.innerHeight);

			window.addEventListener("resize", handleWindowResize, false);
			document.addEventListener("pointermove", handlePointerMove);
		}

		function render() {
			const time = Date.now() * 0.001;

			camera.position.x += (pointerX - camera.position.x) * 0.04;
			camera.position.y += (pointerY - camera.position.y) * 0.04;
			camera.lookAt(scene.position);

			group.rotation.x = Math.sin(time * 0.7) * 0.5;
			group.rotation.y = Math.sin(time * 0.3) * 0.5;
			group.rotation.z = Math.sin(time * 0.2) * 0.5;

			renderer.render(scene, camera);
		}

		function update() {
			requestAnimationFrame(update);
			render();
		}

		setup();
		update();
	});
</script>

<canvas bind:this={canvasElement} />

<style lang="postcss">
	canvas {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: transparent;
	}
</style>
