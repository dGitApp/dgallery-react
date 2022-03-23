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
  ownerAddress: '0xA83e5c7977151cfa9a86b840e0F4299C6288f63a',
  darkMode: true
} as NftGalleryProps;

export const Inline = Template.bind({});

Inline.args = { 
    isInline: true,
    ownerAddress: '0xA83e5c7977151cfa9a86b840e0F4299C6288f63a'
} as NftGalleryProps;

