import { useParams } from "react-router";
import Products from "../components/Products";
import { useEffect, useRef, useState } from "react";
import { faL, faStar, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productDataSlice from "../store/slices/productDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateSubtotal } from "../store/slices/addToCartSlice";
import Navbar from "../components/Navbar";
import { addReview, incLike, incDisLike, removeReview, saveEditedReview } from "../store/slices/reviewSlice";
import { v4 as uuidv4 } from 'uuid';
import Rating from "../components/Rating";


export default function SingleProduct() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch()

  const mode = useSelector((state) => {
    return state.mode.darkMode
  })


  const bodyStyle = {
    backgroundColor: mode ? "#121212" : "white",
    color: mode ? "white" : "",
    height: "800px",
  }

  const darkModeStyle = {
    color: mode ? "white" : "black",
    backgroundColor: mode ? "rgba(177, 177, 177, 0.1)" : "lightGray",
  }

  const textStyle = {
    color: mode ? "white" : "color: rgb(63, 63, 63)",
  }

  const productsData = useSelector((state) => {
    return state.productData.productsData
  })



  const productsArray = useSelector((state) => {
    return state.addtocart.products
  })

  const subTotal = useSelector((state) => {
    return state.addtocart.subTotal
  })

  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);

  const idInNum = parseInt(id)

  // adding products to store 


  const addToCart = (id) => {
    // checking if product is already in the cart
    const alreadyExist = productsArray.find((product) => product.id == id)
    if (!alreadyExist) {
      const product = productsData.find((product) => product.id == id)
      dispatch(updateSubtotal(product.currentPrice))
      dispatch(addProduct(product))
    }
  }


  useEffect(() => {
    const info = productsData.find((product) => product.id === idInNum);
    setProductInfo(info);
  }, [idInNum]);


  // review section 


  const [inputValue, setInputValue] = useState('');

  const [emptyInput, setEmptyInput] = useState(false)

  const reviewData = useSelector((state) => state.reviewData.reviewData);

  const [reviewInfo, setReviewInfo] = useState({})

  const [reviewCount, setReviewCount] = useState(0);

  const [showAlert, setShowAlert] = useState(false);

  const [editMode, setEditMode] = useState(false)

  const inputRef = useRef(null)

  const [deleted, setDeleted] = useState(false)

  const handleInput = (reviewText) => {
    setInputValue(reviewText)
  }


  const handleClick = () => {
    if (inputValue === "") {
      setEmptyInput(true)
    } else {
      setEmptyInput(false)
      setReviewCount(reviewCount + 1)
      if (reviewCount == 0) {
        setShowAlert(true)
      }
      if (!showAlert) {
        dispatch(
          addReview({
            clickedLike: false,
            clickedDisLike: false,
            productId: idInNum,
            reviewData: {
              id: uuidv4(),
              customerName: 'anonymous',
              commentText: inputValue,
              likes: 0,
              dislikes: 0,
              userPic: '../images/user.png',
              currentReview: true,//to show delete and edit btn to only review that is written by the user
            },
          })
        );
      }

    }

    setInputValue('');
  };



  useEffect(() => {
    const reviewDataInfo = reviewData.find((review) => review.productId === idInNum);
    setReviewInfo(reviewDataInfo);
  }, [reviewData, idInNum, setReviewInfo]);


  const handleLd = (productId, reviewId, lOrD, isLiked, isDisliked) => {
    if (lOrD === "like") {
      if (!isLiked) {
        dispatch(incLike({ productId, reviewId, isDisliked }));
      }
    } else if (lOrD === "dislike") {
      if (!isDisliked) {
        dispatch(incDisLike({ productId, reviewId, isLiked }));
      }
    }
  };


  // edit and delete

  const handleDel = (productId, reviewId, edOrDel) => {
    if (edOrDel == "delete") {
      dispatch(removeReview({ productId: productId, reviewId: reviewId }))
    }
  }

  const handleSave = (productId, reviewId, editedReview) => {
    dispatch(saveEditedReview({ productId: productId, reviewId: reviewId, editedReview: editedReview }))
    setEditMode(false)
  }

  console.log(reviewData)

  const handleEdit = () => {
    setEditMode(true)
  }

  const clickedBtnStyles = {
    color: "DodgerBlue",
  }

  const defaultStyles = {
    color: "black",
  }

  // for image zoom

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isZoomScreenHovered, setIsZoomScreenHovered] = useState(false)

  const lens = useRef(null)
  const zoomScreen = useRef(null)

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX, y: clientY });

    if (window.innerWidth > 1000) {
      lens.current.style.left = coordinates.x - 20 + 'px';
      lens.current.style.top = coordinates.y - 20 + 'px';
  
      if (!isZoomScreenHovered) {
        zoomScreen.current.style.display = "block";
        zoomScreen.current.style.backgroundPosition = `${(coordinates.x - 100) * -6}px ${(coordinates.y - 250) * -6}px`;
      }
    }
  }

  const handleZoomScreenEnter = () => {
    setIsZoomScreenHovered(true);
  };

  const handleZoomScreenLeave = () => {
    setIsZoomScreenHovered(false);
    zoomScreen.current.style.display = "none";
  };



  return (
    <div style={bodyStyle}>
      <Navbar isSearchBar={true} />
      {productInfo && (
        <>
          <div className="sp-container" >
            <div className="sp-img-container" onMouseMove={handleMouseMove}>
              <span className="lens" ref={lens}></span>
              <img src={productInfo.image} alt={productInfo.name} className="sp-img" />
              <div className="zoom-screen" 
                    onMouseEnter={handleZoomScreenEnter}
                    onMouseLeave={handleZoomScreenLeave} 
                    ref={zoomScreen} style={
                {
                  backgroundImage: `url(${productInfo.image})`,
                }}>
              </div>
            </div>
            <div className="sp-body">
              <h1 className="sp-title">{productInfo.name}</h1>
              <div className="rating">
                  <Rating rating={productInfo.rating} />
              </div>
              <p className="sp-desp">{productInfo.description}</p>
              <h4 className="sp-price">&#8377;{productInfo.currentPrice}</h4>
              <div className="btn-container">
                <button className="btn btn-primary" >Buy Now</button>
                <button className="btn btn-secondary" onClick={() => addToCart(productInfo.id)} >Add To Cart</button>
              </div>
            </div>
          </div>

          {reviewData && (
            (<div style={bodyStyle}>
              <div className="review-wrapper section-margin">
                {showAlert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>You can only add a review once.</strong>
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
                {emptyInput && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>Review must not be empty.</strong>
                </div>}
                <h1 className="review-title">Reviews</h1>
                {/* <hr /> */}
                <div className="input-container">
                  <input
                    className="review-input"
                    value={inputValue}
                    onChange={(e) => handleInput(e.target.value)}
                    disabled={(showAlert) ? true : false}
                  />
                  <button disabled={showAlert ? true : false} className="btn btn-primary submit-review-btn" onClick={handleClick}>Add Review</button>
                </div>

                <div className="review-container" >
                  {(reviewInfo.reviews.map((review) => (
                    <div className="review position-relative" style={darkModeStyle}>
                      <div className="review-top">
                        <img src={review.userPic} className="user-pic" />
                        <div className="name-rating-container">
                          <h6>{review.customerName}</h6>
                          <div className="stars-container">
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                          </div>
                        </div>
                      </div>
                      <div
                        contentEditable={editMode}
                        suppressContentEditableWarning={editMode}
                        className="review-body" ref={inputRef}>
                        {review.commentText}
                      </div>
                      <div className="review-footer position-absolute">
                        <div className="ld-container float-end">
                          <span className="likes-counter">{review.likes}</span> <i style={review.clickedLike ? clickedBtnStyles : defaultStyles} className="like-btn" onClick={() => handleLd(productInfo.id, review.id, "like", review.clickedLike, review.clickedDisLike)} ><FontAwesomeIcon icon={faThumbsUp} /></i>
                          <i style={review.clickedDisLike ? clickedBtnStyles : defaultStyles} className="dislike-btn" onClick={() => handleLd(productInfo.id, review.id, "dislike", review.clickedLike, review.clickedDisLike)}><FontAwesomeIcon icon={faThumbsDown} /></i><span className="dislikes-counter">{review.dislikes}</span>
                        </div>
                        {(review.currentReview && !editMode) && <div className="ed-container" style={textStyle}>
                          <div className="edit-btn" onClick={handleEdit}>Edit</div>
                          <div className="del-btn" onClick={() => handleDel(productInfo.id, review.id, "delete")}>Delete</div>
                        </div>}
                        {(review.currentReview && editMode) && <div className="save-cancal-container" style={textStyle}>
                          <div className="save-btn" onClick={() => handleSave(productInfo.id, review.id, inputRef.current.innerText)} >Save</div>
                          <div className="cancal-btn" onClick={() => setEditMode(false)}>Cancal</div>
                        </div>}
                      </div>
                    </div>
                  )))}
                  {reviewInfo.reviews.length == 0 && <h5>Be the first to write a review.</h5>}
                </div>
              </div>
            </div>)
          )}
        </>
      )}
    </div>

  );
}
