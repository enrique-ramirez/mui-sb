import MuiAvatar from '@mui/material/Avatar';
import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';

interface AvatarProps extends MuiAvatarProps {
  firstName?: string;
}

export default MuiAvatar;
export type { AvatarProps };
