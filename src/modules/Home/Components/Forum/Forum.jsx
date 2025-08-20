import '../../../../assets/scss/components/home/forum.scss';
import Design from './../../../../assets/icons/design_right.svg'
import ForumImg from './../../../../assets/images/forum.png';
import ForumImg2 from './../../../../assets/images/forum2.png';
import ForumImg3 from './../../../../assets/images/forum3.png';



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
                    <ForumForm img={ForumImg} title="Какие цветы под запретом: что нельзя дарить" sup="Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами..." />
                    <ForumForm img={ForumImg2} title="Какие цветы под запретом: что нельзя дарить" sup="Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами..." />
                    <ForumForm img={ForumImg3} title="Какие цветы под запретом: что нельзя дарить" sup="Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами..." />
                </ul>

            </div>
        </div>
    )
}
