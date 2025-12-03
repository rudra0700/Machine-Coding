const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleChange = (e) => {
    const name = e.target.name;
    setData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };
  return (
    <div className="space-y-4">
      <div>
        <label className="font-semibold">Name : </label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          className="border border-black p-1 ml-2 rounded-md font-semibold"
        />
        {errors.name && <span className="text-red-600 block">{errors.name}</span>}
      </div>
      <div>
        <label className="font-semibold">Age : </label>
        <input
          onChange={handleChange}
          type="number"
          name="age"
          value={age}
          className="border border-black p-1 ml-2 rounded-md font-semibold"
        />
          {errors.age && <span className="text-red-600 block">{errors.age}</span>}
      </div>
      <div>
        <label className="font-semibold">Email : </label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={email}
          className="border border-black p-1 ml-2 rounded-md font-semibold"
          />
          {errors.email && <span className="text-red-600 block">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
