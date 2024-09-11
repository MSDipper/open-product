import { Meta, StoryObj } from '@storybook/react';
import { Image } from '../Image';
import logo from '/logo.svg'; 

const meta: Meta<typeof Image> = {
component: Image,
title: 'ui/Logo',
};

export default meta;
type Story = StoryObj<typeof Image>


export const Normal: Story = {};
Normal.args = {
    src:logo,
    alt: 'logo',
};