import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part1: {
      name: 'Fundamentals of React',
      exercises: 10
    },
    part2: {
      name: 'Using props to pass data',
      exercises: 7
    },
    part3: {
      name: 'State of a component',
      exercises: 14
    }
  }
  

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} /> 
    </div>
  );
};

export default App;
