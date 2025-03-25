// React Star Rating
// StarRAting

// CSS
span {
    font-size: 50px;
    cursor: pointer;
  }
  
div {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
.colored {
    color: yellow;
  }
  
.blank {
    color: black;
  }

// React Code
import { useState } from "react";

const Rating = ({ ratingValue }) => {
  const [ratingCount, setRatingCount] = useState();
  const [hoverCount, setHoverCount] = useState(0);
  const arrRating = new Array(ratingValue).fill(0);
  return (
    <div>
      {arrRating.map((val, idx) => {
        return (
          <span
            className={
              (hoverCount === 0 && idx < ratingCount) || idx < hoverCount
                ? "colored"
                : "blank"
            }
            key={idx}
            onClick={() => setRatingCount(idx + 1)}
            onMouseOver={() => setHoverCount(idx + 1)}
            onMouseLeave={() => setHoverCount(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;

  