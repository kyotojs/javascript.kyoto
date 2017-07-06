import * as THREE from 'three';

const DEFAULT_VERTEX_SHADER = `
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export default class ThreeShader {
    // canvas: HTMLCanvasElement;
    // renderer: THREE.Renderer;
    //
    // camera: THREE.Camera;
    // frame: number;
    // geometry: THREE.PlaneGeometry;
    //
    // isPlaying: boolean;
    // plane: THREE.Mesh;
    // scene: THREE.Scene;
    // start: number;
    // targets: THREE.WebGLRenderTarget[];
    // uniforms: any;
    // textureLoader: THREE.TextureLoader;

    constructor(ratio/*: number*/, skip/*: number*/) {
        this.ratio = ratio;
        this.skip = skip;

        this.scene = new THREE.Scene();

        // Create camera
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        this.camera.position.set(0, 0, 1);
        this.camera.lookAt(this.scene.position);

        // Create a target for backBuffer
        this.targets = [
            new THREE.WebGLRenderTarget(
                0, 0,
                { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat }
            ),
            new THREE.WebGLRenderTarget(
                0, 0,
                { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat }
            ),
        ];

        // Prepare uniforms
        this.start = Date.now();
        this.uniforms = {
            backBuffer: { type: "t", value: new THREE.Texture() },
            mouse: { type: "v2", value: new THREE.Vector2() },
            resolution: { type: "v2", value: new THREE.Vector2() },
            time: { type: "f", value: 0.0 },
        };

        this.textureLoader = new THREE.TextureLoader();
        this.callbacks = {};
    }

    setCanvas(canvas/*: HTMLCanvasElement*/) {
        if (!canvas) { return; }

        this.canvas = canvas;
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.renderer.setPixelRatio(1 / this.ratio);
        this.resize();
        window.addEventListener('resize', this.resize);
        this.renderer.domElement.addEventListener('mousemove', this.mousemove);

        this.frame = 0;
        this.animate();
    }

    get aspect() {
        return this.renderer.domElement.width / this.renderer.domElement.height;
    }

    loadShader(shader/*: string*/): void {
        if (this.plane) {
            this.scene.remove(this.plane);
        }

        // Create plane
        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: DEFAULT_VERTEX_SHADER,
            fragmentShader: shader,
            extensions: {
                derivatives: true,
                drawBuffers: false,
                fragDepth: false,
                shaderTextureLOD: false,
            },
        });
        this.plane = new THREE.Mesh(geometry, material);
        this.scene.add(this.plane);
    }

    loadTexture(texture/*: string*/)/*: void*/ {
        if (!texture) { return; }
        this.uniforms.texture = {
            type: 't',
            value: this.textureLoader.load(texture),
        };
    }

    addUniform(name, callback) {
      this.uniforms[name] = {
          type: 'f',
          value: callback(),
      };
      this.callbacks[name] = callback;
    }

    mousemove = (e/*: MouseEvent*/) => {
        this.uniforms.mouse.value.x = e.offsetX - this.renderer.domElement.offsetLeft;
        this.uniforms.mouse.value.y = e.offsetY - this.renderer.domElement.offsetTop;
    }

    resize = () => {
        const [ width, height ] = [ this.canvas.clientWidth, this.canvas.clientHeight ];
        this.renderer.setSize(width, height);
        this.targets.forEach(t => t.setSize(width / this.ratio, height / this.ratio));
        this.uniforms.resolution.value.x = width / this.ratio;
        this.uniforms.resolution.value.y = height / this.ratio;
    }

    animate = () => {
        this.frame++;
        if (!this.isPlaying) { return; }

        requestAnimationFrame(this.animate);
        // setTimeout(this.animate, 30);

        if (this.frame % this.skip === 0) {
            this.render();
        }
    }

    play() {
        this.isPlaying = true;
        this.animate();
    }

    stop() {
        this.isPlaying = false;
    }

    render() {
        this.uniforms.time.value = (Date.now() - this.start) / 1000;
        this.targets = [this.targets[1], this.targets[0]];
        this.uniforms.backBuffer.value = this.targets[0].texture;

        Object.keys(this.callbacks).forEach((name) => {
          this.uniforms[name].value = this.callbacks[name]();
        });

        this.renderer.render(this.scene, this.camera);
        this.renderer.render(this.scene, this.camera, this.targets[1], true);
    }
}
