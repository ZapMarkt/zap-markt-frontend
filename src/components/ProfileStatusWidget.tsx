import { Badge, Tooltip, IconButton, Avatar, Typography, Stack } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { rolesService } from "../services/RolesServices";
import { useQuery } from "@tanstack/react-query";

export function ProfileStatusWidget() {
  const query = useQuery({
    queryKey: ["authenticated-user"],
    queryFn: rolesService.getMyInfo,
  });

  return (
    <Stack
      direction="row"
      spacing={2.5}
    >
      <Badge color="error">
        <Tooltip title="Notificações">
          <IconButton size="large">
            <NotificationsIcon />
          </IconButton>
        </Tooltip>
      </Badge>
      <Avatar
        alt={query.data?.name}
        sx={{ width: 48, height: 48 }}
      />
      <Stack>
        <Typography
          variant="caption"
          fontSize={18}
          fontWeight={600}
          display={"block"}
        >
          {query.data?.name}
        </Typography>
        <Typography variant="caption">{query.data?.role.name}</Typography>
      </Stack>
    </Stack>
  );
}
