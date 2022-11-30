
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const SidebarProfile = () => {
    return (
        <div className="hoverEffect p-2
        text-gray-700 flex items-center justify-center xl:justify-start mt-auto mb-2">
            <Image
                src="/twitter.svg"
                alt="user-img"
                className="h-10 w-10 rounded-full xl:mr-2"
                width={40}
                height={40}
            />

            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold"
                >kazukioshima
                </h4>

                <p className="text-gray-500"
                >@kazuki
                </p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
    )
}
export default SidebarProfile