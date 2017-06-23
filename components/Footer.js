import styled from 'styled-components';
import { color, breakpoint } from './styles'

const FooterEl = styled.footer`
  width       : 100%;
  height      : 150px;
  background  : ${color.sumi};
  color       : ${color.white};
  text-align  : center;
  padding-top : 60px;

  @media (max-width: ${breakpoint.tablet}) {
      height: 60px;
      padding-top: 20px;
  }

  img {
    transform: translateY(-1px);
  }
}`

export default () => (
  <FooterEl>
    from <img src="/static/shrine.png"/> with ❤
  </FooterEl>
);

