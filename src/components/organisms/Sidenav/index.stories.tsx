import { Story } from '@storybook/react'

import Sidenav from '.'
import MediaQueryContextProvider from '@/stores/mediaQuery'
import CommonContextProviderMock from '@/stores/__mocks__/common'

export default {
  title: 'Organisms/Sidenav',
  component: Sidenav,
}

const Template: Story = () => <Sidenav />

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <CommonContextProviderMock>
      <MediaQueryContextProvider>
        <Story />
      </MediaQueryContextProvider>
    </CommonContextProviderMock>
  ),
]
