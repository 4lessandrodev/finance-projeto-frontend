import { ITheme } from '@types';

export default {
    font: {
        family: {
            default: "'Roboto'",
            secondary: "sans-serif",
        },
        weights: {
            thin: '100',
            light: '300',
            regular: '400',
            medium: '500',
            bold: '700',
            black: '900',
        },
        sizes: {
            /** 2px */
            small1: '0.12rem',
            /** 4px */
            small2: '0.25rem',
            /** 6px */
            small3: '0.37rem',
            /** 8px */
            small4: '0.5rem',
            /** 10px */
            small5: '0.62rem',
            /** 12px */
            regular1: '0.75rem',
            /** 14px */
            regular2: '0.87rem',
            /** 16px */
            regular3: '1rem',
            /** 18px */
            regular4: '1.12rem',
            /** 20px */
            regular5: '1.25rem',
            /** 22px */
            medium1: '1.37rem',
            /** 24px */
            medium2: '1.5rem',
            /** 26px */
            medium3: '1.62rem',
            /** 28px */
            medium4: '1.75rem',
            /** 30px */
            medium5: '1.87rem',
            /** 32px */
            large1: '2rem',
            /** 34px */
            large2:  '2.2rem',
            /** 36px */
            large3: '2.25rem',
            /** 38px */
            large4: '2.37rem',
            /** 40px */
            large5:  '2.5rem',
        },
        textTransform: {
            /** capitalize */
            capitalize: 'capitalize',
            /** lowercase */
            lowercase: 'lowercase',
            /** uppercase */
            uppercase: 'uppercase',
            /** '' */
            none: 'none'
        }
    },
    colors: {
      orange: '#ff7a00',
      red: '#ca0d0d',
      lightRed: '#e84646',
        lightGreen: '#33a34c',
        lightBackGreen: '#9ffcbe',
      green: '#075318',
      black: '#000000',
      gray1: '#8b8b8b',
      gray2: '#a39c9c',
      gray3: '#a4a4a4',
      gray4: '#d2d2d2',
      gray5: '#f1eeee',
      white: '#ffffff',
    },
    sizes: {
        /** 2.4px */
        small1: '0.15rem',
        /** 4.8px */
        small2: '0.30rem',
        /** 7.2px */
        small3: '0.45rem',
        /** 12px */
        small4: '0.75rem',
        /** 16px */
        small5: '1rem',
        /** 18.4px */
        regular1: '1.15rem',
        /** 20.8px */
        regular2: '1.30rem',
        /** 23.2px */
        regular3: '1.45rem',
        /** 28px */
        regular4: '1.75rem',
        /** 32px */
        regular5: '2rem',
        /** 34.4px */
        medium1: '2.15rem',
        /** 36.8px */
        medium2: '2.30rem',
        /** 39.2px */
        medium3: '2.45rem',
        /** 44px */
        medium4: '2.75rem',
        /** 48px */
        medium5: '3rem',
        /** 50.4px */
        large1: '3.15rem',
        /** 52.8px */
        large2:  '3.30rem',
        /** 55.2px */
        large3: '3.45rem',
        /** 60px */
        large4: '3.75rem',
        /** 64px */
        large5: '4rem',
        /** 66.4px */
        large6: '4.15rem',
        /** 68.8px */
        large7: '4.30rem',
        /** 71.2px */
        large8: '4.45rem',
        /** 80px */
        large9: '5rem',
        /** 96px */
        large10:  '6rem',
    },
    logoSizes: {
        /** 40px */
        small: '40px',
        /** 60px */
        xsmall: '60px',
        /** 80px */
        medium: '80px',
        /** 100px */
        regular: '100px',
        /** 150px */
        large: '150px',
        /** 200px */
        xlarge: '200px'
    }
} as Partial<ITheme>;
