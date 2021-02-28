import { styled } from "frontity";

const Button = styled.button`
  background-image: var(--gradient-secondary);
  font-size: 1.8rem;
  border: none;
  border-radius: 9999rem;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  line-height: 1.25;
  padding: 1rem 4rem;
  text-decoration: none;
  text-transform: uppercase;
  font-family: inherit;
  box-shadow: var(--shadow-lg);
`;

export default Button;
