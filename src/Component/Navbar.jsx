import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import LeftSideDrawer from './LeftSideDrawer';
function Navbar(){

    const [open , setOpen]=useState(false)

    const handleclick =(open)=>{
        setOpen(open)
    }
    return(
   
        <div className="px-20 py-6 ">
            <div className="w-[1350px] h-full flex justify-between items-center">
            <h1 className="text-5xl text-[#eaeaea] font-['Licorice'] font-bold">Ayushi Mehta</h1>
            <svg  onClick={()=>handleclick(true)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="jss67" aria-label="Menu" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path></svg>
            </div>
            <Drawer
            
            anchor={'left'}
            open={open}
            onClose={()=>handleclick(false)}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '500px', // Custom width
                    background: '#eaeaea]', // Custom background color
                    color: '#000', 
                    borderRadius: '0px 40px 40px 0px ',// Custom text color
                },
            }}
          >

            <LeftSideDrawer></LeftSideDrawer>
          </Drawer>
        </div>
      
    )
}

export default Navbar