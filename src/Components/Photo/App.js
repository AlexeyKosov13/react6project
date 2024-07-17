import React, { useState } from 'react';
import Collection from './Collection';
import './Photo.scss';

const cats = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
];

function AppPhoto() {
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [collections, setCollections] = useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`./data.json`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json.collections);
      })
      .catch((err) => {
        console.warn(err);
        alert('ошибка при получении данных');
      }).finally(() => setIsLoading(false));
  }, [categoryId, page]);

  

  return (
    <div className="AppPhoto">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, index) => (
            <li className={categoryId == index ? 'active' : ''}
              key={index}
              onClick={() => setCategoryId(index)}
              >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          className="search-input"
          placeholder="Поиск по названию"
          searchValue={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <div className="content">


        {isLoading ? (<h2>Идет загрузка ...</h2>) : (collections.filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase())
        ).map((obj, index) => (
          <Collection
            key={index}
            name={obj.name}
            images={obj.photos}
          />
        ))) }
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, i) => (
          <li className={page == i+1? 'active' : ''} onClick={() => setPage(i+1)}>{i + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppPhoto;
