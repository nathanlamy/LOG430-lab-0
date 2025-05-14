import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders a message', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello World' } })
    expect(wrapper.text()).toContain('Hello World')
  })

  it('changes color when button is clicked', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test' } })

    const h1 = wrapper.get('h1')
    const button = wrapper.get('button')

    const initialColor = h1.element.style.color

    await button.trigger('click')

    const newColor = h1.element.style.color

    expect(newColor).not.toBe(initialColor)
    expect(newColor).not.toBe('')
  })
})