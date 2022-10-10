const FormCompleted = ({ onComplete }) => {
  return (
    <div className="flex flex-col w-[90%] h-[471px] lg:max-w-[474px] p-4 bg-white mr-auto ml-auto rounded-md shadow-lg justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="hsl(0, 100%, 74%)"
        className="w-[64px] h-[64px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 className="mt-4">ENJOY YOUR FREE TRIAL!</h2>
      <button
        onClick={() => onComplete()}
        className="w-full bg-green rounded-lg mt-4 p-4 text-white shadow-lg"
      >
        RESEND INFO
      </button>
    </div>
  );
};

export default FormCompleted;
