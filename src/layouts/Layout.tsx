import { Header } from "../containers/Header";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen bg-black">
      <Header />
      {children}
    </div>
  );
};

export { Layout };
