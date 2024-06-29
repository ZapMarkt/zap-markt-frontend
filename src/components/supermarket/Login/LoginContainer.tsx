import Logo from '@/assets/logo.svg';
import LogoText from '@/assets/logo_completa.svg';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginContainer = () => {
  return (
    <div className="bg-[url('./src/assets/bg-login-page-supermarket.png')] bg-cover h-screen w-screen flex justify-center items-center">
      <div className="w-[480px] bg-white rounded-[10px] pt-[26px]">
        <div>
          <div className="flex items-center justify-center gap-1 mb-[46px]">
            <img src={Logo} alt="Logo" className="w-[85px] h-[77px]" />
            <img
              src={LogoText}
              alt="Logo with text"
              className="w-[210px] h-[46px]"
            />
          </div>
          <LoginForm />
          <div className="flex gap-2 justify-center items-center py-[26px] px-10 border-t border-customMkt-gray4">
            <p>Ainda não é nosso parceiro? </p>
            <Link
              to="/"
              className="text-right text-lg font-medium leading-customNormal text-customMkt-primary  hover:underline transition"
            >
              Cadastre sua loja
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
