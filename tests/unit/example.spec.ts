import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(Vuetify);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const localVue = createLocalVue();

describe("HelloWorld.vue", () => {
  let vuetify: Vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders props.msg when passed", () => {
    const localVue = createLocalVue();
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
