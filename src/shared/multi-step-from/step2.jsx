function Step2({ inputs, onChange = () => {}, stepKey }) {
  const { adults, children } = inputs || {};

  function handleChange(inputKey) {
    return (event) => {
      onChange({ value: event.target.value, stepKey, inputKey });
    };
  }
  return (
    <fieldset className="flex gap-8">
      <legend className=" font-['Montserrat'] uppercase font-bold text-base  pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6 lg:text-lg leading-[24px]">Who will you be travelling with?</legend>

      <div className="flex w-1/2 flex-col select-none justify-between mt-4 uppercase font-medium text-sm md:text-base lg:text-lg">
        <label htmlFor="adults">Number Of Adults<span className="text-red-600">*</span></label>
        <input
        className="bg-white select-none p-2 border rounded w-full cursor-pointer bg-white text-['rgba(0,0,0,0.5)'] focus:text-black valid:text-black"
          required
          type="number"
          id="adults"
          value={adults}
          min={1}
          max={10}
          onChange={handleChange("adults")}
        />
      </div>

      <div className="flex w-1/2 flex-col select-none justify-between mt-4 uppercase font-medium text-sm md:text-base lg:text-lg">
        <label htmlFor="children">Number Of Children<span className="text-red-600">*</span> </label>
        <input
          className="bg-white select-none p-2 border rounded w-full cursor-pointer bg-white text-['rgba(0,0,0,0.5)'] focus:text-black valid:text-black"
          required
          type="number"
          id="children"
          value={children}
          min={0}
          max={10}
          onChange={handleChange("children")}
        />
      </div>
    </fieldset>
  );
}

export default Step2;