import React from "react";

import Categories from "../components/Categories.jsx";
import Sort from "../components/Sort.jsx";
import PizzaBlock from "../components/PizzaBlock.jsx";
import Skeleton from "../components/Skeleton.jsx";
//https://643c17c170ea0e6602a13bcc.mockapi.io/items

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState();
  const [sortType, setSortType] = React.useState(0);
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://644293e776540ce225901b15.mockapi.io/items?category=` + categoryId
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategories={(i) => setCategoryId(i)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map((value) => (
              <PizzaBlock
                key={value.id}
                title={value.title}
                price={value.price}
                image={value.imageUrl}
                sizes={value.sizes}
                types={value.types}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
