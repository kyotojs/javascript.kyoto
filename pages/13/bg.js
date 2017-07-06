import styled from 'styled-components';
import ThreeShader from './three-shader';
import fragment from './shader';
import isMobile from './is-mobile';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const d = 0.96;
let movement = 10000;
let lastScroll = 0;
let scroll = 0;
let isWatching = false;
let last = null;

export default class Bg extends React.Component {
  loadShader = article => {
    this.three = new ThreeShader(1, 1);

    if (this.canvas) {
      this.three.setCanvas(this.canvas);
      this.three.loadTexture('/static/13/bg3.jpg');
      this.three.loadShader(fragment);

      this.three.addUniform('scroll', this.getScroll);
      this.three.addUniform('movement', this.getMovement);

      this.three.play();
    }
  }

  getMovement = () => movement;
  getScroll = () => scroll;

  update = (e) => {
    if (!window) { return; }
    const delta = last ? Date.now() - last : 1;
    const decay = Math.pow(d, delta / 16);

    movement = movement * decay + (lastScroll - window.scrollY) * 0.2;
    lastScroll = window.scrollY;
    scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    last = Date.now();

    if (isWatching) {
      requestAnimationFrame(this.update);
      // setTimeout(() => this.update(), 30);  // for debug
    }
  }

  componentDidMount() {
    this.loadShader(this.props.article);
    isWatching = true;
    this.update();
  }

  componentWillUnmount() {
    if (this.three) {
      this.three.stop();
    }
    isWatching = false;
  }

  setCanvas = el => this.canvas = el;

  render() {
    return (
      <Wrapper>
        <canvas ref={this.setCanvas}/>
      </Wrapper>
    );
  }
}
