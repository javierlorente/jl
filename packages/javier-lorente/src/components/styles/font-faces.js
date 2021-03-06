import { Global, css } from "frontity";
import baumansWOFF2 from "../../fonts/baumans_regular-webfont.woff2";
import sourceSansProRegWOFF2 from "../../fonts/sourcesanspro-regular-webfont.woff2";
import sourceSansProBoldWOFF2 from "../../fonts/sourcesanspro-bold-webfont.woff2";

const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Source Sans Pro";
        src: url(${sourceSansProRegWOFF2}) format("woff2");

        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Source Sans Pro";
        src: url(${sourceSansProBoldWOFF2}) format("woff2");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Baumans";
        src: url(${baumansWOFF2}) format("woff2");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);

export default FontFace;
