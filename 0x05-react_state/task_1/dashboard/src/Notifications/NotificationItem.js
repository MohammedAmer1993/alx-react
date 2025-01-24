import "./NotificationItem.css";
import PropTypes from "prop-types";

export default function NotificationItem({
  type,
  html,
  value,
  markAsRead,
  id,
}) {
  return (
    <li
      data-testid="notificationItem"
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => {
        markAsRead(id);
      }}
    >
      {value}
    </li>
  );
}
NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};
