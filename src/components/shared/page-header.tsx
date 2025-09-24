type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeader;
