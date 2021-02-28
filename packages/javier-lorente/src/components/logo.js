import { connect, styled } from "frontity";
import Link from "./link";

const Logo = ({ state }) => (
  <HeadingStyled>
    <Link link="/">{state.theme.logo}</Link>
  </HeadingStyled>
);

export default connect(Logo);

const HeadingStyled = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  line-height: 1;
  background-image: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 auto;
  @media (min-width: 700px) {
    font-size: 2.4rem;
  }
  @media (min-width: 1000px) {
    margin-left: 0;
  }
`;
