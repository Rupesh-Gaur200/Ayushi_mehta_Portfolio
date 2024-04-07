
import Achievement from "./Component/Achievement"
import Education from "./Component/Education"
import Exp from "./Component/Exp"
import Landing from "./Component/Landing"
import LeftBottomitem from "./Component/LeftBottomitem"
import Navbar from "./Component/Navbar"
import RightSidehead from "./Component/RightSidehead"

function App() {


  return (
    <div>
    <div className="bg-[#eaeaea] w-full ">
    
       <div className=" w-[35%] bg-red-500 h-screen ">
       <Navbar></Navbar>
       <img className="w-[370px] rounded-full mx-[360px] mt-20"src="https://media.licdn.com/dms/image/D5635AQHoXazWNdvNMQ/profile-framedphoto-shrink_800_800/0/1712139634735?e=1713024000&v=beta&t=cs8tTWYm47FCbtZyJZdHsFuzRHSumlGElnwmbNgwf_4"></img>
          
            <LeftBottomitem></LeftBottomitem>
            <RightSidehead></RightSidehead>
            </div>
            
            <Landing></Landing>

            <Education></Education>
            <Exp></Exp>
            {/* <Achievement></Achievement> */}
           
         
    </div>
    </div>
  )
}

export default App
