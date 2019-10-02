import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>ホーム</h1>
      <Link to="/quiz">クイズページへ移動</Link>
    </div>
  );
};

export default Home;