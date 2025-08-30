import propTypes from "prop-types";

const Student = ({ name, age, course }) => {
  return (
    <>
      <h1>
        {name} {age} {course}
      </h1>
    </>
  );
};
Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
};

export default Student;
