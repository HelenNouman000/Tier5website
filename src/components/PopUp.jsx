

function ModelPopUp({check, children , cl }) {
 
    return (
    
  
  <div className={`modal  ${check ? "modal-open" : ""} ${cl ? cl : ''}`}>
    <div className="modal-box">
  
  
    {children}
    
    </div>
  </div>
  
  
   
    )
  }
  
  export default ModelPopUp;