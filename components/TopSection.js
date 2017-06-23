import styled from 'styled-components';
import { font, color, size, breakpoint } from './styles'
import * as Section from './Section'
import ImgLink from './ImgLink'

const SectionEl = Section.SectionEl.extend`
`;
const HeaderEl = Section.HeaderEl;
const TitleEl = Section.TitleEl.extend`
  -webkit-filter: drop-shadow(4px 0.5px 0 ${color.green}) drop-shadow(-4px -0.2px 0 ${color.cyan});
  @media (max-width: ${breakpoint.tablet}) {
    -webkit-filter: drop-shadow(2px 0.5px 0 ${color.green}) drop-shadow(-3px -0.2px 0 ${color.cyan});
  }
  @media (max-width: ${breakpoint.mobile}) {
    -webkit-filter: drop-shadow(1px 0.5px 0 ${color.green}) drop-shadow(-2px -0.2px 0 ${color.cyan});
  }
`;
const SubTitleEl = Section.SubTitleEl.extend`
  margin-bottom: 60px;

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
  font-family: ${font.bold};
  font-weight: 900;
  text-decoration: none;

  @media (max-width: ${breakpoint.tablet}) {
      font-size: ${size.h4};
  }
  @media (max-width: ${breakpoint.mobile}) {
      font-size: ${size.h6};
  }

  &:hover {
    filter: drop-shadow(0 2px 0 ${p => p.shadow});
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

export default () => (
  <SectionEl>
    <HeaderEl>
      <TitleEl color={color.green}>
        <ImgLink href="/" src="/static/logo960.png" alt="Kyoto.js"/>
      </TitleEl>
      <SubTitleEl height="90">
        JavaScript Community in Kyoto
      </SubTitleEl>
    </HeaderEl>

    <CellsEl>
      <CellEl>
        <LinkEl shadow={color.green} href="#slack">
          <LinkImgEl src="/static/slack.png"/>
          <span>Slack</span>
        </LinkEl>
      </CellEl>
      <CellEl>
        <LinkEl shadow={color.orange} href="#meetup">
          <LinkImgEl src="/static/meetup.png"/>
          <span>Meetup</span>
        </LinkEl>
      </CellEl>
      <CellEl>
        <LinkEl shadow={color.yellow} href="#blog">
          <LinkImgEl src="/static/blog.png"/>
          <span>Blog</span>
        </LinkEl>
      </CellEl>
    </CellsEl>
  </SectionEl>
);

