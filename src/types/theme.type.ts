export interface IFontFamily {
	/** Roboto */
	default: string;
	/** sans-serif */
	secondary: string;
}

export interface ITransform {
	capitalize: string,
	lowercase: string,
	uppercase: string,
	none: string,
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
	textTransform: ITransform;
}

export interface ISizes {
	/** 2.4px */
	small1: string;
	/** 4.8px */
	small2: string;
	/** 7.2px */
	small3: string;
	/** 12px */
	small4: string;
	/** 16px */
	small5: string;
	/** 18.4px */
	regular1: string;
	/** 20.8px */
	regular2: string;
	/** 23.2px */
	regular3: string;
	/** 28px */
	regular4: string;
	/** 32px */
	regular5: string;
	/** 34.4px */
	medium1: string;
	/** 36.8px */
	medium2: string;
	/** 39.2px */
	medium3: string;
	/** 44px */
	medium4: string;
	/** 48px */
	medium5: string;
	/** 50.4px */
	large1: string;
	/** 52.8px */
	large2: string;
	/** 55.2px */
	large3: string;
	/** 60px */
	large4: string;
	/** 64px */
	large5: string;
	/** 66.4px */
	large6: string,
	/** 68.8px */
	large7: string,
	/** 71.2px */
	large8: string,
	/** 80px */
	large9: string,
	/** 96px */
	large10:  string,
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

export interface ILogo {
	/** 40px */
	small: string;
	/** 60px */
	xsmall: string;
	/** 80px */
	medium: string;
	/** 100px */
	regular: string;
	/** 150px */
	large: string;
	/** 200px */
	xlarge: string;
}

export interface ITheme {
	font: IFont;
	sizes: ISizes;
	colors: IColors;
	borderRadius: ISizes;
	logoSizes: ILogo;
}

export interface IThemeProvider {
	theme: ITheme;
}
