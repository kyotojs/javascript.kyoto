import styled from 'styled-components';
import { color, size, breakpoint } from './styles'
import * as Section from './Section'
import ImgLink from './ImgLink'

const SectionEl = Section.SectionEl;
const HighlightEl = Section.HighlightEl;
const HeaderEl = Section.HeaderEl;
const TitleEl = Section.TitleEl;
const TitleImageEl = Section.TitleImageEl;
const SubTitleEl = Section.SubTitleEl;
const DescriptionEl = styled.div`
  text-align     : center;
  vertical-align : top;
  margin         : 20px auto 60px;
`;
const CellsEl = Section.CellsEl;
const CellEl = Section.CellEl.extend`
  @media (max-width: ${breakpoint.tablet}) {
      padding: 20px;
  }
`;


export default () => (
  <SectionEl>
    <HeaderEl>
      <TitleEl color={color.blue}>
        <TitleImageEl src="/static/logo_slack960.png" alt="Kyoto.js Slack"/>
      </TitleEl>

      <SubTitleEl>
        Get Invitation <HighlightEl shadow={color.blue} href="//kyotojs.herokuapp.com/">HERE!</HighlightEl>
      </SubTitleEl>
    </HeaderEl>

    <CellsEl>
      <CellEl>
        <h4>We talk about...</h4>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript, flowtype</li>
          <li>React, Angular, Vue</li>
          <li>CSS, Sass, PostCSS</li>
        </ul>
        <p className="andMore">
          ...and more!
        </p>
      </CellEl>
      <CellEl>
        <h4>Members</h4>
        <p>
          59 people joined now!
        </p>
      </CellEl>
    </CellsEl>
  </SectionEl>
);
