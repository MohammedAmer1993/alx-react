import "./NotificationItem.css";
export default function NotificationItem({ type, html, value }) {
  return (
    <li
      data-testid="notificationItem"
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
    >
      {value}
    </li>
  );
}
