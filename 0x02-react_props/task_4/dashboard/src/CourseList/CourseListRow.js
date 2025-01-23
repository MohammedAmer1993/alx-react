import "./CourseListRow.css";
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
