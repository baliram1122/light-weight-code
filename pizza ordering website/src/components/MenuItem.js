import { faSearch, faHome, faBars, faCartShopping, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function MenuItem(props) {


    return (
        <div className="pizza-card my-2 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                {/* <i className='favourite-icon' onClick={e => {props.favoriteToggle(props.id)}}><FontAwesomeIcon icon={faHeart} style={styles} /></i> */}
                <img className="menu-img card-img-top mt-2 " src={props.image} alt="pizza image" />
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.description}</p>
                    <h5><span>&#8377;</span>{props.price}</h5>
                    <button className="btn btn-danger" onClick={e => { props.handleClick(props.id) }}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}