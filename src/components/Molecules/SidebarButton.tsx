
import { SidebarButtonType } from '../../models/button';
import { cn } from '../../utils/cn';

type ButtonProps = {
    ButtonName: SidebarButtonType
    Icon?: any
    ActiveIcon?: any
    className?: string
    btnActice?: SidebarButtonType
    setBtnActive: React.Dispatch<React.SetStateAction<SidebarButtonType>>
}

const SidebarButton = (props: ButtonProps) => {

    const classes: string[] = []
    props.className && classes.push(props.className)

    return (
        <button
            onClick={() => props.setBtnActive(props.ButtonName)}
            className={cn('hoverEffect  flex items-center  justify-center xl:justify-start text-lg space-x-3',
                props.btnActice === `${props.ButtonName}` ? " text-[#1DA1F2]" : "text-gray-700")}>

            {props.ActiveIcon && props.btnActice === `${props.ButtonName}` ?
                (<props.ActiveIcon className="h-7 w-7 m-3" />) : (<props.Icon className="h-7 w-7 m-3" />)}


            <span className={cn(`hidden xl:inline-block ${classes.join(' ')}`)}

            >{props.ButtonName}</span>
        </button>
    )
}
export default SidebarButton


    // props.appearance && classes.push('font-bold')

    // ↑三項演算子で表現した場合
    // props.appearance === 'font-bold'
    //     ? classes.push('font-bold')
    //     : classes.push('')
    
    // onClick?: React.MouseEventHandler<HTMLButtonElement>