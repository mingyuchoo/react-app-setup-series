import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InboxIcon from '@material-ui/icons/Inbox';
import CreateIcon from '@material-ui/icons/Create';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction label="불편해요" icon={<InboxIcon />} />
      <BottomNavigationAction label="글쓰기" icon={<CreateIcon />} />
      <BottomNavigationAction label="알림/공지" icon={<NotificationsIcon />} />
      <BottomNavigationAction label="마이페이지" icon={<FaceIcon />} />
    </BottomNavigation>
  );
}
