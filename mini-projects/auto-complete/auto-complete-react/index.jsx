// auto complete
// autocomplete
// auto
// complete

// css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

input {
  height: 50px;
  width: 450px;
  border-radius: 15px;
  padding: 10px;
}

.flatCorner {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.listing {
  width: 450px;
  max-height: 500px;
  border: 2px solid;
  text-align: center;
  overflow-y: auto;
  /* display: none; */
}

.listingDisplay {
  display: none;
}

ul {
  list-style-type: none;
  text-align: left;
  padding-left: 20px;
  font-size: 24px;
  width: 100%;
}

li:hover {
  background-color: lightgray;
}

ul li {
  padding-top: 5px;
}

/* ul li:last-child {
  border-bottom: none;
}  */


//code
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [showList, setShowList] = useState(false);
  const [cache, setCache] = useState({});

  const fetchProducts = async () => {
    if (cache[searchKey]) {
      setProducts(cache[searchKey]);
      return;
    }
    const resp = await fetch(
      `https://dummyjson.com/products/search?q=${searchKey}`
    );
    const data = await resp.json();
    setProducts(data?.products);
    setCache((prev) => ({ ...prev, [searchKey]: data?.products }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchProducts, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchKey]);

  return (
    <div className="App">
      <h1>Auto Complete</h1>
      <input
        className=""
        placeholder="Search Anything"
        type="text"
        value={searchKey}
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyDown={(e) => {
          console.log(e.key);
        }}
      />
      {showList && (
        <div className={`listing`}>
          <ul>
            {products.map((product) => {
              return <li key={product.id}>{product.title}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
