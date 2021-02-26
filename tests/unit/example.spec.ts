import { shallowMount, createLocalVue } from '@vue/test-utils'
import header from '@/components/header.vue'
import barChart from '@/components/charts/barChart.vue'
import doughnutChart from '@/components/charts/doughnutChart.vue'
import lineChart from '@/components/charts/lineChart.vue'
import pieChart from '@/components/charts/pieChart.vue'
import polarChart from '@/components/charts/polarChart.vue'
import radarChart from '@/components/charts/radarChart.vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe("Mounted App", () => {
  const wrapper = shallowMount(App, {
    localVue,
    router
  });

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true)
  });
})

describe('header.vue', () => {
  const wrapper = shallowMount(header, {
    localVue,
    router
  })
  it('component exists', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.isVisible()).toBe(true);
  });

  it("has data", () => {
    expect(typeof header).toBe("function");
  });

  it("header class", () => {
    expect(wrapper.classes()).toContain('header')
  });
})

describe('barChart.vue', () => {
  it("chart component", () => {
    expect(typeof barChart).toBe("function");
  });
})

describe('doughnutChart.vue', () => {
  it("chart component", () => {
    expect(typeof doughnutChart).toBe("function");
  });
})

describe('lineChart.vue', () => {
  it("chart component", () => {
    expect(typeof lineChart).toBe("function");
  });
})

describe('pieChart.vue', () => {
  it("chart component", () => {
    expect(typeof pieChart).toBe("function");
  });
})

describe('polarChart.vue', () => {
  it("chart component", () => {
    expect(typeof polarChart).toBe("function");
  });
})

describe('radarChart.vue', () => {
  it("chart component", () => {
    expect(typeof radarChart).toBe("function");
  });
})
