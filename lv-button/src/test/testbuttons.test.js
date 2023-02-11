import primaryIcon from "../components/primaryIcon.vue";
import secondaryIcon from "../components/secondaryIcon.vue"
import { shallowMount } from "@vue/test-utils";
describe("Test Primary button", () => {
  // Inspect the raw component options
  const wrapper = shallowMount(primaryIcon);
  it("initial data", () => {
    expect(wrapper.vm.count).toEqual(0);
    expect(wrapper.find("button").classes()).toContain("righticonbutton");
  });

  it("toggle button once", async () => {
    wrapper.vm.count = 0;
    await wrapper.vm.toggle();
    expect(wrapper.vm.count).toEqual(1);
    expect(wrapper.find("button").classes()).toContain("iconbutton");
  });

  it("toggle button twice", async () => {
    wrapper.vm.count = 0;
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    expect(wrapper.vm.count).toEqual(2);
    expect(wrapper.find("button").classes()).toContain("lefticonbutton");
  });
  it("toggle button three", async () => {
    wrapper.vm.count = 0;
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    expect(wrapper.vm.count).toEqual(3);
    expect(wrapper.find("button").classes()).toContain("actionbutton");
  });

  it("toggle button four", async () => {
    wrapper.vm.count = 0;
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    expect(wrapper.vm.count).toEqual(0);
    expect(wrapper.find("button").classes()).toContain("righticonbutton");
  });

  it("When notification is blue", async () => {
    await wrapper.setProps({ color: 0 });
    expect(wrapper.find("button").classes()).toContain("colorBlue");
  });
  it("When notification is red", async () => {
    await wrapper.setProps({ color: 1 });
    expect(wrapper.find("button").classes()).toContain("colorRed");
  });
  it("When notification is colorOrange", async () => {
    await wrapper.setProps({ color: 2 });
    expect(wrapper.find("button").classes()).toContain("colorOrange");
  });
  it("When notification is colorGreen", async () => {
    await wrapper.setProps({ color: 3 });
    expect(wrapper.find("button").classes()).toContain("colorGreen");
  });
});


describe("Test secondary button", () => {
  // Inspect the raw component options
  const wrapper = shallowMount(secondaryIcon);
  it("initial data", () => {
    expect(wrapper.vm.count).toEqual(0);
    expect(wrapper.find("button").classes()).toContain("rightSecondaryiconbutton");
  });

  it("toggle button once", async () => {
    wrapper.vm.count = 0;
    await wrapper.vm.toggle();
    expect(wrapper.vm.count).toEqual(1);
    expect(wrapper.find("button").classes()).toContain("iconbutton");
  });

  it("toggle button twice", async () => {
    wrapper.vm.count = 0;
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    expect(wrapper.vm.count).toEqual(2);
    expect(wrapper.find("button").classes()).toContain("leftSecondaryiconbutton");
  });
  it("toggle button three", async () => {
    wrapper.vm.count = 0;
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    expect(wrapper.vm.count).toEqual(3);
    expect(wrapper.find("button").classes()).toContain("actionbutton");
  });

  it("toggle button four", async () => {
    wrapper.vm.count = 0;
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    await wrapper.vm.toggle();
    expect(wrapper.vm.count).toEqual(0);
    expect(wrapper.find("button").classes()).toContain("rightSecondaryiconbutton");
  });

  
  it("When notification is blue", async () => {
    await wrapper.setProps({ color: 0 });
    expect(wrapper.find("button").classes()).toContain("colorBlue");
  });
  it("When notification is red", async () => {
    await wrapper.setProps({ color: 1 });
    expect(wrapper.find("button").classes()).toContain("colorRed");
  });
  it("When notification is colorOrange", async () => {
    await wrapper.setProps({ color: 2 });
    expect(wrapper.find("button").classes()).toContain("colorOrange");
  });
  it("When notification is colorGreen", async () => {
    await wrapper.setProps({ color: 3 });
    expect(wrapper.find("button").classes()).toContain("colorGreen");
  });
});
