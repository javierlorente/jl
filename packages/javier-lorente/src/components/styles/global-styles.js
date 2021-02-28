import { css } from "frontity";

const variables = css`
  :root {
    /* Typography */
    --family-fallback: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, sans-serif;
    --family-body: "Source Sans Pro", var(--family-fallback);
    --family-heading: "Baumans", var(--family-fallback);

    /* Colors */
    /* @TODO: create neutral colors */
    --color-dark: #082737;
    --color-dark2: #0d405b;
    --color-light: #fbeed9;
    --color-light2: #fdf6eb;
    --color-grey: #90a4ae;
    --color-yellow: #fcb458;
    --color-purple: #9725a3;
    --color-primary: #ff6347;

    --gradient-primary: linear-gradient(
      60deg,
      var(--color-primary),
      var(--color-yellow)
    );
    --gradient-secondary: linear-gradient(
      60deg,
      var(--color-primary),
      var(--color-purple)
    );

    /* Shadows */
    --shadow-md: 0px 1px 10px rgb(0, 0, 0, 0.05);
    --shadow-lg: 0px 5px 15px rgb(0, 0, 0, 0.25);
    --shadow-xl: 0px 10px 20px rgb(0, 0, 0, 0.45);

    /* Layout */
    --container-md: 900px;
    --container-lg: 168rem;
  }
`;
const cssReset = css`
  html,
  body {
    border: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  address,
  big,
  cite,
  code,
  em,
  font,
  img,
  small,
  strike,
  sub,
  sup,
  li,
  ol,
  ul,
  fieldset,
  form,
  label,
  legend,
  button,
  table,
  caption,
  tr,
  th,
  td {
    border: none;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    text-align: inherit;
  }

  blockquote::before,
  blockquote::after {
    content: "";
  }

  a,
  path {
    transition: all 0.15s linear;
  }
`;

const documentSetup = () => css`
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    background: var(--color-light);
    box-sizing: border-box;
    color: var(--color-dark2);
    font-family: var(--family-body);
    font-size: 1.8rem;
    text-align: left;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    word-wrap: break-word;
  }

  #site-content {
    overflow: hidden;
  }
`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;

const elementBase = () => css`
  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .faux-heading {
    font-family: var(--family-heading);
    font-weight: normal;
    line-height: 1.25;
    margin: 3.5rem 0 2rem;
  }

  h1,
  .heading-size-1 {
    font-size: 3.6rem;
    font-weight: 800;
    line-height: 1.138888889;
  }

  h2,
  .heading-size-2 {
    font-size: 3.2rem;
  }

  h3,
  .heading-size-3 {
    font-size: 2.8rem;
  }

  h4,
  .heading-size-4 {
    font-size: 2.4rem;
  }

  h5,
  .heading-size-5 {
    font-size: 2.1rem;
  }

  h6,
  .heading-size-6 {
    font-size: 1.6rem;
    letter-spacing: 0.03125em;
    text-transform: uppercase;
  }

  p {
    line-height: 1.5;
    margin: 0 0 1em 0;
  }

  em,
  i,
  q,
  dfn {
    font-style: italic;
  }

  em em,
  em i,
  i em,
  i i,
  cite em,
  cite i {
    font-weight: bolder;
  }

  big {
    font-size: 1.2em;
  }

  small {
    font-size: 0.75em;
  }

  b,
  strong {
    font-weight: 700;
  }

  ins {
    text-decoration: underline;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  abbr,
  acronym {
    cursor: help;
  }

  address {
    line-height: 1.5;
    margin: 0 0 2rem 0;
  }

  hr {
    border-style: solid;
    border-width: 0.1rem 0 0 0;
    margin: 4rem 0;
  }

  a {
    color: var(--color-purple);
    text-decoration: none;
  }
  input[type="submit"],
  button {
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
  }
  input:not([type="submit"]):not([type="search"]),
  textarea,
  select {
    border: none;
    width: 100%;
    background-color: var(--color-light2);
    border-radius: 5px;
    box-shadow: var(--shadow-lg);
    padding: 1.5rem;
    font-size: 1.8rem;
    color: var(--color-dark2);
    font-family: inherit;
    margin-bottom: 1.5rem;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
    &:focus {
      outline: rgba(0, 0, 0, 0.2) dashed 1px;
    }
  }
`;

const listStyle = css`
  ul,
  ol {
    margin: 0 0 3rem 3rem;
  }

  ul {
    list-style: disc;
  }

  ul ul {
    list-style: circle;
  }

  ul ul ul {
    list-style: square;
  }

  ol {
    list-style: decimal;
  }

  ol ol {
    list-style: lower-alpha;
  }

  ol ol ol {
    list-style: lower-roman;
  }

  li {
    line-height: 1.5;
    margin: 0.5rem 0 0 2rem;
  }

  li > ul,
  li > ol {
    margin: 1rem 0 0 2rem;
  }

  .reset-list-style,
  .reset-list-style ul,
  .reset-list-style ol {
    list-style: none;
    margin: 0;
  }

  .reset-list-style li {
    margin: 0;
  }

  dt,
  dd {
    line-height: 1.5;
  }

  dt {
    font-weight: 700;
  }

  dt + dd {
    margin-top: 0.5rem;
  }

  dd + dt {
    margin-top: 1.5rem;
  }
`;

const quoteStyle = () => css`
  blockquote {
    border-color: var(--color-primary);
    border-style: solid;

    /*rtl:ignore*/
    border-width: 0 0 0 0.2rem;
    color: inherit;
    font-size: 1em;
    margin: 4rem 0;

    /*rtl:ignore*/
    padding: 0.5rem 0 0.5rem 2rem;
  }

  cite {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
  }

  blockquote cite {
    display: block;
    margin: 2rem 0 0 0;
  }

  blockquote p:last-child {
    margin: 0;
  }
`;

const codeStyle = () => css`
  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 0.9em;
    padding: 0.4rem 0.6rem;
  }

  code,
  kbd,
  samp {
    background: rgba(0, 0, 0, 0.075);
    border-radius: 0.2rem;
  }

  pre {
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    line-height: 1.5;
    margin: 4rem 0;
    overflow: auto;
    padding: 3rem 2rem;
    text-align: left;
  }

  pre code {
    background: transparent;
    padding: 0;
  }
`;

const mediaStyle = () => css`
  figure {
    display: block;
    margin: 0;
  }

  iframe {
    display: block;
    max-width: 100%;
  }

  video {
    display: block;
  }

  svg,
  img,
  embed,
  object {
    display: block;
    height: auto;
    max-width: 100%;
  }

  figcaption,
  .wp-caption-text {
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1.5rem;
  }

  figcaption a,
  .wp-caption-text a {
    color: inherit;
  }
`;

const tableStyles = () => css`
  table {
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    font-size: 1.6rem;
    margin: 4rem 0;
    max-width: 100%;
    overflow: hidden;
    width: 100%;
  }

  .alignleft > table {
    margin: 0;
  }

  .alignright > table {
    margin: 0;
  }

  th,
  td {
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    line-height: 1.4;
    margin: 0;
    overflow: visible;
    padding: 0.5em;
  }

  caption {
    background: rgba(0, 0, 0, 0.2);
    font-weight: 600;
    padding: 0.5em;
    text-align: center;
  }

  thead {
    vertical-align: bottom;
    white-space: nowrap;
  }

  th {
    font-weight: 700;
  }
`;

const globalStyle = () =>
  css([
    cssReset,
    variables,
    documentSetup(),
    accessibilitySettings,
    elementBase(),
    listStyle,
    quoteStyle(),
    codeStyle(),
    mediaStyle(),
    tableStyles(),
  ]);

export default globalStyle;
