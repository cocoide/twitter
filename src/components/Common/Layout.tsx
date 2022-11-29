import Sidebar from './Sidebar'

type LayoutProps = Required<{
    readonly children: React.ReactElement
}>
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    )
}

export default Layout