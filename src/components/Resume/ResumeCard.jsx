function ResumeCard({ title, subTitle, result, des }) {
  return (
    <div className="w-full h-full group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-gray-400 bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-white  bg-gradient-to-l group from-[#ffffff] to-[#d9d9d9] duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10  shadow-[#8c8c8c] hover:bg-gradient-to-br hover:from-[#9966ff] hover:to-[#ff6699] transition-colors group">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-black group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>

          <p
            className="min-w-fit px-1 py-2  text-designColor bg-[#fff] bg-opacity-25 rounded-lg text-sm font-medium group-hover:bg-white"
            style={{
              boxShadow: "0 0 10px rgb(204, 204, 204)",
            }}
          >
            {result}
          </p>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-600 group-hover:text-white duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard;
