import HeaderLogo from './../../assets/images/Логотип.png';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import './../../assets/scss/components/header/header.scss';
import HeaderList from './HeaderList/HeaderList';
import Design from './../../assets/icons/design_right.svg'
import { Link } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import useCartStore from '../../store/useCartStore';

export default function Header() {
  const cart = useCartStore((state) => state.cart);

  const totalQuantity =
    (cart.flowers?.length || 0) +
    (cart.presents?.length || 0) +
    (cart.cakes?.length || 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header_block">
          <div className="header_img">
            <Link to={"/"}>
              <img className="header_img" src={HeaderLogo} alt="" />
            </Link>
          </div>
          <div className="header_team">
            <div className="head_search">
              <HeaderSearch />
            </div>
            <div className="head_list">
              <HeaderList />
            </div>
          </div>
          <Link to={"/cart"} className="header_right">
            <button className="header_cart">
              <BsCart4 className="icon" />
              <div className="count">{totalQuantity}</div>
            </button>
          </Link>
        </div>
      </div>
      <div className="header_design">
        <img className="design_img" src={Design} alt="" />
      </div>
    </header>
  );
}