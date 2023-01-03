import * as THREE from "three";

export function createScene(canvas: HTMLCanvasElement) {
	if (!canvas) {
		throw new Error("Canvas element is undefined");
	}

	const windowSize = {
		x: window.innerWidth,
		y: window.innerHeight
	};

	const pointerPos = {
		x: 0,
		y: 0
	};

	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: false
	});

	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x2e2e2e);

	const camera = new THREE.PerspectiveCamera(80, windowSize.x / windowSize.y, 1, 10000);
	camera.position.z = 500;

	const group = new THREE.Group();

	const geometry = new THREE.BoxGeometry(150, 150, 150);
	const material = new THREE.MeshNormalMaterial();

	let mesh;

	for (let i = 0; i < 500; i++) {
		mesh = new THREE.Mesh(geometry, material);

		mesh.position.set(
			Math.random() * 3000 - 1500,
			Math.random() * 3000 - 1500,
			Math.random() * 3000 - 1500
		);

		mesh.rotation.set(Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, 0);

		mesh.matrixAutoUpdate = false;
		mesh.updateMatrix();

		group.add(mesh);
	}

	scene.add(group);

	function render() {
		const time = Date.now() * 0.001;

		camera.position.x += (pointerPos.x - camera.position.x) * 0.01;
		camera.position.y += (pointerPos.y - camera.position.y) * 0.03;
		camera.lookAt(scene.position);

		group.rotation.set(
			Math.sin(time * 0.7) * 0.5,
			Math.sin(time * 0.4) * 0.5,
			Math.sin(time * 0.2) * 0.5
		);

		renderer.render(scene, camera);
	}

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setAnimationLoop(render);

	function handlePointerMove(event: PointerEvent) {
		pointerPos.x = event.clientX;
		pointerPos.y = event.clientY;
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
