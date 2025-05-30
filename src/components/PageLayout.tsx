const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col mb-14 ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export const FadeInSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`fade-in-up mt-8 md:mt-10 ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export const FlexColumn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-8  ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export const FlexRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`flex ${className ? className : ""}`}>{children}</div>;
};

export const FlexRowToColumn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-y-2  md:flex-row md:gap-x-40 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
