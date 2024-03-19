const CategoryCard: React.FC = () =>{
    return(
        <div className="flex flex-row">
            <div className="w-[250px] h-[150px] flex flex-col items-center justify-center border-[#9BECE1] border-[1px] rounded-lg gap-[10px] m-[10px] cursor-pointer transition duration-300 ease-in hover:bg-[#9BECE1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="black" d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72l-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69l72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96m432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16" /></svg>
                <h1>All Schedules</h1>
            </div>
            <div className="w-[250px] h-[150px] flex flex-col items-center justify-center border-[#9BECE1] border-[1px] rounded-lg gap-[10px] m-[10px] cursor-pointer transition duration-300 ease-in hover:bg-[#9BECE1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                <h1>Personal Erands</h1>
            </div>
            <div className="w-[250px] h-[150px] flex flex-col items-center justify-center border-[#9BECE1] border-[1px] rounded-lg gap-[10px] m-[10px] cursor-pointer transition duration-300 ease-in hover:bg-[#9BECE1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M5.5 21c-.78 0-1.46-.45-1.79-1.1L1.1 10.44L1 10a1 1 0 0 1 1-1h4.58l4.6-6.57a.997.997 0 0 1 1.65.01L17.42 9H22a1 1 0 0 1 1 1l-.04.29l-2.67 9.61c-.33.65-1.01 1.1-1.79 1.1zM12 4.74L9 9h6zM12 13a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
                <h1>Grocery List</h1>
            </div>
            <div className="w-[250px] h-[150px] flex flex-col items-center justify-center border-[#9BECE1] border-[1px] rounded-lg gap-[10px] m-[10px] cursor-pointer transition duration-300 ease-in hover:bg-[#9BECE1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4l.11-.94L5 5.5L12 2l7 3.5v5h-1V6l-2.11 1.06zm-4 6c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
                <h1>School Work</h1>
            </div>
        </div>
        
    )
}

export default CategoryCard 