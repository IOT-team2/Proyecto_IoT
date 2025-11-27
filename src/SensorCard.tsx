

interface PropsForTheCard{
   cardTitle: string;
   descriptionText: string;
   value: string;
   imageURL: string;
   linkButton: string;
}


const SensorCard = ({cardTitle, descriptionText, value, imageURL, linkButton}:PropsForTheCard) => {
 return (
   <div className="card">
     <img src={imageURL} className="card-img-top" alt= "..." />
     <div className="card-body">
       <h5 className="card-title">{cardTitle}</h5>
       <p className="card-text"> {descriptionText} : {value}
       </p>
       <a href={linkButton} className="btn btn-primary">More details</a>
     </div>
   </div>
 );
}

export default SensorCard;