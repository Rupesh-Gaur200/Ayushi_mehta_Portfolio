

function Education (){

        const educationData=[{
            date:"Oct 2020 -June 2024",
            course:"Bachelor of Technology in Computer Science &amp; Engineering",
            Institute:"Lovely Professional University",

        },
    
        {
            date:"Apr2019 – Mar 202",
            course:"Intermediate",
            Institute:"Sophia Sr. Sec. School, Rajasthan",

        },
    
    
    
    
    ]



    return (
        <div className="px-20 py-16 flex gap-10 ">
             <div className=" w-[100%] h-full flex flex-col gap-[12px]">
             <h1 className="font-bold text-6xl text-[#f03939]">Education</h1>

             <div className="py-10 px-10 gap-10 flex flex-col ">

                {educationData.map((item ,index)=>{
                    return(
                        
                <div key={index} className="bg-[#f38a8a]  flex gap-4 h-[100px] items-center pl-5 rounded-xl" >

                <div className="bg-[#f03939] rounded-lg flex items-center h-[65%] px-3 ">
                   <img className="" src="https://yashi-gupta.netlify.app/static/media/eduImgBlack.8ee2e691.svg"></img>

                </div>

                 <div>
                 <h6 className="color- [rgb(240, 57, 57)] font-ligthbold ">{item.date}</h6>
                 <h4 className="color-[rgb(33, 33, 33)] font-bold">{item.course}</h4>
                 <h5 className="color-[rgba(33, 33, 33, 0.8)] font-semibold">{item.Institute}</h5>
                 </div>

               </div>
                    )
                })}

                {/* <div className="bg-[#f38a8a]  flex gap-4 h-[100px] items-center pl-5 rounded-xl" >

                 <div className="bg-[#f03939] rounded-full flex items-center h-[65%] ">
                    <img className="" src="https://yashi-gupta.netlify.app/static/media/eduImgBlack.8ee2e691.svg"></img>

                 </div>

                  <div>
                  <h6 className="color- [rgb(240, 57, 57)] font-ligthbold "></h6>
                  <h4 className="color-[rgb(33, 33, 33)] font-bold"></h4>
                  <h5 className="color-[rgba(33, 33, 33, 0.8)] font-semibold"></h5>
                  </div>

                </div> */}
                </div>
             </div>
          
            
             <img className="w-[600px] h-[550px]" src="https://yashi-gupta.netlify.app/static/media/eduRed.a44e7ceb.svg"></img>
    
            </div>
            
    )
}

export default Education