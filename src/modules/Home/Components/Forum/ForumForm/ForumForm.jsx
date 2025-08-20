import './../../../../../assets/scss/components/home//forum.scss';

export default function ForumForm(props) {
    return (
        <li className="forum_item">
            <div className="forum_img">
                <img className='forum_picture' src={props.img} alt="" />
            </div>
            <h2 className='forum_text'>{props.title}</h2>
            <p className='forum_suptitle'>{props.sup}</p>
        </li>

    )
}
