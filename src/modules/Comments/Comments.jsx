import './../../assets/scss/pages/comments.scss';
import { useEffect, useState } from 'react';

export default function Comments() {
  const [review, setReview] = useState([])

  useEffect(() => {
    fetch("https://68a2cb21c5a31eb7bb1dcd1b.mockapi.io/review")
      .then(res => res.json())
      .then(data => setReview(data))
      .catch(err => console.error('ошибка загрузки:', err))
  }, [])
  return (
    <section className='comment'>
      <div className="container">
        <ul className='comment_list'>
          {review.map((item) => (
            <li className="comment_li">
              <div className="comment_header">
                <div className="comment_img">
                  <img className='comments_img' src={item.image} alt="" />
                </div>
                <h5 className='comment_name'>{item.name}</h5>
              </div>
              <p className='comment_review'>{item.review}</p>
              <div className="comment_block">
                <p className="comment_rating">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </p>
                <p className='comment_create'>{item.create}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section >

  )
}
