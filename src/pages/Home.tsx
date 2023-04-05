import { FC } from 'react';

const Home: FC = () => {
  return (
    <main className="main">
      <div className="breadcrumbs">
        <p>Главная</p>
      </div>
      <h2 data-testid="page-title">Главная</h2>
    </main>
  );
};

export default Home;
