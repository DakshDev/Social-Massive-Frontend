import CreateAccountForm from "./form";

async function CreateAccount() {
  return (
    <div className="lg:flex h-screen">
      <div className="w-1/2 h-full bg-red-300 max-lg:hidden"></div>
      <div className="lg:w-1/2 h-full flex justify-center items-center">
        <CreateAccountForm />
      </div>
    </div>
  );
}

export default CreateAccount;
