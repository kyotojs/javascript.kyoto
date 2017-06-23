import ScrollLink from './ScrollLink'
import HeaderLink from './HeaderLink'
import { color, size, breakpoint } from './styles'

const Header = () => (
  <header className="Header">
    <h4 className="Header__Logo">
      <a href="/">
        <img src="/static/logo120_white.png"/>
      </a>
    </h4>

    <nav className="Header__Navigation">
      <ul className="links">
        <HeaderLink link="#slack" img="/static/slack.png">
          Slack
        </HeaderLink>
        <HeaderLink link="#meetup" img="/static/meetup.png">
          Meetup
        </HeaderLink>
        <HeaderLink link="#blog" img="/static/blog.png">
          Blog
        </HeaderLink>
      </ul>
    </nav>

    <style jsx>{`
      .Header {
        background : ${color.sumi};
        position   : fixed;
        top        : 0;
        left       : 0;
        width      : 100%;
        height     : 44px;
        z-index    : 9999;

        display         : flex;
        flex-direction  : row;
        justify-content : space-between;
      }

      .links {
        display         : flex;
        flex-flow       : row nowrap;
        justify-content : flex-end;
        padding         : 0;
        margin          : 0;
        height          : 100%;
      }
    `}</style>
  </header>
);

export default Header;
