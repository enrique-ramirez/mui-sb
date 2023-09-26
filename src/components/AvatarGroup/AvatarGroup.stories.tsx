import AvatarGroup from '.';

import type { AvatarGroupProps } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const componentInfo: Meta<AvatarGroupProps> = {
  component: AvatarGroup,
  args: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Playground: StoryObj<AvatarGroupProps> = {};

export default componentInfo;
export { Playground };
