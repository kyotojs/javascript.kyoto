import ScrollLink from './ScrollLink'
import styled from 'styled-components';
import { color, size, breakpoint } from './styles'

const isMobile = () => !!(window && window.matchMedia(`(max-width: ${breakpoint.mobile})`).matches);

const ListEl = styled.li`
  display : block;
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
  @media (max-width: ${breakpoint.mobile}) {
    span {
      display : none;
    }
  }
  img {
    filter  : invert(1);
    width   : 44px;
    height  : 44px;
    padding : 6px;
  }
`;

const HeaderLink = ({ link, img, children }) => (
  <ListEl>
    <ScrollLink href={link}>
      <img src={img}/>
      <span className={
        isMobile  ? 'mobile' : ''
        }>{children}</span>
    </ScrollLink>
  </ListEl>
);

export default HeaderLink;
