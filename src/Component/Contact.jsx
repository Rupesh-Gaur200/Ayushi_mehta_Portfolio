import { useState } from "react"


function Contact (){
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
       

        <div className="px-20 py-20">

            <div className="flex flex-col gap-10">
                <div>
                    <h1 className="text-6xl font-bold text-[#f03939]  ">Contact</h1>
                </div>
                <div>
                    <form className="flex gap-10 flex-col w-[40%] ml-5 relative">
                        <label className="absolute -top-3 left-8 w-[60px] bg-[#eaeaea] px-2 ">Name</label>
                        <input className="px-2 py-1 border-[3px] border-red-600 bg-[#eaeaea] rounded-xl" type="text"  name="name"value={onsub.name || ""}  onChange={handleChange} placeholder="name"></input>
                        <input className="px-2 py-1 border-[3px] border-red-600  bg-[#eaeaea] rounded-xl" type="text" name="email" value={onsub.email || ""}  onChange={handleChange} placeholder="Email"></input>
                        <input  className="px-2 py-1 border-[3px] border-red-600  bg-[#eaeaea] rounded-xl" type="text" name="message "value={onsub.message || ""}  onChange={handleChange} placeholder="Message"></input>
                        <button onClick={handleclick}>submit</button>
                    </form>
                </div>
            </div>


        </div>


    )
}

export default Contact