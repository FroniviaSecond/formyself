import React from 'react';
import logo from './logo.svg';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import GetParametrsPopups from './adapters/popupManager';
import { ROUTER_ROUTES } from './configs/routes';

function App() {
  return (
    <div className="App">
      <header className='header'>
        Привет мир
      </header>
      <GetParametrsPopups />
      <main className='main'>
        <aside className='h-full flex flex-col w-80 border-r border-solid border-black'>
          <Link className='link' to='/'><h2>На главную</h2></Link>
          <Link className='link' to={ROUTER_ROUTES.feed}>Новости</Link>
          <Link className='link' to={ROUTER_ROUTES.calculation}>Страница с алгоритмами</Link>
          <Link className='link' to={ROUTER_ROUTES.conclusion}>Страница с выводами</Link>
        </aside>
        <section className='h-full w-full'>
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default App;
