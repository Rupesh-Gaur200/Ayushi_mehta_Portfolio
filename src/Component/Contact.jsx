import { useState } from "react"


function Contact (){

    const data=[{
        logo:"",
        content:""
    },
    {
        logo:"",
        content:""
    },{
        logo:"",
        content:""
    }]


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
       

        <div className="px-20 py-20 flex gap-5">

            <div className="flex flex-col gap-10  ">
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
               
               <div className="border-2 border-red-400">
                     {data.map((item ,index)=>{
                        return(
                            <div key={index} className="flex gap-10">
                            <div>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                            </div>
    
                            <div>
                                <p>{item.content}</p>
                                 </div>
                          </div>
                        )
                     })}
                      
               </div>

        </div>


    )
}

export default Contact