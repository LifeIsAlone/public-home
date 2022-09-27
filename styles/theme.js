import colors from './colors';

const size = {
    mobile: '400px',
    tablet: '768px',
    laptopS: '1023px',
    laptopM: '1239px',
    desktop: '1240px',
};

const theme = {
    ...colors,
    primaryColor: '#none',
    secondaryColor: '#none',
    mobile: `(max-width): ${size.mobile}`,
    tablet: `(max-width: ${size.tablet})`,
    laptopS: `(max-width: ${size.laptopS})`,
    laptopM: `(max-width: ${size.laptopM})`,
    desktop: `(min-width: ${size.desktop})`,
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '48px',
        '6xl': '64px',
    },
    lineHeights: {
        tiny: '0.8',
        normal: 'normal',
        base: '1',
        shorter: '1.2',
        short: '1.4',
        tall: '1.6',
        taller: '2',
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
    },
    shadow: {
        //search of https://getcssscan.com/css-box-shadow-examples
        normal: 'box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
};

export default theme;
