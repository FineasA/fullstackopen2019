import React from 'react';

const Header = props => {
  //   console.log(props.course.id);
  return <h1>{props.course.name}</h1>;
};

const Total = props => {
  const coursesMap = props.course.parts.map(course => {
    // console.log('course: ', course);
    return course.exercises;
  });
  //   console.log('coursesMap: ', coursesMap);
  const total = coursesMap.reduce((a, b) => a + b, 0);

  return <p>Number of exercises: {total}</p>;
};

const Part = props => {
  return <ul>{props.value}</ul>;
};

const Content = props => {
  const courseList = props.courses.map(course => (
    <div key={course.id}>
      <Header key={course.id} course={course} />
      <Part
        value={course.parts.map(innerCourse => {
          return (
            <li key={innerCourse.id}>
              {innerCourse.name} {innerCourse.exercises}
            </li>
          );
        })}
      />
      <Total course={course} />
    </div>
  ));
  return <ul>{courseList}</ul>;
};

const Course = props => {
  return (
    <div>
      <Content courses={props.courses} />
    </div>
  );
};

export default Course;
