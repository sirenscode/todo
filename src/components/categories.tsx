import CategoryCard from "./CategoryCard";

const Categories: React.FC = () =>{
    return (
        <div className="mt-[50px] w-full pl-[30px] flex flex-col w-full flex items-center justify-center gap-[20px]">
            <h1 className="text-[1.2em] font-semilight">Welcome Back, <strong>SI</strong>RENS</h1>
            <CategoryCard/>
        </div>
    )
}

export default Categories;