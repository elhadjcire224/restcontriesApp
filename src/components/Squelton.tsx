import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";

const Squelton = () => {
    const { isDark } = useTheme();
    return (
        <article
            className={cn(
                "rounded  bg-white shadow-md cursor-pointer h-full w-full",
                isDark && "bg-dark-blue my-3 "
            )}>
            <div className=" h-[150px] sm:h-[200px] animate-pulse bg-gray-500 rounded"></div>
            <div className="p-5 flex flex-col gap-2  ">
                <h3
                    className={cn(
                        "bg-gray-500 rounded-md animate-pulse w-full h-6"
                    )}></h3>
                <div className="flex gap-2">
                    <p className={cn("bg-gray-500 w-[30%] rounded-md animate-pulse h-6")}></p> 
                    <span className={cn("bg-gray-500  w-[70%] rounded-md animate-pulse h-6")}></span>
                </div>
                <div className="flex gap-2">
                    <p className={cn("bg-gray-500 w-[30%] rounded-md animate-pulse h-6")}></p> 
                    <span className={cn("bg-gray-500  w-[70%] rounded-md animate-pulse h-6")}></span>
                </div>
                <div className="flex gap-2">
                    <p className={cn("bg-gray-500 w-[30%] rounded-md animate-pulse h-6")}></p> 
                    <span className={cn("bg-gray-500  w-[70%] rounded-md animate-pulse h-6")}></span>
                </div>
            </div>
        </article>
    );
};

export default Squelton;
