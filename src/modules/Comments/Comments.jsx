import './../../assets/scss/pages/comments.scss';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';

export default function Comments() {
  const [review, setReview] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; // показывать только по 3

  useEffect(() => {
    fetch("https://68a2cb21c5a31eb7bb1dcd1b.mockapi.io/review")
      .then(res => res.json())
      .then(data => setReview(data))
      .catch(err => console.error('ошибка загрузки:', err))
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // скролл вверх при переключении
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedReviews = review.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className='comment'>
      <div className="container">
        <ul className='comment_list'>
          {paginatedReviews.map((item) => (
            <li key={item.id} className="comment_li">
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

        <div className="comment_pagination">
          <Pagination
            count={Math.ceil(review.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            color="secondary"
          />
        </div>
      </div>
    </section>
  )
}
