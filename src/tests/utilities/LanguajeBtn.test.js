import React from "react";
import { shallow } from "enzyme/build";
import LanguageBtn from "../../components/utilities/LanguageBtn";

describe("test on <LanguageBtn />", () => {
  const wrapper = shallow(<LanguageBtn />);

  test('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});