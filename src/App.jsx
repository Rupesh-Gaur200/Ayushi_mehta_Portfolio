
import Achievement from "./Component/Achievement"
import Contact from "./Component/Contact"
import Education from "./Component/Education"
import Exp from "./Component/Exp"
import Landing from "./Component/Landing"
import LeftBottomitem from "./Component/LeftBottomitem"
import Navbar from "./Component/Navbar"
import Project from "./Component/Project"
import RightSidehead from "./Component/RightSidehead"
import LocomotiveScroll from 'locomotive-scroll';



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll>
    <div className="bg-[#eaeaea] w-full ">
    
       <div className=" w-[35%] bg-red-500 h-screen ">
       <Navbar></Navbar>
       <img className="w-[370px] rounded-full mx-[360px] mt-20"src="https://media.licdn.com/dms/image/D5635AQHoXazWNdvNMQ/profile-framedphoto-shrink_800_800/0/1712139634735?e=1715076000&v=beta&t=EaQslwQyrp0n61ODFkBMAjH08_ykP4RsdeDK37ZXh3Q"></img>
          
            <LeftBottomitem></LeftBottomitem>
            <RightSidehead></RightSidehead>
            </div>
            
            <Landing></Landing>
            <Exp></Exp>
            
            <Project></Project>
            <Education></Education>
           
           
             <Achievement></Achievement> 
           
             <Contact></Contact>
          
    </div>
    </div>
  )
}

export default App
