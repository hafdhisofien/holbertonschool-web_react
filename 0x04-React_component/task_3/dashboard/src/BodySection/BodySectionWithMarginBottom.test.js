import React from "react";
import { shallow, configure } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<BodySectionWithMarginBottom />", () => {
  it("component and props", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(".bodySectionWithMargin").first().exists()).toEqual(
      true
    );
    expect(wrapper.find("BodySection")).toHaveLength(1);
    expect(wrapper.find("BodySection").props().title).toEqual("test title");
  });
});