import { RamdomUserType } from '../../../models/users'

const RamdomUsers = (props: RamdomUserType) => {
    return (
        <div className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
            <img src={props.picture.large} className="rounded-full h-10 w-10" />

            <div className="truncate ml-4 leading-5">
                <h4 className="font-bold hover:underline text-[14px]"> {props.login?.username}</h4>
                <h5 className='text-gray-500 text-[13px]'>{props.name?.first + " " + props.name?.last}</h5>
            </div>

            <button className='ml-auto bg-black rounded-full px-3.5 py-1.5 text-small text-white font-bold'>Follow</button>
        </div>
    )
}
export default RamdomUsers