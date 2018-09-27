const font = {
  fontFamily: "'Muli', 'sans-serif'",
};

const commonClpTheme = {
  border: '',
  textShadow: '',
  tableColor: '',
};

const clpTheme = {
  background: {
    defaultBackground: 'linear-gradient(330deg, #13709d 0,#005f52 100%)',
    defaultContainerBackground: 'linear-gradient(330deg, #008e96 0,#018e7b 100%)',
    activeButtonColor: '#003e3c',
    defaultButtonColor: '#005750',

    backgroundlightgrey: '#efefef',
    navBarBackground: '#fff',
    topBarBackground: '#fff',
  },
  box: {
    boxShadow1: '0px 0px 1px rgba(0, 0, 0, .2)',
    sideMenuItemMinHeight: '45px',
    sideMenuItemPaddingLeft: '14px',
    topBarHeight: '54px',
  },
  widget: {
    indicatorbackground: ' ',
  },
  font: {
    fontFamily: "'Muli', 'sans-serif'",
    sideMenuFontColor: '#fff',
    sideMenuIconColor: '#fff',
    sideMenuFontSize: '14px',
    sideMenuIconFontSize: '18px',

    topMenuAvatarFontSize: '14px',
    topMenuAvatarIconFontSize: '20px',
    topMenuAvatarIconFontColor: '#aaa',
    topMenuAvatarFontColor: '#333',

    textLight1: '#efefef',
    // username, Navbar sidebar Dashboard
    fontColorDark: '#333',
  },
  table: {
    positive: {
      background: 'rgba(255, 255, 255, 0.03)',
      color: '#9effa0',
    },
    negative: {
      background: 'rgba(255, 255, 255, 0.03)',
      color: '#ff5a57',
    },
    default: {
      background: 'rgba(255, 255, 255, 0.06)',
      color: '#fff',
    },
    tableRow: {
      border: '',
      color: '',
    },
    tableHeader: {
      border: '',

    },
    tableBody: {
      border: '',

    },
    table: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: '',
      border: '1px solid #fff',
    },
  },
};


const background = {
  tableBackground: 'rgba(255, 255, 255, 0.1)',
  tableHeaderBackground: 'rgba(255, 255, 255, 0.06)',
  clpBackground: 'linear-gradient(330deg, #13709d 0,#005f52 100%)',
};


const theme = {
  customTheme: clpTheme,
  background,
  colors: {
    alizarin: '#e74c3c',
    amber: '#ffc107',
    amethyst: '#9b59b6',
    asbestos: '#7f8c8d',
    asphalt: '#34495e',
    belize: '#2980b9',
    bloodOrange: '#ff5722',
    blue: '#2196f3',
    brand: {
      facebook: '#3b5998',
      twitter: '#00aced',
    },
    brown: '#795548',
    carrot: '#e67e22',
    clouds: '#ecf0f1',
    concrete: '#95a5a6',
    cyan: '#00bcd4',
    deepPurple: '#673ab7',
    dullOrange: '#f39c12',
    emerald: '#2ecc71',
    green: '#4caf50',
    greenSea: '#16a085',
    grey: '#9e9e9e',
    gunMetal: '#607d8b',
    indigo: '#3f51b5',
    lightBlue: '#03a9f4',
    lightGreen: '#8bc34a',
    lime: '#cddc39',
    midnightBlue: '#2c3e50',
    nephritis: '#27ae60',
    offWhite: '#fcfcfc',
    orange: '#ff9800',
    paper: '#efefef',
    pink: '#e91e63',
    plum: '#8e44ad',
    pomegranate: '#c0392b',
    pumpkin: '#d35400',
    purple: '#9c27b0',
    red: '#f44336',
    river: '#3498db',
    silver: '#bdc3c7',
    sunflower: '#f1c40f',
    teal: '#009688',
    turqoise: '#1abc9c',
    yellow: '#ffeb3b',
  },
  primaryColor: 'palevioletred',
  primaryColorInverted: '#fff',
  backgroundlightgrey: '#efefef',
  backgroundWhite: '#fff',


  activeButtonColor: '#003e3c',
  defaultButtonColor: '#005750',
  hoverButtonColor: '#005750',

  lightIconColor: '#fff',

  fontColorGrey: '#58585b',
  fontColorDark: '#333',
  fontColorLight: '#fff',

  tableFontColor: '#fff',
  tableBorderColor: '1px solid #fff',

  font,
};


export default theme;
