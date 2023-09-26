import Avatar from '.';

import type { AvatarProps } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const componentInfo: Meta<AvatarProps> = {
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Playground: StoryObj<AvatarProps> = {};

export default componentInfo;
export { Playground };
