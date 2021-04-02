import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';
import type { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const themeOptions: ThemeOptions = {
  palette: {
    primary: amber,
    secondary: blueGrey,
  },
  typography: {
    useNextVariants: true,
  },
};

export default themeOptions;
