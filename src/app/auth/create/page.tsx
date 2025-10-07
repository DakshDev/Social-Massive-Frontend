import Image from "next/image";
import CreateAccountForm from "./form";

async function CreateAccount() {
  return (
    <div className="lg:flex h-screen">
      <div className="w-1/2 h-full bg-accent/50 max-lg:hidden flex justify-center items-center p-4">
        <Image
          alt="signin global svg"
          height={500}
          width={500}
          src="/svgs/global.svg"
          priority={true}
          className="size-auto object-contain"
        />
      </div>
      <div className="lg:w-1/2 h-full flex justify-center items-center">
        <CreateAccountForm />
      </div>
    </div>
  );
}

export default CreateAccount;
