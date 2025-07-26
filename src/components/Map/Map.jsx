
import './../../assets/scss/components/map.scss';
export default function Map() {
    return (
        <div className="map">
            <div className="container">
                <div className="map_team">
                        <iframe className='map_iframe'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.059625906143!2d72.77509593685457!3d40.55319608528539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdab9429e8dc6b%3A0xc61a25229ea83c9f!2z0KLQsNCx0LDQutCwINGG0LXQvdGC0YA!5e0!3m2!1sru!2skg!4v1753561896017!5m2!1sru!2skg"

                        ></iframe>
                    <div className="map_contact">
                        {/* <img src={Logo} alt="logo" className="map_logo" /> */}
                        <p className="map_phone">📞 Телефоны:</p>
                        <p className="map_text">+38 (063) 829 30 30</p>
                        <p className="map_text">+38 (067) 182 30 30</p>
                        <p className="map_text">💬 Skype: Flowers-Ukraine</p>
                        <p className="map_text">📧 Почта: flowers.ukraine2014@gmail.com</p>
                        <div className="map_socials">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-viber"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
