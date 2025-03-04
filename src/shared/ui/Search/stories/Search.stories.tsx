import { Meta, StoryObj } from '@storybook/react'
import { Search } from '../Search'


const meta: Meta<typeof Search> = {
component: Search,
title: 'ui/Search',
}


export default meta
type Story = StoryObj<typeof Search>


export const Normal: Story = {}
Normal.args = {
    placeholder: 'Искать',
}