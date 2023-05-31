const SignUpForm = () => {
  return (
    <form action="#" className="my-5 flex w-full flex-col gap-3">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="******"
          className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray2"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full bg-clr-black py-2 text-sm text-clr-gray1"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
