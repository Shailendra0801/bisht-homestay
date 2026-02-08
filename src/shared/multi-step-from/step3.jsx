function Step3({ inputs, onChange = () => {}, stepKey }) {
  const { firstName, lastName, email, phone } = inputs || {};

  function handleChange(inputKey) {
    return (event) => {
      onChange({ value: event.target.value, stepKey, inputKey });
    };
  }

  return (
    <fieldset className="flex flex-col justify-between gap-2 md:gap-4 lg:gap-6">
      <legend className=" font-['Montserrat']  pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6 uppercase font-bold text-base leading-[24px]">Guest information</legend>
        <div className="flex gap-8">
                 <div className="flex w-1/2 flex-col select-none gap-4 mt-4 uppercase font-medium text-sm md:text-base lg:text-lg">
        <label htmlFor="firstName">First Name<span className="text-red-600">*</span></label>
        <input
            className="bg-white select-none p-2 border rounded w-full cursor-pointer bg-white text-['rgba(0,0,0,0.5)'] focus:text-black valid:text-black"
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          value={firstName}
          onChange={handleChange("firstName")}
        />
      </div>

      <div className="flex w-1/2 flex-col justify-end select-none gap-4 mt-4 uppercase font-medium text-sm md:text-base lg:text-lg">
        <input
            className="bg-white select-none p-2 border rounded w-full cursor-pointer bg-white text-['rgba(0,0,0,0.5)'] focus:text-black valid:text-black"
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          value={lastName}
          onChange={handleChange("lastName")}
        />
      </div>
        </div>
 

      <div className="flex gap-8">
        <div className="flex w-1/2 flex-col select-none gap-4 mt-4 uppercase font-medium text-sm md:text-base lg:text-lg">
        <label htmlFor="email">Email<span className="text-red-600">*</span></label>
        <input
            className="bg-white select-none p-2 border rounded w-full cursor-pointer bg-white text-['rgba(0,0,0,0.5)'] focus:text-black valid:text-black"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange("email")}
          required
        />
      </div>

      <div className="flex w-1/2 flex-col select-none gap-4 mt-4 uppercase font-medium text-sm md:text-base lg:text-lg">
        <label htmlFor="phone">Phone</label>
        <input
            className="bg-white select-none p-2 border rounded w-full cursor-pointer bg-white text-['rgba(0,0,0,0.5)'] focus:text-black valid:text-black"
          type="text"
          id="phone"
          placeholder="Enter your phone number"
          value={phone}
          onChange={handleChange("phone")}
        />
      </div>
      </div>
    </fieldset>
  );
}

export default Step3;