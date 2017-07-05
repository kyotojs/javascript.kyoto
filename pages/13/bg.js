import styled from 'styled-components';
import ThreeShader from './three-shader';
import fragment from './shader';

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

let movement = 10000;
let lastScroll = 0;
let scroll = 0;
let isWatching = false;

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
    movement = movement * 0.96 + (lastScroll - window.scrollY) * 0.2;
    lastScroll = window.scrollY;
    scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    if (isWatching) {
      requestAnimationFrame(this.update);
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
