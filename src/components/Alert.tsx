import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  onClickBtn: () => void;
}
const Alert = ({ children, onClickBtn }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClickBtn}
      ></button>
    </div>
  );
};

export default Alert;
