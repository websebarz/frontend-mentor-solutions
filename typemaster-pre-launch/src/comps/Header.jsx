function Header() {
  return (
    <div className="flex w-screen p-[1em] md:p-[2em] xl:p-[4em] xl:w-[1110px] xl:ml-auto xl:mr-auto justify-between">
      <span>
        <svg
          className="inline-block"
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#F16718" d="M0 0h40v40H0z" />
            <path
              d="M10.342 17c.182 0 .288-.11.288-.299v-8.03c0-.078.046-.125.122-.125h2.443c.182 0 .288-.11.288-.299V6.3c0-.189-.106-.299-.288-.299H5.288C5.106 6 5 6.11 5 6.299v1.948c0 .189.106.299.288.299h2.368c.076 0 .121.047.121.125v8.03c0 .189.106.299.288.299h2.277zm6.57 0c.183 0 .29-.11.29-.299v-5.547c0-.125.09-.141.151-.047l.94 1.619a.37.37 0 00.35.204h1.062a.37.37 0 00.35-.204l.94-1.619c.06-.094.152-.078.152.047v5.547c0 .189.106.299.288.299h2.277c.182 0 .288-.11.288-.299V6.3C24 6.11 23.894 6 23.712 6H21.45a.37.37 0 00-.349.204L19.265 9.3c-.045.094-.136.094-.182 0l-1.836-3.096a.37.37 0 00-.35-.204h-2.26c-.183 0-.289.11-.289.299V16.7c0 .189.106.299.289.299h2.276z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      </span>
      <button className="w-[9.4375em] font-['Barlow'] font-bold bg-light-silver hover:bg-dark-blue hover:text-white self-center p-[0.5em] rounded-lg">
        PRE-ORDER NOW
      </button>
    </div>
  );
}

export default Header;
