import { useEffect, useState } from "react";

const ThemeSettings = ({ onSave }) => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [primaryColor, setPrimaryColor] = useState(() => {
    return (
      localStorage.getItem("primaryColor") ||
      "#767c89"
    );
  });

  const [fontSize, setFontSize] = useState(() => {
    return (
      localStorage.getItem("fontSize") ||
      "Medium"
    );
  });

  const [compactLayout, setCompactLayout] = useState(() => {
    return (
      localStorage.getItem("compactLayout") === "true"
    );
  });

  /* --------------------------
      Dark Mode
  ---------------------------*/

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [darkMode]);

  /* --------------------------
      Primary Color
  ---------------------------*/

  useEffect(() => {

    document.documentElement.style.setProperty(
      "--primary-color",
      primaryColor
    );

    localStorage.setItem(
      "primaryColor",
      primaryColor
    );

  }, [primaryColor]);

  /* --------------------------
      Font Size
  ---------------------------*/

  useEffect(() => {

    let size = "16px";

    switch (fontSize) {

      case "Small":
        size = "14px";
        break;

      case "Medium":
        size = "16px";
        break;

      case "Large":
        size = "18px";
        break;

      default:
        size = "16px";
    }

    document.documentElement.style.setProperty(
      "--app-font-size",
      size
    );

  }, [fontSize]);

  /* --------------------------
      Save
  ---------------------------*/

  const handleSave = () => {

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "primaryColor",
      primaryColor
    );

    localStorage.setItem(
      "fontSize",
      fontSize
    );

    localStorage.setItem(
      "compactLayout",
      compactLayout
    );

    if (onSave) {
      onSave();
    } else {
      alert("Appearance Settings Saved Successfully!");
    }

  };

  return (

    <div>

      <div className="settings-section-title">

        <div>

          <h2>Appearance</h2>

          <p>
            Customize the dashboard appearance.
          </p>

        </div>

      </div>

      {/* Dark Mode */}

      <div className="setting-item">

        <div>

          <h4>Dark Mode</h4>

          <span>
            Enable dark theme throughout the dashboard.
          </span>

        </div>

        <label className="switch">

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() =>
              setDarkMode(!darkMode)
            }
          />

          <span className="slider"></span>

        </label>

      </div>

      {/* Primary Color */}

      <div className="setting-item">

        <div>

          <h4>Primary Color</h4>

          <span>
            Choose your dashboard accent color.
          </span>

        </div>

        <input
          type="color"
          className="theme-color-picker"
          value={primaryColor}
          onChange={(e) =>
            setPrimaryColor(e.target.value)
          }
        />

      </div>

      {/* Font Size */}

      <div className="setting-item">

        <div>

          <h4>Font Size</h4>

          <span>
            Select the default font size.
          </span>

        </div>

        <select
          className="settings-select"
          value={fontSize}
          onChange={(e) =>
            setFontSize(e.target.value)
          }
        >

          <option value="Small">
            Small
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Large">
            Large
          </option>

        </select>

      </div>

      {/* Compact Layout */}

      <div className="setting-item">

        <div>

          <h4>Compact Layout</h4>

          <span>
            Display more content with reduced spacing.
          </span>

        </div>

        <label className="switch">

          <input
            type="checkbox"
            checked={compactLayout}
            onChange={() =>
              setCompactLayout(!compactLayout)
            }
          />

          <span className="slider"></span>

        </label>

      </div>

      {/* Save Button */}

      <div className="setting-item">

        <button
          className="settings-btn"
          onClick={handleSave}
        >
          Save Appearance Settings
        </button>

      </div>

    </div>

  );

};

export default ThemeSettings;