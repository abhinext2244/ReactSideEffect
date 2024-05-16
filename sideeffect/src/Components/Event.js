import {useState,useEffect} from 'react'
function Event(){
    useEffect(() => {
        const handleMouseMove = (event) => {
          console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
          // You can update component state or perform any other action based on mouse movement
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
   return(
<>
<div>
      <h2>Mouse Movement</h2>
      <p>Check the console for mouse coordinates</p>
    </div>
</>
   )
}
export default Event;