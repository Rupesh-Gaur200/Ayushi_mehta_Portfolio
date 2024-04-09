

function Project(){
      
    const proData=[{
        name:"MaxSell Project",
        ImgSrc:"https://yashi-gupta.netlify.app/static/media/maxsellportfolio.3bdbc546.png",
        projectDeployment:"https://github.com/gyashig/maxsell-dev",
        projectGithub:"https://www.maxsell.co.in/"

    },{
        name:"MaxSell Project",
        ImgSrc:"https://yashi-gupta.netlify.app/static/media/maxsellportfolio.3bdbc546.png",
        projectDeployment:"https://github.com/gyashig/maxsell-dev",
        projectGithub:"https://www.maxsell.co.in/"

    },{
        name:"MaxSell Project",
        ImgSrc:"https://yashi-gupta.netlify.app/static/media/maxsellportfolio.3bdbc546.png",
        projectDeployment:"https://github.com/gyashig/maxsell-dev",
        projectGithub:"https://www.maxsell.co.in/"

    }






]
     
     
      
    return (
        <div className="px-20 py-20 ">

            <div className="flex justify-center">
                <h1 className="text-6xl text-[#f03939] font-bold">Projects</h1>
            </div>
            
            <div className="mt-20 w-[100%] flex gap-4 justify-evenly ">
                {proData.map((item,index)=>{
                    return(
                    
                        <div className="px-2 py-2 w-[23%] h-[18%] flex  flex-col items-center border-2 border-red-500 gap-10 bg-[#dd4d4d] rounded-lg">
                      <div className="mt-3">
                      <h2 className="color-['rgb(33, 33, 33)'] font-bold text-2xl">{item.name}</h2>
                        </div> 
                        <div>
                            <img className="w-[220px] h-[220px] rounded-lg"src={item.ImgSrc}></img>
                        </div>
                        <div className="flex justify-between w-[100%] px-5 py-5">
                        <div className="border-2 border-black w-[25%] h-[30px] flex justify-center items-center rounded-full">  
                        <a href={item.projectDeployment} target="_blank" rel="noreferrer" class="jss16" aria-labelledby="maxsell-project maxsell-project-code"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" id="maxsell-project-code" class="jss17" aria-label="Code" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg></a></div>  
                        <div className="border-2 border-black w-[25%] h-[30px] flex justify-center items-center rounded-full"><a href={item.projectGithub} target="_blank" rel="noreferrer" class="jss16" aria-labelledby="maxsell-project maxsell-project-demo"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" id="maxsell-project-demo" class="jss17" aria-label="Demo" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg></a></div>  
                        </div>
                </div>
            
                    )
                })}
                
                

                
            </div>
        </div>
    )
}
export default Project