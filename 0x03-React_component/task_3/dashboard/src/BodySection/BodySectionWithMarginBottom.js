import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";
export default function BodySectionWithMarginBottom({ children }) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection>{children}</BodySection>
    </div>
  );
}
