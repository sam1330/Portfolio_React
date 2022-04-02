import React from "react"
import { mount } from "enzyme";
import Header from "../../components/AppLayout/header/Header";

describe("Header Tests", () => {
  const wrapper = mount(<Header />);
  
  test('should render <Header />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correct translation', () => {
    expect(wrapper.find('a').at(0).text().trim()).toBe("ABOUT_ME");
  });
});