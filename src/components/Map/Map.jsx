
import './../../assets/scss/components/map.scss';
export default function Map() {
    return (
        <div className="map">
            <div className="container">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4098295984bf3db97e6cbe2fe90f9ab805325e2063f3a5bb995b6471d5b89bc&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
            </div>
        </div>
    );
}
