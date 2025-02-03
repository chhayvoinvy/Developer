import profile_picture from './assets/profile.jpeg'
import Button from './Button/Button';

function Card(props) {

    const cardsList =   props.items;
    const list_cards = cardsList.map(item => <li key={item.type}>{item.type}</li>);

    return (
        <>



        <ul>{list_cards}</ul>
        <div className='card-container'>
            <img alt='Profile Picture' 
                 width={200} 
                 src={profile_picture}>
            </img>
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-bio'>{props.bio}</p>
            <Button btn_more='More'/>
    
      </div>

      </>
    );
}

export default Card