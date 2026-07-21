import "./ErrorMessage.css";

const ErrorMessage = ({
  message = "Something went wrong",
}) => {
  return (
    <div className="error-box">
      {message}
    </div>
  );
};

export default ErrorMessage;