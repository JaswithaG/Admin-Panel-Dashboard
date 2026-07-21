// ===============================
// FORMAT CURRENCY
// ===============================

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};

// ===============================
// FORMAT DATE
// ===============================

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// ===============================
// FORMAT TIME
// ===============================

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// ===============================
// FORMAT DATE & TIME
// ===============================

export const formatDateTime = (date) => {
  return new Date(date).toLocaleString("en-IN");
};

// ===============================
// CAPITALIZE TEXT
// ===============================

export const capitalize = (text = "") => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// ===============================
// TRUNCATE TEXT
// ===============================

export const truncateText = (
  text = "",
  length = 30
) => {
  if (text.length <= length) return text;

  return text.substring(0, length) + "...";
};

// ===============================
// FORMAT NUMBER
// ===============================

export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-IN").format(number);
};