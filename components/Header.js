import styled from 'styled-components';
import ScrollLink from './ScrollLink'
import HeaderLink from './HeaderLink'
import { color, size, breakpoint } from './styles'

const HeaderEl = styled.header`
  background : ${color.sumi};
  position   : fixed;
  top        : 0;
  left       : 0;
  width      : 100%;
  height     : ${size.header};
  z-index    : 9999;

  display         : flex;
  flex-direction  : row;
  justify-content : space-between;

  overflow: hidden;
`;
const LogoEl = styled.h4`
  width : 140px;
  a {
    display : block;
    height  : 100%;
  }
  img {
    margin: 7px;
  }
`;
const LinksEl = styled.ul`
  display         : flex;
  flex-flow       : row nowrap;
  justify-content : flex-end;
  padding         : 0;
  margin          : 0;
  height          : 100%;
`;

const Header = () => (
  <HeaderEl>
    <LogoEl>
      <a href="/">
        <img src="/static/logo120_white.png"/>　
      </a>
    </LogoEl>

    <nav className="Header__Navigation">
      <LinksEl>
        <HeaderLink link="#slack" img="/static/slack.png">
          Slack
        </HeaderLink>
        <HeaderLink link="#meetup" img="/static/meetup.png">
          Meetup
        </HeaderLink>
        <HeaderLink link="#blog" img="/static/blog.png">
          Blog
        </HeaderLink>
      </LinksEl>
    </nav>
  </HeaderEl>
);

export default Header;
