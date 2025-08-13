import HeaderLogo from './../../assets/images/Логотип.png';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import './../../assets/scss/components/header.scss';
import HeaderMedia from './HeaderMedia/HeaderMedia';
import HeaderList from './HeaderList/HeaderList';
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_block">
          <div className="header_img">
            <img  className='header_img' src={HeaderLogo} alt="" />
          </div>
          <div className="header_team">
            <div className="head_search">
              <HeaderSearch />
            </div>
            <div className="head_list">
              <HeaderList />
            </div>
          </div>
          <div className="header_social_team">
            <HeaderMedia />
          </div>
        </div>
      </div>
    </header>
  )
}
