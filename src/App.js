import { Layout } from 'components/Layout';
import { Book } from 'pages/Book';
import { Books } from 'pages/Books';
import { Create } from 'pages/Create';
import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/books/:bookId" element={<Book />} />
        <Route path="/books" element={<Books />} />
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
