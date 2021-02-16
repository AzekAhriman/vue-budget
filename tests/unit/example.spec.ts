import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/header.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('header.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      localVue,
      router
    })
    expect(wrapper.text()).toContain('Family')
  })
})
