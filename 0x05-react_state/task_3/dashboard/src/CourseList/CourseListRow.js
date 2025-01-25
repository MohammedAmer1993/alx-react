import "./CourseListRow.css";
import PropTypes from "prop-types";
export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  return (
    <tr>
      {isHeader === false ? (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      ) : textSecondCell ? (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      ) : (
        <th colSpan={2}>{textFirstCell}</th>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isHeader: PropTypes.bool.isRequired,
};
