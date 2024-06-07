import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';

const Profile = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Tooltip title="Notificações">
        <IconButton size="large" sx={{ marginRight: '30px' }}>
          <Badge color="error" variant="dot" showZero>
            <NotificationsIcon sx={{ padding: 0 }} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Avatar sx={{ width: '48px', height: '48px', marginRight: '14px' }} />
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        marginRight={'112px'}
      >
        <Typography
          variant="caption"
          fontSize={18}
          fontWeight={600}
          display={'block'}
          lineHeight={1}
          marginBottom={'2px'}
        >
          João Pedro Ferreira
        </Typography>
        <Typography
          fontSize={16}
          fontWeight={400}
          color={'#A5A5A5'}
          variant="caption"
        >
          Administrador
        </Typography>
      </Box>
      <KeyboardArrowDownRoundedIcon />
    </Box>
  );
};

export default Profile;
