import * as THREE from "three";

export function createBackgroundScene(canvas: HTMLCanvasElement) {
	const windowSize = new THREE.Vector2();
	const pointerPosition = new THREE.Vector2();

	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: false
	});

	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x2a2a2a);

	const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.z = 500;

	const group = new THREE.Group();
	const geometry = new THREE.BoxGeometry(150, 150, 150);
	const material = new THREE.MeshNormalMaterial();

	let mesh: THREE.Mesh;

	for (let i = 0; i < 500; i++) {
		mesh = new THREE.Mesh(geometry, material);

		mesh.position.x = Math.random() * 3000 - 1500;
		mesh.position.y = Math.random() * 3000 - 1500;
		mesh.position.z = Math.random() * 3000 - 1500;

		mesh.rotation.x = Math.random() * 2 * Math.PI;
		mesh.rotation.y = Math.random() * 2 * Math.PI;

		mesh.matrixAutoUpdate = false;
		mesh.updateMatrix();

		group.add(mesh);
	}

	scene.add(group);

	function render() {
		const time = Date.now() * 0.001;

		camera.position.x += (pointerPosition.x - camera.position.x) * 0.01;
		camera.position.y += (pointerPosition.y - camera.position.y) * 0.03;
		camera.lookAt(scene.position);

		group.rotation.x = Math.sin(time * 0.7) * 0.5;
		group.rotation.y = Math.sin(time * 0.4) * 0.5;
		group.rotation.z = Math.sin(time * 0.2) * 0.5;

		renderer.render(scene, camera);
	}

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setAnimationLoop(render);

	function handlePointerMove(event: PointerEvent) {
		pointerPosition.x = event.clientX;
		pointerPosition.y = event.clientY;
	}

	document.addEventListener("pointermove", handlePointerMove);

	function handleWindowResize() {
		windowSize.x = window.innerWidth;
		windowSize.y = window.innerHeight;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	window.addEventListener("resize", handleWindowResize, false);

	return {
		destroy() {
			document.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("resize", handleWindowResize);
		}
	};
}
