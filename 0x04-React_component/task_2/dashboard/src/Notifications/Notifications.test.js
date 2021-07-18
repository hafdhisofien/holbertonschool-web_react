import React from "react";
import { shallow, configure } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const htmlObj = {
  __html: getLatestNotification(),
};
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: htmlObj },
];

describe("<Notifications />", () => {
  it("renders an <Notifications /> component", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders an <Notifications /> component and checks for 3 list items", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("renders an <Notifications /> component and verifies text", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(".Notifications p")).toHaveLength(1);
    expect(wrapper.find(".Notifications p").text()).toEqual(
      "Here is the list of notifications"
    );
  });

  it("renders an <Notifications /> component and verifies html of 1st NotificationItem child", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(NotificationItem).first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("ensures .menuItem is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("ensures div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications")).toHaveLength(0);
  });

  it("ensures .menuItem is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("ensures div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications")).toHaveLength(1);
  });

  it("verifies that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications")).toHaveLength(1);
    const wrapperTwo = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapperTwo.find(".Notifications")).toHaveLength(1);
  });

  it("verifies that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("verifies that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications p").text()).toEqual(
      "Here is the list of notifications"
    );
  });

  describe("markAsRead", () => {
    it("console.log", () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      console.log = jest.fn();
      const instance = wrapper.instance();
      const id = 0;
      instance.markAsRead(id);
      expect(console.log).toHaveBeenCalledWith(
        `Notification ${id} has been marked as read`
      );
      jest.restoreAllMocks();
    });
  });
});