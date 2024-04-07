function Achievement (){

    const educationData=[{
        date:"Oct 2020-Present",
        course:"Bachelor of Technology in Computer Science &amp; Engineering",
        Institute:"Lovely Professional University",

    },

    {
        date:"Oct 2020-Present",
        course:"Bachelor of Technology in Computer Science &amp; Engineering",
        Institute:"Lovely Professional University",

    },{
        date:"Oct 2020-Present",
        course:"Bachelor of Technology in Computer Science &amp; Engineering",
        Institute:"Lovely Professional University",

    }




]



return (
    <div className="px-20 py-28 flex">
       
    <div className="flex ">
     
      <div className="flex flex-col gap-16">
       <h1 className="text-6xl text-[#f03939]  font-bold">
       Who I am
       </h1>
       <div className="w-[65%] flex flex-col gap-8 ">
       <p className="text-wrap font-semibold text-xl italic text-[#444444]">
       Hi ! I'm Ayushi Mehta, An Engineer And A Developer. I'am pursuing B.Tech Computer Science and Engineering  from Lovely Professional University , doing my minors in Web Development and Android Development .I am a web development freelancer and like to explore different niches over time. Having experience in website development, event management and research and development.
       </p>
       <p className="text-wrap font-semibold text-xl italic text-[#444444]">
       I always believe in being creative and unique , seeking for opportunities to learn something new.I have also worked upon many live projects. My keen interest includes web-development, website designing, competitive programming, cloud computing, and coding . Looking for more oppurtunities to work upon!
       </p>
       </div>
      

       
      
      </div>

  
      

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


    </div>
 
  
   
       
     
       
   </div>
        
)
}

export default Achievement