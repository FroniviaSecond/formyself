import React from 'react';
import {useSearchParams} from 'react-router-dom';
import { GET_POPUPS, QUERY_PARAMS } from '../../configs/config';

const NewsItem = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='news-list__item'>
      <h1 className='mb-8 text-2xl'>Новость</h1>
      <div className='popups-container'>
        <p onClick={() => {
            setSearchParams({
              [QUERY_PARAMS.popup]: GET_POPUPS.alert
            });
        }}>Alert</p>
        <p>Confirm</p>
        <p>Notification</p>
      </div>
    </div>
  )
}

export default NewsItem;