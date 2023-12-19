const ClickOn = () => {
     
        function alerts(){
         alert("how are u?");
         console.log("i am fine");
    }

    const handleClick = () => {
         alert("skillqode")
         console.log("decode your skills");
    }

   

 return (
   <div>
     <h1 className="text-6xl">React onClick Events</h1>

     <button className="px-12 h-16 w-48 bg-pink-600 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={alerts}>Click</button>

     <button className="px-12 h-16 w-48 bg-pink-600 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={handleClick}>ClickMe</button>

     
   </div>
 )
}

export default ClickOn