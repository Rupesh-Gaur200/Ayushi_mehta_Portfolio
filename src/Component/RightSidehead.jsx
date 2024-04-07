

function RightSidehead(){
    return (
        <div className=" absolute top-1/2 left-1/2 translate-x-[25%] -translate-y-[50%]  w-[450px] h-[350px] flex gap-8 flex-col">
              <div className="pt-4 mx-5">
              <h6 className="text-semibold text-xl text-[#212121]">Mern Stack Web Developer</h6>
              <h1 className="text-bold text-6xl ">Ayushi Mehta</h1>
              </div>

              <p  className="text-wrap mx-5 font-medium ">Mern Stack web developer with a specialization in front-end and back-end web development. Adaptable to new technology to enhance my skills and capabilities.</p>

               <div className="flex justify-around mr-10">
                <div className="border-2 border-red-600 w-36 flex justify-center h-10 items-center rounded-full"><a className=" text-red-500">Download Cv</a></div>
                <div className="bg-red-600 w-36 flex justify-center items-center rounded-full"><a className="text-white">Contact</a></div>
               </div>

            </div>
    )
}

export default RightSidehead