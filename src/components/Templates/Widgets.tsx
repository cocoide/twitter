import SearchBar from '../Molecules/SearchBar'


const Widgets = () => {
    return (
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
            <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
                <SearchBar />
            </div>
        </div>
    )
}
export default Widgets