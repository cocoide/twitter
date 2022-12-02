import Image from 'next/image'

const TwitterIcon = () => {
    return (
        <div>
            <Image src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitterIcon"
                height={58} width={58}
                className="mb-10 hover:bg-blue-100 rounded-full cursor-pointer" />
        </div>
    )
}
export default TwitterIcon