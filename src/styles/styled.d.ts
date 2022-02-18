import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      typography: string;
      disabled: string;
      error: string;
      success: string;
      bgColor: string;
    };
  }
}
