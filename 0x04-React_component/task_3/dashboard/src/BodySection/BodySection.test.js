import React from "react";
import BodySection from "./BodySection";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<BodySection />", () => {
  it("with children and heading", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find(".bodySection").first().exists()).toEqual(true);
    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("h2").text()).toEqual("test title");
    expect(wrapper.find("p")).toHaveLength(1);
    expect(wrapper.find("p").text()).toEqual("test children node");
  });
});