// import buttonStyles from 'components/Button/Button';
import buttonStyles from './Button.module.scss';

const Button = () => {
   return (
      <button className={buttonStyles.button} onClick={() => alert('I am styled with CSS Modules')}>
         <span className={buttonStyles.label}>Button</span>
      </button>
   );
};

export default Button;
