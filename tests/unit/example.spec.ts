import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/header.vue'

describe('header.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
