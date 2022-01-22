import styled from "styled-components";
import { mb_3, small_font_size } from "../../Styles/Variables";

export const Subtitle = styled.span`
  text-align: center;
  display: block;
  font-size: ${small_font_size};
  margin-bottom: ${mb_3};

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;