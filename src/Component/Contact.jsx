import { useState } from "react"


function Contact (){

    const data=[{
        logo:<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>  ,
        content:"AyushiMehta@gmail.com",
        
    },
    {
        logo: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
        content:"9090909090",
        
    },{
        logo:<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
        content:"Rajasthan, India",
    }
    

]

const data2=[
    {
        link:"",
          logo2:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-label="Twitter" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
    },{
        link:"",
          logo2:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" aria-label="GitHub" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
    },{
        link:"https://www.linkedin.com/in/ayushimehta22/",
          logo2:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" aria-label="LinkedIn" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
    },{
        link:"",
          logo2:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" aria-label="Instagram" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
    }
]

       

    const [onsub , setsub]=useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setsub(values => ({...values, [name]: value}))
      }
    

    function handleclick(e){
        e.preventDefault()
        console.log(onsub.name)
    }
    return(
       <>

        <div className="px-20 py-20 flex gap-20">

            <div className="flex flex-col gap-10 pt-5 ">
                <div>
                    <h1 className="text-6xl font-bold text-[#f03939]  ">Contact</h1>
                </div>
                <div>
                    <form className="flex gap-10 flex-col w-[450px] ml-5 relative ">
                        <label className="absolute -top-3 left-8 w-[60px] bg-[#eaeaea] px-2 text-[#f03939] font-semibold ">Name</label>
                        <input className="px-2 py-1 border-[3px] border-red-600 bg-[#eaeaea] rounded-xl" type="text"  name="name"value={onsub.name || ""}  onChange={handleChange} placeholder="name"></input>
                         <label className="absolute top-16 left-9  w-[60px] bg-[#eaeaea] px-2 text-[#f03939] font-semibold ">Email </label>
                        <input className="px-2 py-1 border-[3px] border-red-600  bg-[#eaeaea] rounded-xl" type="text" name="email" value={onsub.email || ""}  onChange={handleChange} placeholder="Email"></input>
                        <label className="absolute top-[140px] left-9 w-[78px] bg-[#eaeaea] px-2 text-[#f03939] font-semibold ">Message</label>
                        <textarea className="px-2 py-1 border-[3px] h-28 border-red-600  bg-[#eaeaea] rounded-xl resize-none " type="text" name="message"  value={onsub.message || ""}  onChange={handleChange} placeholder="Message"></textarea>
                       <div className="ml-1 border-2 border-red-500 rounded-3xl bg-[#f03939] w-[30%] flex justify-center">
                        <button className="py-2 font-semibold text-lg" onClick={handleclick}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
               
               <div className=" w-[30%] my-20 flex flex-col justify-end gap-8">
                     {data.map((item ,index)=>{
                        return(
                            <div key={index} className="flex gap-6 items-center">
                            <div className="border-2 flex items-center justify-center w-[10%] my-2 h-10 bg-red-600 rounded-full ">
                            {item.logo}
                            </div>
                            <div>
                                <p className="text-xl ">{item.content}</p>
                                 </div>
                          </div>
                        )
                     })}
                      
                      <div className="w-full h-full flex gap-14 ml-20 mt-40">

                        {data2.map((item,index)=>{
                            return(
                                <div className="w-[10%] h-10 bg-red-600 rounded-full flex justify-center items-center">

                                <a href={item.link} target="_blank">
                                   {item.logo2}
                                    </a>
                                </div>
                            )
                        })}
                       

                           
                      </div>
               </div>

               <img className="w-[20%] ml-[5%] mt-[16%]" src="https://yashi-gupta.netlify.app/static/media/contactsRed.ba8953ea.svg"></img>

              

        </div>
         <div className="mx-[45%] w-[20%] pb-4">
         <h1 className="text-lg font-semibold">Made with <span className="color: rgb(240, 57, 57); margin: 0px 0.5rem -1rem;">❤</span> Ayushi </h1>
     </div>
        </>

    )
}

export default Contact