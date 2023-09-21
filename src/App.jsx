import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './Theme';

const queryclient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/starred" element={<Starred />}></Route>
            </Route>

            <Route path="/show/:showId" element={<Show />}></Route>
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
