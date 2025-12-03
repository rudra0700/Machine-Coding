const Interest = ({ data, setData, errors }) => {
  const { interest } = data;

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      interest: e.target.checked
        ? [...prev.interest, e.target.name]
        : prev.interest.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>Coding</label>
        <input
          onChange={handleChange}
          type="checkbox"
          name="coding"
          checked={interest.includes("coding")}
        />

      </div>{" "}
      <div>
        <label>Sleeping</label>
        <input
          onChange={handleChange}
          type="checkbox"
          name="sleeping"
          checked={interest.includes("sleeping")}
        />
      </div>{" "}
      <div>
        <label>Travelling</label>
        <input
          onChange={handleChange}
          type="checkbox"
          name="travelling"
          checked={interest.includes("travelling")}
        />
      </div>
      {errors.interest && <span className="text-red-600 block">{errors.interest}</span>}
    </div>
  );
};

export default Interest;
