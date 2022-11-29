type Props = {
    text?: string
    Icon?: any
    active: boolean
}

const SidebarItem = (props: Props) => {
    return (
        <div className='hoverEffect flex flex-row place-items-center m-1
        text-gray-700'>
            <props.Icon className="h-8 w-8 m-3" />
            <span className={`${props.active && "font-bold"}
            hidden xl:inline-block`}
            >{props.text}</span>
        </div>
    )
}
export default SidebarItem