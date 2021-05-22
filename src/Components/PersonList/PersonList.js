import React from "react";

const PersonList = (props) => {
  const { people } = props;

  const allPeople = people?.map((person, index) => {
    return <li key={index}>{person.name}</li>;
  });

  if (people && (people.lenght = 0)) {
    return <ul></ul>;
  }

  return <ul>{allPeople}</ul>;
};

export default PersonList;
