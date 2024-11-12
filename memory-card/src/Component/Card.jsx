export default function Card({Name,Image,onClick}){
    


    return(
        <div className="card-container" onClick={onClick} >

        
            <div className="card">
                <img src={Image} alt={Name} />
            </div>

        </div>



       
        

        
)


}