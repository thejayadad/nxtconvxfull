import Header from "@/components/header/header";


const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="h-full">
        <Header />
        <main className="h-full pt-40">
        {children}
        </main>
    </div>
  )
}

export default layout