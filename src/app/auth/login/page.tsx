import Image from "next/image";
import LoginAccountForm from "./form";

async function LoginAccount() {
  return (
    <div className='lg:flex h-screen'>
      <div className='w-1/2 h-full bg-accent/50 max-lg:hidden flex justify-center items-center'>
        <Image
          alt='signin global svg'
          height={500}
          width={500}
          src='/svgs/global.svg'
          loading='lazy'
        />
      </div>
      <div className='lg:w-1/2 h-full flex justify-center items-center'>
        <LoginAccountForm />
      </div>
    </div>
  );
}
export default LoginAccount;
