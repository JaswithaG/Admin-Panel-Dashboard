export const exportCSV = (data, filename = "data.csv") => {
  if (!data || data.length === 0) return;

  const headers = Object.keys(data[0]);

  const csvRows = [
    headers.join(","),
    ...data.map((row) =>
      headers.map((field) => `"${row[field] ?? ""}"`).join(",")
    ),
  ];

  const blob = new Blob([csvRows.join("\n")], {
    type: "text/csv;charset=utf-8;",
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = filename;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};