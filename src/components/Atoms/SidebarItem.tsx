import { cn } from '../../utils/cn';
import { buttonNameType } from '../Common/Sidebar';

type Props = {
    buttonName: buttonNameType
    Icon?: any
    IconActive?: any
    className?: string
    btnActice?: buttonNameType
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    setBtnActive: React.Dispatch<React.SetStateAction<buttonNameType>>

}

const SidebarItem = (props: Props) => {

    const classes: string[] = []
    props.className && classes.push(props.className)

    return (
        <button
            onClick={() => props.setBtnActive(props.buttonName)}
            className={cn('hoverEffect flex items-center  justify-center xl:justify-start text-lg space-x-3',
                props.btnActice === `${props.buttonName}` ? " text-[#1DA1F2]" : "text-gray-700")}>

            {props.IconActive && props.btnActice === `${props.buttonName}` ?
                (<props.IconActive className="h-7 w-7 m-3" />) : (<props.Icon className="h-7 w-7 m-3" />)}


            <span className={cn(`hidden xl:inline-block ${classes.join(' ')}`)}

            >{props.buttonName}</span>
        </button>
    )
}
export default SidebarItem


    // props.appearance && classes.push('font-bold')

    // ↑三項演算子で表現した場合
    // props.appearance === 'font-bold'
    //     ? classes.push('font-bold')
    //     : classes.push('')