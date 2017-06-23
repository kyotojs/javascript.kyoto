import styled from 'styled-components';
import { breakpoint, size } from './styles'
import TopSection    from './TopSection'
import SlackSection  from './SlackSection'
import MeetupSection from './MeetupSection'
import BlogSection   from './BlogSection'

const MainEl = styled.div`
  position : relative;
  top      : ${size.header};
  width    : 100%;
  margin   : 0 auto;
  padding-bottom : ${size.header};
`;

// margin-bottom : 30vh;
const SectionEl = styled.section`
  width         : 100%;
  margin-top    : -${size.header};
  padding-top   : ${size.header};
  @media (max-width: ${breakpoint.tablet}) {
    margin-bottom : 30px;
  }
`;
const TopSectionEl = SectionEl.extend`
  @media (max-width: ${breakpoint.tablet}) {
    margin-bottom : 60px;
  }
`;

const Main = () => (
  <MainEl>
    <SectionEl id="top">
      <TopSection/>
    </SectionEl>

    <SectionEl id="slack">
      <SlackSection/>
    </SectionEl>

    <SectionEl id="meetup">
      <MeetupSection/>
    </SectionEl>

    <SectionEl id="blog">
      <BlogSection/>
    </SectionEl>
  </MainEl>
);

export default Main;
