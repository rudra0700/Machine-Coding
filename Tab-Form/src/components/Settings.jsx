const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <label>Dark</label>
        <input
          onChange={handleChange}
          type="radio"
          name="dark"
          checked={theme === "dark"}
        />
      </div>{" "}
      <div>
        <label>Light</label>
        <input
          onChange={handleChange}
          type="radio"
          name="light"
          checked={theme === "light"}
        />
      </div>
    </div>
  );
};

export default Settings;
