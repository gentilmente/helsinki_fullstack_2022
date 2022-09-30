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

/* const Total = (props) => {
  console.log(props);
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
}; */

const Course = ({ course }) => {
  //console.log(course);
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
