

interface PropsForTheCard{
   cardTitleText: string;
   descriptionText: string;
   linkButton: string;
   imageURL: string;
}


const Card = ({cardTitleText, descriptionText, linkButton, imageURL}:PropsForTheCard) => {
 return (
   <div className="card">
     <img src={imageURL} className="card-img-top" alt= "..." />
     <div className="card-body">
       <h5 className="card-title">{cardTitleText}</h5>
       <p className="card-text"> {descriptionText}
       </p>
       <a href={linkButton} className="btn btn-primary">Go somewhere</a>
     </div>
   </div>
 );
}


export default Card;
