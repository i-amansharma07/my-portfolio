const PageLayout =  ({ children }: { children: React.ReactNode }) => {
  return (<div className="flex flex-col">
    {children}
    </div>);
};


export const FadeInSection =  ({ children }: { children: React.ReactNode }) => {
    return (<div className="fade-in-up mt-8 md:mt-10">
      {children}
      </div>);
};


export const FlexColumn = ({ children, className }: { children: React.ReactNode, className? : string }) => {
  return (<div className={`flex flex-col gap-8  ${className}`}>
    {children}
    </div>);
};



export default PageLayout;