import { useNavigate, useParams } from "react-router-dom";
import styles from './Product.module.css'
import Item from "../../components/product/Item";
import { useEffect, useState } from "react";
import pumpList from "../../store/pump";
export default function Product() {
  const navigate = useNavigate();
  const [showCategory , setShowCategory] = useState("helix");
  const {category} = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category) {
      setShowCategory(category);
    }
  }, [category]);

  useEffect(() => {
    setItems(
      pumpList.filter((item) => item.category === showCategory)
    );
  }, [showCategory]);

  return (
    <div className={styles.product}>
      <ul className={styles.list}>
          <li onClick={() => navigate("/product/helix")} 
            className={showCategory === "helix" ? styles.active : ""}>에코헬릭스</li>
          <li onClick={() => navigate("/product/multi")}
            className={showCategory === "multi" ? styles.active : ""}>멀티 펌프 시리즈</li>
          <li onClick={() => navigate("/product/functional")}
            className={showCategory === "functional" ? styles.active : ""}>기능성 펌프 시리즈</li>
          <li onClick={() => navigate("/product/compact")}
            className={showCategory === "compact" ? styles.active : ""}>콤팩트</li>
          <li onClick={() => navigate("/product/pen")}
            className={showCategory === "pen" ? styles.active : ""}>펜</li>
      </ul>
      <div className={styles.items}>
        {items.map((item) => <Item key={item.id} product={item} />)}
      </div>
    </div>
  )
}
