// table pagination
// table
// paginate

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
  const [skipCount, setSkipCount] = useState(0);
  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  const fetchProducts = async () => {
    const resp = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${skipCount}`
    );
    const apiData = await resp.json();
    setData(apiData.products);
    setTotalProducts(apiData.total);
  };

  useEffect(() => {
    fetchProducts();
  }, [skipCount]);

  const getPageData = (e) => {
    const currentPage = e.target.innerText;
    if (currentPage === 1) {
      setSkipCount(0);
    } else {
      const count = (currentPage - 1) * PAGE_SIZE;
      setSkipCount(count);
    }
  };

  return (
    <>
      <div className="App">
        {data?.length > 0 &&
          data?.map((prod) => {
            return (
              <div key={prod.id} className={"card"}>
                <img src={prod.thumbnail} alt={prod.title} />
                {prod.title}
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
