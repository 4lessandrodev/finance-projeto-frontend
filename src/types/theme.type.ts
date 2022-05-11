export interface IFontFamily {
	/** Roboto */
	default: string;
	/** sans-serif */
	secondary: string;
  }
  
  export interface IWeights {
	/** 100 */
	thin: string;
	/** 300 */
	light: string;
	/** 400 */
	regular: string;
	/** 500 */
	medium: string;
	/** 700 */
	bold: string;
	/** 900 */
	black: string;
  }
  
  export interface IFont {
	family: IFontFamily;
	weights: IWeights;
	sizes: ISizes;
  }
  
  export interface ISizes {
	/** 2px */
	small1: string;
	/** 4px */
	small2: string;
	/** 6px */
	small3: string;
	/** 8px */
	small4: string;
	/** 10px */
	small5: string;
	/** 12px */
	regular1: string;
	/** 12px */
	regular2: string;
	/** 12px */
	regular3: string;
	/** 12px */
	regular4: string;
	/** 12px */
	regular5: string;
	/** 14px */
	medium1: string;
	/** 16px */
	medium2: string;
	/** 18px */
	medium3: string;
	/** 20px */
	medium4: string;
	/** 22px */
	medium5: string;
	/** 24px */
	large1: string;
	/** 26px */
	large2: string;
	/** 28px */
	large3: string;
	/** 30px */
	large4: string;
	/** 32px */
	large5: string;
  }
  
  export interface IColors {
	  /** #ff7a00 */
	  orange: string;
	  /** #ca0d0d */
	  red: string;
	  /** #075318 */
	  green: string;
	  /** #000000 */
	  black: string;
	  /** #8b8b8b */
	  gray1: string;
	  /** #a39c9c */
	  gray2: string;
	  /** #a4a4a4 */
	  gray3: string;
	  /** #d2d2d2 */
	  gray4: string;
	  /** #f1eeee */
	  gray5: string;
	  /** #ffffff */
	  white: string;
  }
  
  export interface ITheme {
	font: IFont;
	sizes: ISizes;
	colors: IColors;
	borderRadius: ISizes;
  }
  
  export interface IThemeProvider {
	theme: ITheme;
  }
  