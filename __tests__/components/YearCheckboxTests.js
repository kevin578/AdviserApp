import React from "react";
import renderer from "react-test-renderer";
import { YearCheckbox } from "../../components/YearCheckbox";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <YearCheckbox
        year="Freshman"
        user={{
          year: "Freshman"
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
