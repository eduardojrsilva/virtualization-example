import 'styled-components';

declare module 'styled-components' {
  interface Colors {
    black: string;
  }

  interface Fonts {
    roboto: string;
  }

  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
  }
}
