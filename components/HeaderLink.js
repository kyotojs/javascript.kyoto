import ScrollLink from './ScrollLink'
import { color, size, breakpoint } from './styles'

const HeaderLink = ({ link, img, children }) => (
  <li className="link">
    <ScrollLink href={link}>
      <img src={img}/>
      <span className={
        window && window.matchMedia(`(max-width: ${breakpoint.mobile})`).matches ? 'mobile' : ''
        }>{children}</span>
    </ScrollLink>

    <style jsx>{`
      .link {
        display : block;
      }
      a {
        display         : block;
        height          : 100%;
        color           : ${color.white};
        text-decoration : none;
      }
      span {
        margin-right   : 10px;
        line-height    : ${size.header};
        vertical-align : top;
        font-weight    : bold;
      }
      span.mobile {
        display : none;
      }
      img {
        filter  : invert(1);
        width   : 32px;
        height  : 32px;
        padding : 6px;
      }
    `}</style>
  </li>
);

export default HeaderLink;
