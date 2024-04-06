
import Landing from "./Component/Landing"
import Navbar from "./Component/Navbar"

function App() {


  return (
    <div>
    <div className="bg-[#eaeaea] w-full ">
    
       <div className="w-[35%] bg-red-500 h-screen ">
       <Navbar></Navbar>
       <img className="w-[400px] rounded-full mx-80 mt-14"src="https://media.licdn.com/dms/image/D5635AQHoXazWNdvNMQ/profile-framedphoto-shrink_800_800/0/1712139634735?e=1713024000&v=beta&t=cs8tTWYm47FCbtZyJZdHsFuzRHSumlGElnwmbNgwf_4"></img>

            </div>

            <Landing></Landing>
           
         
    </div>
    </div>
  )
}

export default App
