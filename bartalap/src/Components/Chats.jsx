import React from 'react'

const Chats = () => {
  return (
   <div className="Chats">
     <div className="userchat">
        <img src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userchatinfo">
         <span>Sweety</span>
         {/* <p>Hello</p> */}
        </div>
     </div>

     <div className="userchat">
        <img src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userchatinfo">
          <span>Jyoti</span>
        </div>
     </div>

     <div className="userchat">
        <img src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userchatinfo">
          <span>Chiro</span>
        </div>
     </div>

     <div className="userchat">
        <img src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userchatinfo">
          <span className='pk'>Somesh</span>
        </div>
     </div>
   </div> 
  )
}

export default Chats;
