function Step4({ inputs, onChange = () => {}, stepKey }) {
  const { additionalDetails } = inputs || {};

  function handleChange(inputKey) {
    return (event) => {
      onChange({ value: event.target.value, stepKey, inputKey });
    };
  }

  return (
    <fieldset className="flex gap-8">
      <legend className=" font-['Montserrat'] uppercase  pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6 font-bold text-base leading-[24px]">Final details</legend>

      <div className="control-row flex flex-col select-none gap-4 mt-4 uppercase font-medium text-sm md:text-base lg:text-lg">
        <label htmlFor="additionalDetails">Any additional details we should know?</label>
        <textarea
          className="bg-white select-none p-2 border rounded w-full cursor-pointer bg-white text-['rgba(0,0,0,0.5)'] focus:text-black valid:text-black"
          id="additionalDetails"
          value={additionalDetails}
          onChange={handleChange("additionalDetails")}
        />
      </div>
    </fieldset>
  );
}

export default Step4;