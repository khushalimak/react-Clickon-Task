

const ButtonAlert = ({message , children}) => {
    return(
         <button className='button' onClick={() => alert(message)}>{children}</button>
    );
}


const ClickOn5 = () => {
  

 return (
   <div>
     <h1 className='text-6xl'>Reading props in event handlers</h1>
     <ButtonAlert message="Now Playing!">Play</ButtonAlert>
     <ButtonAlert message="Now Uploding!">Upload</ButtonAlert>
   </div>
 )
}

export default ClickOn5