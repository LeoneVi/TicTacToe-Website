import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game, Welcome, NoPage } from './pages';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Welcome />} />
                <Route path="/game" element={<Game />} />
                <Route path="/login" element={<Welcome />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}
