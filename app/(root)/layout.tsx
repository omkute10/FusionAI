import { Navbar } from "../components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
        <Navbar></Navbar>
        <main className="md:pl-20 pt-16 h-full"></main>
        {children}
    </div>
  )
};

export default RootLayout;
