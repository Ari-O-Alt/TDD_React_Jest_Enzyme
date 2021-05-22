import React from "react";

const PersonList = (props) => {
  const { people } = props;

  const allPeople = people?.map((person, index) => {
    return <li key={index}>{person.name}</li>;
  });

  return <ul>{people && people.lenght == 0 ? null : allPeople}</ul>;
};

export default PersonList;
