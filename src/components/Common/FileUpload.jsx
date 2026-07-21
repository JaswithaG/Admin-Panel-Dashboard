import { useState } from "react";
import "./FileUpload.css";
import {
  validateFile,
  previewImage,
} from "../../utils/fileUpload";

const FileUpload = () => {
  const [image, setImage] = useState(null);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];

    const validation = validateFile(file);

    if (validation) {
      setError(validation);
      return;
    }

    setError("");

    setImage(previewImage(file));
  };

  return (
    <div className="upload-card">

      <h3>Upload Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {error && (
        <p className="error">{error}</p>
      )}

      {image && (
        <img
          src={image}
          alt="Preview"
          className="preview-image"
        />
      )}

    </div>
  );
};

export default FileUpload;