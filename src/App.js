import { Layout } from 'components/Layout';
import { Book } from 'pages/Book';
import { Books } from 'pages/Books';
import { Create } from 'pages/Create';
import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router';

function App(props) {
  return (
    <Layout {...props}>
      <Routes>
        <Route path="/books/:bookId" element={<Book {...props} />} />
        <Route path="/books" element={<Books {...props} />} />
        <Route path="/create" element={<Create {...props} />} />
        <Route path="/" element={<Home {...props} />} />
      </Routes>
    </Layout>
  );
}

export default App;
