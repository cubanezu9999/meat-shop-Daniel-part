import { Navbar } from "../Navbar/Navbar";
import { PromotionsCard } from "../components/offers/PromotionsCard";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { store } from "../firebase";

function Promotions() {
  const [promotions, setPromotions] = useState([]);
  useEffect(() => {
    getDocs(collection(store, "promotions")).then((data) => {
      const resultdata = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setPromotions(resultdata);
    });
  }, []);
  return (
    <div>
      <Navbar />
      {promotions.map((el) => (
        <PromotionsCard
          key={el.id}
          discount={el.discount}
          name={el.name}
          price={el.price}
          imageUrl={el.imageURL}
          unit={el.unit}
        />
      ))}
    </div>
  );
}

export { Promotions };
