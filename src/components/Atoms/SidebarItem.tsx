type Props = {
    text?: string
    Icon?: any
    active: boolean
}

const SidebarItem = (props: Props) => {
    return (
        <div className='hoverEffect flex items-center
         text-gray-700 justify-center xl:justify-start text-lg space-x-3'>
            <props.Icon className="h-7 w-7 m-3" />
            <span className={`${props.active && "font-bold"}
            hidden xl:inline-block`}
            >{props.text}</span>
        </div>
    )
}
export default SidebarItem