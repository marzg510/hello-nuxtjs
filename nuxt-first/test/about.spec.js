import { mount } from '@vue/test-utils'
import App from '@/pages/about.vue'

describe('about', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(App)
    expect(wrapper.vm).toBeTruthy()
  }),
  test('renders About', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toBe("About Page")
  })
})