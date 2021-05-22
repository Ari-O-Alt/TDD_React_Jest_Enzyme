import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

// --- we create a test suite for this component (PersonList)
describe("PersonList", () => {
  it("renders an UL element", () => {
    const getPersonListWrapper = shallow(<PersonList />); // we check if the component renders
    const peopleListUls = getPersonListWrapper.find("ul"); // find an unordered list inside the component

    expect(peopleListUls).toHaveLength(1); // we expect to find just one list
  });
});
