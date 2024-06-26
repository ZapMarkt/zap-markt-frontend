import Logo from '@/assets/logo.svg';
import LogoText from '@/assets/logo_completa.svg';
import LoginForm from './LoginForm';

const LoginContainer = () => {
  return (
    <div className="w-[480px] bg-white rounded-[10px] pt-[26px]">
      <div>
        <div className="flex items-center justify-center gap-1">
          <img src={Logo} alt="Logo" className="w-[85px] h-[77px]" />
          <img
            src={LogoText}
            alt="Logo with text"
            className="w-[210px] h-[46px]"
          />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginContainer;
