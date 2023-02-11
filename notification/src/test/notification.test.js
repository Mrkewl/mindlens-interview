import notification from "../components/notification.vue";

import { shallowMount } from "@vue/test-utils";
describe("Test notification", () => {
  // Inspect the raw component options
  const wrapper = shallowMount(notification);
  it("when color = 0 or blue", async () => {
    await wrapper.setProps({ color: 0 });
    expect(wrapper.vm.color).toEqual(0);
    expect(wrapper.find("div").classes()).toContain("bluenotification");
  });

  it("when color = 1 or red", async () => {
    await wrapper.setProps({ color: 1 });
    expect(wrapper.vm.color).toEqual(1);
    expect(wrapper.find("div").classes()).toContain("rednotification");
  });
  it("when color = 2 or orange", async () => {
    await wrapper.setProps({ color: 2 });
    expect(wrapper.vm.color).toEqual(2);
    expect(wrapper.find("div").classes()).toContain("orangenotification");
  });
  it("when color = 3 or green", async () => {
    await wrapper.setProps({ color: 3 });
    expect(wrapper.vm.color).toEqual(3);
    expect(wrapper.find("div").classes()).toContain("greennotification");
  });



  it("when variation has title buttons and description", async () => {
    await wrapper.setProps({ variations: 0 });
    expect(wrapper.vm.variations).toEqual(0);
    expect(wrapper.find("h2").classes()).toContain("header");
    expect(wrapper.find("h4")).toBeTruthy();
    expect(
      wrapper.find("div").findAll("div").at(1).find("div").classes()
    ).toContain("buttons-column");
  });

  it("when variation has no buttons but description and title", async () => {
    await wrapper.setProps({ variations: 1 });
    expect(wrapper.vm.variations).toEqual(1);
    expect(wrapper.find("h2").classes()).toContain("header");
    expect(wrapper.find("h4")).toBeTruthy();
    //  This is to check button does not exist
    expect(
      wrapper.find("div").findAll("div").at(1).find("div").exists()
    ).toBeFalsy();
  });


  it("when variation has  title only", async () => {
    await wrapper.setProps({ variations: 2 });
    expect(wrapper.vm.variations).toEqual(2);
    expect(wrapper.find("h2").classes()).toContain("header");
    //Check paragraph dont exist
    expect(
      wrapper.find("div").findAll("div").at(1).find("h4").exists()
    ).toBeFalsy();
    //  This is to check button does not exist
    expect(
      wrapper.find("div").findAll("div").at(1).find("div").exists()
    ).toBeFalsy();
  });



  it("when variation has  title only unbold", async () => {
    await wrapper.setProps({ variations: 3 });
    expect(wrapper.vm.variations).toEqual(3);
    expect(wrapper.find("h2").classes()).toContain("headerunbold");
    //Check paragraph dont exist
    expect(
      wrapper.find("div").findAll("div").at(1).find("h4").exists()
    ).toBeFalsy();
    //  This is to check button does not exist
    expect(
      wrapper.find("div").findAll("div").at(1).find("div").exists()
    ).toBeFalsy();
  });
});
