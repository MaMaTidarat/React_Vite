// import image from './assets/react.svg';
import MainLayout from '@/components/Layouts/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export default function App() {
   // const data = import.meta.env.VITE_SOME_KEY;
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               {routes}
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
