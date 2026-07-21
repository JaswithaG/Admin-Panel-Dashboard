// ===============================
// GENERATE RANDOM ID
// ===============================

export const generateId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

// ===============================
// SORT ARRAY
// ===============================

export const sortByKey = (
  array,
  key,
  ascending = true
) => {
  return [...array].sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;

    if (a[key] > b[key]) return ascending ? 1 : -1;

    return 0;
  });
};

// ===============================
// SEARCH FILTER
// ===============================

export const searchItems = (
  items,
  searchText,
  fields = []
) => {
  if (!searchText) return items;

  return items.filter((item) =>
    fields.some((field) =>
      String(item[field])
        .toLowerCase()
        .includes(searchText.toLowerCase())
    )
  );
};

// ===============================
// PAGINATE ARRAY
// ===============================

export const paginate = (
  items,
  currentPage,
  pageSize
) => {
  const start = (currentPage - 1) * pageSize;

  return items.slice(start, start + pageSize);
};

// ===============================
// COPY TO CLIPBOARD
// ===============================

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

// ===============================
// DEBOUNCE
// ===============================

export const debounce = (func, delay) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// ===============================
// DOWNLOAD JSON
// ===============================

export const downloadJSON = (
  data,
  filename = "data.json"
) => {
  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    {
      type: "application/json",
    }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = filename;

  a.click();

  URL.revokeObjectURL(url);
};