export const validateFile = (
  file,
  maxSize = 5 * 1024 * 1024
) => {
  if (!file) return "No file selected.";

  if (file.size > maxSize)
    return "File exceeds 5MB.";

  return null;
};

export const previewImage = (file) => {
  return URL.createObjectURL(file);
};