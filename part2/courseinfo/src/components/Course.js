import React from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = (wrapperObj_props) => {
  //console.log(wrapperObj_props);
  return (
    <p>
      {wrapperObj_props.part.name} {wrapperObj_props.part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  //console.log(parts);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  //console.log(parts);
  return (
    <b>
      Number of exercises
      {parts.reduce((result, part) => result + part.exercises, 0)}
    </b>
  );
};

const Course = ({ course }) => {
  //console.log(course);
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
