interface DashboardLayoutProps {
    children: React.ReactNode;
  };
  
  const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
      <div className="min-h-screen">
        <div className="flex w-full h-full">
          <div className="lg:pl-[264px]">
            <div className="mx-auto max-w-screen-2xl h-full">
                {/* TODO: Navbar */}
                <main>
                    {children} 
                </main>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardLayout;
  