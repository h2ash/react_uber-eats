import React from 'react'

const Main = ({ stores }) => (
  <main>
    <ul className='main__container'>
      {
        stores.map(store => (
          <li className='main__card'>
            <img
              className='main__card-image'
              src={store.heroImageUrl}
              alt="Food photo" />
            <div className='main__card-title'>{store.title}</div>
            <ul className='main__card-categories-list'>
              {store.categories.map(category => (
                <li className='main__card-categories-item'>
                  {category}
                </li>
              ))}
            </ul>
            <div className={store.etaRange ? 'main__card-time' : ''}>
              {store.etaRange && store.etaRange.text}
            </div>
          </li>
        ))
      }
    </ul>
  </main>
)

export default Main