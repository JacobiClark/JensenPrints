import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="header">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
