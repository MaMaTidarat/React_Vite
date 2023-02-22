import LoginPages from 'components/Pages/LoginPages';
import image from './assets/react.svg';

export default function App() {
   const data = import.meta.env.VITE_SOME_KEY;
   return (
      <div>
         <h1 className="text-3xl font-bold underline bg-yellow-200 text-red-300">Hello world!</h1>
         <img src={image} alt=""></img>
         <div>{data}</div>
         <LoginPages />
      </div>
   );
}
