const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (wrapperObj_props) => {
  //console.log(wrapperObj_props);
  return (
    <p>
      {wrapperObj_props.part.name} {wrapperObj_props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  //console.log(props);
  return (
    <div>
      <Part part={props.parts[0]} />{" "}
      {/*send an object named 'part' that is wrapped by var 'props'*/}
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
