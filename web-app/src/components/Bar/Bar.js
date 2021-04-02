import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as React from 'react';

type Props = {
  actionItems?: ?Array<{
    click: () => void,
    icon: React.Node,
  }>,
  classes: { [string]: string },
  navigationClick: () => void,
  navigationIcon?: ?React.Node,
  title: string,
};

const Bar = ({
  actionItems, classes, navigationClick, navigationIcon, title,
}: Props) => (
  <AppBar color="default" position="static">
    <Toolbar>

      <IconButton className={classes.navigationButton} color="inherit" onClick={navigationClick}>
        {navigationIcon || <ArrowBackIcon />}
      </IconButton>

      <Typography className={classes.title} color="inherit" noWrap variant="h6">
        {title}
      </Typography>

      {actionItems && actionItems.length > 0 && (
        <div className={classes.actionItems}>
          {actionItems.map(({ click, icon }, index) => (
            <IconButton
              color="inherit"
              key={index} // eslint-disable-line react/no-array-index-key
              onClick={click}
            >
              {icon}
            </IconButton>
          ))}
        </div>
      )}

    </Toolbar>
  </AppBar>
);

Bar.defaultProps = {
  actionItems: undefined,
  navigationIcon: undefined,
};

export default Bar;
