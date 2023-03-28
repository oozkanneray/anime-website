function SearchBar() {
    return ( 
        <div className="flex items-center justify-center">
        <div className="flex flex-row m-10">
            <input
            className="border-2 border-black m-2 rounded-lg text-2xl pl-3"></input>
            <button 
            className="w-28 h-12 border-4 m-2 border-black bg-white text-black text-2xl rounded-lg hover:bg-navbarColor hover:text-white">Search</button>
        </div>
    </div>
     );
}

export default SearchBar;