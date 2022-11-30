import Image from 'next/image'
import { cn } from '../../utils/cn'

const TwitterIcon = (props: any) => {
    return (
        <div>
            <Image src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitterIcon"
                height={58} width={58}
                className={cn(`mb-${props.mb} hover:bg-blue-100 rounded-full cursor-pointer`)} />
        </div>
    )
}
export default TwitterIcon