import "./Card.css"

const Card = (props) => {   
console.log(props);
    
  return (
    <div className="container">
      
      <div className="row">
        {props.data.map((eleman)=>{
          const {id, title, desc, image} = eleman;
        
          return(
            <div className="col-md-4 col-lg-3 m-1 card bg-dark  border-dark rounded-3" key={id} >
              <h5 className="card-title p-2">{title.toUpperCase()}</h5>
              <img src={image} className="card-img" alt="" />
              <div className="card-body overlay">
                  <p className="card-text">{desc.toLowerCase()}</p>
              </div>              
            </div>
          )   

        
        })}
        
      </div>

      
    </div>
    
  )
}

export default Card