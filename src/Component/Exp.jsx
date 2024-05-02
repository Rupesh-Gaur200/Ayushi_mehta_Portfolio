

function Exp(){
    const educationData=[{
        date:"Aug 2023- Present",
        Role:"Digital Marketing Executive ",
        Organ:"Intellipaat Software Solutions Pvt. Ltd.",

    },

    {
        date:"july 2023- Aug 2023",
        Role:"General Secretary",
        Organ:"Synopsis",

    },
   


]

 return(
    <div  className="px-20 py-16 flex gap-20  ">
        <img className="w-[600px] h-[500px] pb-10" src="https://yashi-gupta.netlify.app/static/media/expRed.1bdca5f9.svg"></img>
    <div className=" w-[100%] h-full flex flex-col gap-[20px]">
    <h1 className="font-bold text-6xl text-[#f03939] ml-[58%]">Experience</h1>

    <div  className="py-10 px-10 gap-10 flex flex-col ">

       {educationData.map((item ,index)=>{
           return(
               
       <div  key={index} className="bg-[#f38a8a]  flex gap-4 h-[100px] w-[95%] items-center pl-5 rounded-xl" >

       <div className="bg-[#f03939] rounded-full flex items-center h-[65%] px-3">
          <img className="" src="https://yashi-gupta.netlify.app/static/media/expImgBlack.01d2dd8e.svg"></img>

       </div>

        <div >
        <h6 className="color- [rgb(240, 57, 57)] font-ligthbold ">{item.date}</h6>
        <h4 className="color-[rgb(33, 33, 33)] font-bold">{item.Role}</h4>
        <h5 className="color-[rgba(33, 33, 33, 0.8)] font-semibold">{item.Organ}</h5>
        </div>

      </div>
           )
       })}

       </div>
    </div>
 
   
    

   </div>
   
)
}


 



export default Exp