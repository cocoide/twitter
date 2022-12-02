import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
    return (
        <div className="flex items-center p-3 rounded-full bg-gray-200 relative">
            <MagnifyingGlassIcon className='h-5 z-50 text-gray-500' />
            <input type='search' placeholder='Search Twitter'
                className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 
                focus:shadow-lg focus:bg-white bg-gray-100 ' />
        </div>
    )
}
export default SearchBar