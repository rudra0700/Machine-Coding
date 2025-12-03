import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile.";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState(0);
  const [data, setData] = useState({
    name: "Rudra",
    age: 26,
    email: "rudra@gmail.com",
    interest: ["coding"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        let err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name must be at least 2 characters";
        }
        if (data.age < 18) {
          err.age = "Age must be 18";
        }
        if (!data.email || data.email.length < 2) {
          err.name = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        let err = {};
        if (data.interest.length < 1) {
          err.interest = "Select at least one interest";
        }

        setErrors(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 rounded-md bg-white">
      <div className="flex gap-3 ">
        {tabs.map((t, index) => (
          <div
            key={index}
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
            className="border border-black p-1 font-semibold rounded-md cursor-pointer"
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="border border-black p-4 mt-2 w-80 rounded-md ">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      {activeTab > 0 && (
        <button
          onClick={handlePrevClick}
          className="border border-black mt-2 py-1 px-3 font-semibold rounded-md cursor-pointer"
        >
          Prev
        </button>
      )}{" "}
      {activeTab < tabs.length - 1 && (
        <button
          onClick={handleNextClick}
          className="border border-black mt-2 py-1 px-3 font-semibold rounded-md cursor-pointer"
        >
          Next
        </button>
      )}{" "}
      {activeTab === tabs.length - 1 && (
        <button
          onClick={handleSubmit}
          className="border border-black mt-2 py-1 px-3 font-semibold rounded-md cursor-pointer"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default TabForm;
