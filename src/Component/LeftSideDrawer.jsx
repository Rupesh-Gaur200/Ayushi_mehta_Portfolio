

function LeftSideDrawer(){
    const data=[
        "Home","Contact","About","Github","Project",
    ]
    return (
        <div className="bg-[#eaeaea] w-full h-full flex justify-center items-center">
            <div className="">

                
                <ul>
                {data.map((items ,index)=>{
                    return(
                        <li key={index} className=" my-12 border-2 border-red-500 px-20 py-3 rounded-full text-2xl hover:bg-red-200 cursor-pointer" >
                        {items}
                     </li>
                    )
                })} 
                </ul>
            </div>

            
                
            

        </div>
    )
}
export default LeftSideDrawer