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
      <TitleEl color={color.orange}>
        <TitleImageEl src="/static/logo_meetup960.png" alt="Kyoto.js Meetup"/>
      </TitleEl>
      <SubTitleEl height="60">
        Talk about JavaScript!
      </SubTitleEl>
    </HeaderEl>

    <CellsEl>
      <CellEl>
        <h4>Next: <HighlightEl shadow={color.orange} href="http://kyotojs.connpass.com/event/60422/">Kyoto.js 13</HighlightEl></h4>
        <ul>
          <li>Time: 2017-07-29 (Sat) 13:00</li>
          <li>Place: Hatena 9F, Kyoto</li>
        </ul>
        See <a target="_blank" href="https://kyotojs.connpass.com/event/60422/">event page</a> for details!
      </CellEl>
      <CellEl>
        <h4>Past Meetups</h4>
        <ul>
          <li><a target="_blank" href="https://kyotojs.connpass.com/event/46417">Kyoto.js #12</a></li>
          <li><a target="_blank" href="https://kyotojs.connpass.com/event/39462/">Kyoto.js #11</a></li>
          <li><a target="_blank" href="https://kyotojs.doorkeeper.jp/events/42568">Kyoto.js #10</a></li>
          <li><a target="_blank" href="https://kyotojs.doorkeeper.jp/events/37515">Kyoto.js #9</a></li>
          <li><a target="_blank" href="https://kyotojs.doorkeeper.jp/events/10869">Kyoto.なんか</a></li>
        </ul>
        <p>
          See <a href="https://kyotojs.doorkeeper.jp/events/past">DoorKeeper</a> for more details.
        </p>
      </CellEl>
    </CellsEl>
  </SectionEl>
);
