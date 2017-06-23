import styled from 'styled-components';
import { color, size, breakpoint } from './styles'

export const SectionEl = styled.section`
  width     : 100%;
  max-width : 960px;
  margin    : 0 auto;
  margin-bottom: 120px;
`;

export const HeaderEl = styled.div`
  text-align: center;
`;

export const TitleEl = styled.h1`
  text-align: center;
  max-height : 320px;

  filter: ${p => `drop-shadow(4px 0 0 ${p.color})`};
  @media (max-width: ${breakpoint.tablet}) {
      filter: ${p => `drop-shadow(2px 0 0 ${p.color})`};
  }
  @media (max-width: ${breakpoint.mobile}) {
      filter: drop-shadow(1px 0 0 ${p => p.color});
  }
`;

export const TitleImageEl = styled.img`
  width: 100%;
`;

export const SubTitleEl = styled.h3`
  height         : ${p => p.height}px;
  line-height    : ${p => p.height}px;
  text-align     : center;
  vertical-align : top;
  @media (max-width: ${breakpoint.tablet}) {
    height        : auto;
    font-size     : ${size.h5};
    line-height   : ${size.h3};
  }
`;

export const CellsEl = styled.div`
  display         : flex;
  flex-flow       : row wrap;
  justify-content : space-around;
`;

export const CellEl = styled.div`
  flex       : 1;
  min-width  : 240px;
  padding    : 20px 40px;
  box-sizing : border-box;
`;

export const HighlightEl = styled.a`
  text-shadow     : 2px 0 0 ${p => p.shadow};
  text-decoration : underline;
  @media (max-width: ${breakpoint.tablet}) {
      text-shadow : 1px 0 0 ${p => p.shadow};
  }
  &:hover {
      color       : ${p => p.shadow};
      text-shadow : 2px 2px 0 ${color.black};
  }
`
