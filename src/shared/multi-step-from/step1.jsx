function Step1({ inputs, onChange = () => {}, stepKey }) {
  const { arrivalDate, departureDate } = inputs || {};

  function handleChange(inputKey) {
    return (event) => {
      onChange({ value: event.target.value, stepKey, inputKey });
    };
  }

  return (
    <fieldset className="flex gap-8 ">
      <legend className=" font-['Montserrat'] pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6 uppercase font-bold text-base leading-[24px]">When will you be arriving?</legend>

      <div className="flex w-1/2 flex-col select-none gap-4 mt-4 uppercase font-medium text-sm md:text-base lg:text-lg">
        <label className="cursor-pointer"  htmlFor="arrivalDate ">Arrival Date</label>
        <input
          className="bg-white select-none p-2 border rounded w-full cursor-pointer bg-white text-['rgba(0,0,0,0.5)'] focus:text-black valid:text-black"
          onChange={handleChange("arrivalDate")}
          type="text"
          id="arrivalDate"
          onFocus={
            (e) => {
                e.target.type = 'date';
                e.target.showPicker?.();
            }
        }
        onBlur={(e) => {
            if(!e.target.value) e.target.type = 'text';
        }}
          min={new Date().toISOString().split('T')[0]}
          value={arrivalDate}
        />
      </div>

      <div className="flex w-1/2 flex-col select-none gap-4 mt-4 uppercase font-medium text-sm md:text-base lg:text-lg">
        <label className="cursor-pointer" htmlFor="departureDate">Departure Date</label>
        <input
          className="bg-white select-none p-2 border rounded w-full cursor-pointer bg-white text-['rgba(0,0,0,0.5)'] focus:text-black valid:text-black"
          onChange={handleChange("departureDate")}
          type="text"
          id="departureDate"
          onFocus={(e) => {
            e.target.type = 'date';
            e.target.showPicker?.();
          }}
          onBlur={(e) => {
            if(!e.target.value) e.target.type = 'text';
          }}
          min={new Date().toISOString().split('T')[0]}
          value={departureDate}
        />
      </div>
    </fieldset>
  );
}

export default Step1;