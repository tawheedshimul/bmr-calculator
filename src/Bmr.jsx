import React, { useState } from "react";

function Bmr() {
  const [measurementUnit, setMeasurementUnit] = useState("metric");
  const [weight, setWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("female");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [bmr, setBMR] = useState("");

  const calculateBMR = () => {
    let bmrValue = 0;

    if (measurementUnit === "metric") {
      const weightInKgs = parseFloat(weight);
      const heightInCm = parseFloat(heightCm);

      if (gender === "female") {
        bmrValue = 655 + 9.6 * weightInKgs + 1.8 * heightInCm - 4.7 * age;
      } else {
        bmrValue = 66 + 13.7 * weightInKgs + 5 * heightInCm - 6.8 * age;
      }
    } else {
      const weightInLbs = parseFloat(weight);
      const heightInInches = parseFloat(heightFeet) * 12 + parseFloat(heightInches);

      if (gender === "female") {
        bmrValue = 655 + 4.35 * weightInLbs + 4.7 * heightInInches - 4.7 * age;
      } else {
        bmrValue = 66 + 6.23 * weightInLbs + 12.7 * heightInInches - 6.8 * age;
      }
    }

    switch (activityLevel) {
      case "sedentary":
        bmrValue *= 1.2;
        break;
      case "lightlyActive":
        bmrValue *= 1.375;
        break;
      case "moderatelyActive":
        bmrValue *= 1.55;
        break;
      case "veryActive":
        bmrValue *= 1.725;
        break;
      case "superActive":
        bmrValue *= 1.9;
        break;
      default:
        break;
    }

    setBMR(bmrValue.toFixed(2));
  };

  const resetForm = () => {
    setMeasurementUnit("metric");
    setWeight("");
    setHeightFeet("");
    setHeightInches("");
    setHeightCm("");
    setAge("");
    setGender("female");
    setActivityLevel("sedentary");
    setBMR("");
  };

  return (
    <div className="container rounded mx-auto px-4 py-8 bg-gray-200 text-black">
      <h2 className="text-2xl font-bold mb-4 bg-green-700 p-8 text-white rounded">
        BMR Calculator
      </h2>
      <div className="mb-4">
        <label htmlFor="measurementUnit" className="block mb-2 font-medium">
          Measurement Unit:
        </label>
        <select
          id="measurementUnit"
          value={measurementUnit}
          onChange={(e) => setMeasurementUnit(e.target.value)}
          className="peer h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
        >
          <option value="metric">Metric (kg/cm)</option>
          <option value="imperial">Imperial (lbs/in)</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="weight" className="block mb-2 font-medium">
          Body Weight:
        </label>
        <div className="relative flex h-10 w-full overflow-clip">
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="peer h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
            required
          />
          <span className="flex items-center border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white">
            {measurementUnit === "metric" ? "kg" : "lbs"}
          </span>
        </div>

      </div>
      {measurementUnit === "metric" ? (
        <div className="mb-4">
          <label htmlFor="heightCm" className="block mb-2 font-medium">
            Height
          </label>
          <div className="relative flex h-10 w-full overflow-clip">
            <input
              type="number"
              id="heightCm"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              className="peer h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
              required
            />
            <span className="flex items-center border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white">
              Cm
            </span>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <label htmlFor="height" className="block mb-2 font-medium ">
            Height:
          </label>
          <div className="flex">
            <div className="relative flex h-10 w-full overflow-clip">
              <input
                type="number"
                id="heightFeet"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                className="peer h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none w-4/5"
                required
              />
              <span className="flex items-center border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white">
                Feet
              </span>
            </div>
            <div className="relative flex h-10 w-full overflow-clip ml-2">
              <input
                type="number"
                id="heightInches"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                className="peer h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none w-4/5"
                required
              />
              <span className="flex items-center border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white">
                Inches
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="age" className="block mb-2 font-medium">
          Age:
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="peer h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-2 font-medium">
          Gender:
        </label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="peer h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="activityLevel" className="block mb-2 font-medium">
          Activity Level:
        </label>
        <select
          id="activityLevel"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="peer h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
        >
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="lightlyActive">
            Lightly Active (light exercise/sports 1-3 days/week)
          </option>
          <option value="moderatelyActive">
            Moderately Active (moderate exercise/sports 3-5 days/week)
          </option>
          <option value="veryActive">
            Very Active (hard exercise/sports 6-7 days a week)
          </option>
          <option value="superActive">
            Super Active (very hard exercise/sports and a physical job)
          </option>
        </select>
      </div>
      <div className="mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
          onClick={calculateBMR}
        >
          Calculate
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={resetForm}
        >
          Reset
        </button>
      </div>
      {bmr && (
        <div className="bg-blue-300 p-8 m-4 rounded ">
          {/* <label className="block mb-2 font-medium" htmlFor="bmrResult">
            BMR:
          </label> */}
          <span className="text-2xl font-bold" id="bmrResult">{bmr}</span>
        </div>
      )}
    </div>
  );
}

export default Bmr;
