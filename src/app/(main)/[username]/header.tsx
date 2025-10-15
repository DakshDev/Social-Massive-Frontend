import Image from "next/image";

async function Header({ avatar, banner }: { avatar: string | null; banner: string | null }) {
  const gradientColor = "bg-gradient-to-r from-purple-500  to-blue-500";
  return (
    <header className='relative'>
      <div
        className={`h-60 rounded-sm relative ${gradientColor} ${
          !banner && "bg-[url('/images/avatar.jpg')] bg-center bg-cover bg-no-repeat"
        }`}
      >
        <Image
          alt='profile pic'
          src='/images/avatar.jpg'
          height={100}
          width={100}
          className='h-4/5 w-auto object-cover object-center rounded-full border-2 border-border absolute left-0 -bottom-10'
          priority={true}
        />
        <>{avatar}</>
      </div>
    </header>
  );
}

export default Header;
