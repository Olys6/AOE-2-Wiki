const themeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: 'rgb(254, 88, 88)',
    },
    secondary: {
      main: 'rgb(255, 255, 255)',
    },
    background: {
      default: '#202020',
      paper: '#545454',
    },
    success: {
      main: '#ff0f8b',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(243,240,243,0.9)',
      disabled: 'rgba(220,220,220,0.61)',
      hint: 'rgba(238,115,245,0.57)',
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiAppBar: {
      color: 'inherit',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: 'rgb(178, 10, 97)',
        color: '#fff',
      },
    },
  },
};

export default themeOptions