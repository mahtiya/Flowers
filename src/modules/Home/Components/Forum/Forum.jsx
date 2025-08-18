import '../../../../assets/scss/components/home/forum.scss';
import Design from './../../../../assets/icons/design_right.svg'

import ForumForm from './ForumForm/ForumForm';

export default function Forum() {
    return (
        <div className="forum">
            <div className="design_right">
                <img className='design_right_img' src={Design} alt="" />
            </div>
            <div className="container">
                <h6 className='forum_title'>Форум</h6>
                <ul className="forum_list">
                    <ForumForm title="Какие цветы под запретом: что нельзя дарить" sup="Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами..." />
                    <ForumForm title="Какие цветы под запретом: что нельзя дарить" sup="Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами..." />
                    <ForumForm title="Какие цветы под запретом: что нельзя дарить" sup="Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами..." />
                </ul>

            </div>
        </div>
    )
}
