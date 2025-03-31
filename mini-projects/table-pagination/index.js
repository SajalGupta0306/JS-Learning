// table pagination
// pagination
// skip
// limit

// css
.card {
  display: flex;
  height: 200px;
  width: 150px;
  border: 1px solid;
  flex-direction: column;
  text-align: center;
}

img {
  height: 100%;
  width: 100%;
}

/* .mini {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
} */

.paginate {
  display: flex;
  gap: 10px;
  cursor: pointer;
}

h5 {
  height: 15px;
  width: 20px;
  border: 1px solid;
  text-align: center;
}


// code
export default function App() {
  const [data, setData] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [startEnd, setStartEnd] = useState({
    start: 0,
    end: 10,
  });
  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  const fetchProducts = async () => {
    const resp = await fetch("https://dummyjson.com/products?limit=0");
    const apiData = await resp.json();
    setData(apiData.products);
    setTotalProducts(apiData.total);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const getPageData = (e) => {
    const currentPage = e.target.innerText;
    if (currentPage === 1) {
      setStartEnd({
        start: 0,
        end: 10,
      });
    } else {
      const startIdx = (currentPage - 1) * PAGE_SIZE;
      const endIdx = startIdx + PAGE_SIZE;
      setStartEnd({
        start: startIdx,
        end: endIdx,
      });
    }
  };

  return (
    <>
      <div className="App">
        {data?.length > 0 &&
          data.slice(startEnd.start, startEnd.end)?.map((prod) => {
            return (
              <div key={prod.id} className={"card"}>
                <img src={prod.thumbnail} alt={prod.title} />
                {prod.title}
                {/* <div className={"mini"}>
                
                  <strong> {prod.price}</strong>
                </div> */}
              </div>
            );
          })}
      </div>
      <div className="paginate">
        {[...Array(totalPages).keys()].map((val, idx) => (
          <h5 onClick={getPageData} key={idx}>
            {idx + 1}
          </h5>
        ))}
      </div>
    </>
  );
}
