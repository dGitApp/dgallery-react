import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NftGallery, NftGalleryProps } from '../src/';
import { version } from '../package.json';

const meta: Meta = {
  title: `NftGallery v${version}`,
  component: NftGallery,
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NftGalleryProps> = (args) => <NftGallery {...args} />;

export const defaultView = Template.bind({});

defaultView.args = {
  ownerAddress: '0x97927731FCdB42C6961b36856eFdF42193388e6B',
  darkMode: true
} as NftGalleryProps;

export const Inline = Template.bind({});

Inline.args = { 
    isInline: true,
    ownerAddress: '0x97927731FCdB42C6961b36856eFdF42193388e6B'
} as NftGalleryProps;

