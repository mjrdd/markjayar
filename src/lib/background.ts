// https://playcode.io/three_js

import * as THREE from "three";

export function createBackground(canvas: HTMLCanvasElement) {
	let renderer: THREE.Renderer;
	let camera: THREE.PerspectiveCamera;
	let scene: THREE.Scene;
	let group: THREE.Group;
	let mouseX = 0;
	let mouseY = 0;
	let sizeX = window.innerWidth;
	let sizeY = window.innerHeight;

	function init() {
		camera = new THREE.PerspectiveCamera(60, sizeX / sizeY, 1, 10000);
		camera.position.z = 500;

		scene = new THREE.Scene();
		scene.background = new THREE.Color(0x2b2b2b);
		scene.fog = new THREE.Fog(0x2b2b2b, 1, 10000);

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

		renderer = new THREE.WebGLRenderer({ antialias: false, canvas });
		renderer.setSize(sizeX, sizeY);

		window.addEventListener("resize", handleWindowResize, false);
		document.addEventListener("pointermove", handlePointerMove);
	}

	function handleWindowResize() {
		sizeX = window.innerWidth;
		sizeY = window.innerHeight;

		camera.aspect = sizeX / sizeY;
		camera.updateProjectionMatrix();
		renderer.setSize(sizeX, sizeY);
	}

	function handlePointerMove(event: PointerEvent) {
		mouseX = event.clientX - sizeX / 2;
		mouseY = event.clientY - sizeY / 2;
	}

	function render() {
		const time = Date.now() * 0.001;

		camera.position.x += (mouseX - camera.position.x) * 0.05;
		camera.position.y += (-mouseY - camera.position.y) * 0.05;
		camera.lookAt(scene.position);

		group.rotation.x = Math.sin(time * 0.7) * 0.5;
		group.rotation.y = Math.sin(time * 0.3) * 0.5;
		group.rotation.z = Math.sin(time * 0.2) * 0.5;

		renderer.render(scene, camera);
	}

	function animate() {
		requestAnimationFrame(animate);
		render();
	}

	init();
	animate();
}
