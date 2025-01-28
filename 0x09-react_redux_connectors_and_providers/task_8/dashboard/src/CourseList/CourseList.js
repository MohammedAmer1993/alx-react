import "./CourseList.css";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
export default function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow
          textFirstCell="Available courses"
          isHeader={true}
        ></CourseListRow>
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        ></CourseListRow>
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell={"No course available yet"}
            isHeader={true}
          />
        ) : (
          listCourses.map((item) => (
            <CourseListRow
              key={item.id}
              textFirstCell={item.name}
              textSecondCell={item.credit}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired, // id is a required number
  name: PropTypes.string.isRequired, // name is a required string
  credit: PropTypes.number.isRequired, // credit is a required number
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};
