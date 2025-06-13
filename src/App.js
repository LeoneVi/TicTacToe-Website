import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game, Welcome, TryAgain, NoPage } from './pages';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Welcome />} />
                <Route path="/TicTacToe-Website" element={<Welcome />} />
                <Route path="/game" element={<Game />} />
                <Route path="/retry" element={<TryAgain />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}
