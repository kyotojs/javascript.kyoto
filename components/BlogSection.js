import styled from 'styled-components';
import { color, size, breakpoint } from './styles'
import * as Section from './Section'
import ImgLink from './ImgLink'

const SectionEl = Section.SectionEl;
const HighlightEl = Section.HighlightEl;
const HeaderEl = Section.HeaderEl;
const TitleEl = Section.TitleEl;
const TitleImageEl = Section.TitleImageEl;
const SubTitleEl = Section.SubTitleEl.extend`
  @media (max-width: ${breakpoint.tablet}) {
    font-size     : ${size.h4};
    line-height   : ${size.h3};
    margin-bottom : 30px;
    margin-top    : -10px;
  }
`;
const CellsEl = Section.CellsEl;
const CellEl = Section.CellEl.extend`
  width      : 33%;
  text-align : center;

  @media (max-width: $width-tablet) {
      width   : 140px;
      padding : 0;
  }
`;
const LinkEl = styled.a`
  display   : block;
  width     : 100%;
  font-size: ${size.h3};
  line-height: ${size.h3};
  margin: 0;
  font-family: $bold;
  font-weight: 900;
  text-decoration: none;

  @media (max-width: ${breakpoint.tablet}) {
      font-size: ${size.h4};
  }
  @media (max-width: ${breakpoint.mobile}) {
      font-size: ${size.h6};
  }

  &:hover {
    filter: drop-shadow(0 2px 0 ${p => p.color});
  }
`;
const LinkImgEl = styled.img`
  display   : block;
  width     : 70%;
  max-width : 128px;
  margin    : 20px auto;
  @media (max-width: ${breakpoint.tablet}) {
      margin: 5px auto;
  }
`;

const BlogImgEl = styled.img`
  display: block;
  width: 110%;
  max-width: 480px;
  text-align: center;
`;

export default () => (
  <SectionEl>
    <HeaderEl>
      <TitleEl color={color.yellow}>
        <TitleImageEl src="/static/logo_blog960.png" alt="Kyoto.js Blog"/>
      </TitleEl>
      <SubTitleEl height="90">
        <HighlightEl shadow={color.yellow} href="http://kyotojs.hatenablog.jp/">
          kyotojs.hatenablog.jp
        </HighlightEl>
      </SubTitleEl>
    </HeaderEl>

    <CellsEl>
      <CellEl>
        <p>
          Kyoto.js Blog reports out meetups.
          If you are interested, please tell us and write posts about JavaScript!!
        </p>
        <p>
          kyotojs.hatenablog.jp is powered by <a href="http://hatenablog.com/">Hatena Blog</a>.
        </p>
      </CellEl>
      <CellEl>
        <a href="http://kyotojs.hatenablog.jp/">
          <BlogImgEl src="/static/blog_screenshot.png" alt="Kyoto.js Blog Screenshot"/>
        </a>
      </CellEl>
    </CellsEl>
  </SectionEl>
);
