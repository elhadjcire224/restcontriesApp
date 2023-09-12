import { ReactNode } from "react";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";
import Squelton from "./Squelton";

const Squeletons = () => {
    const { isDark } = useTheme();
    let squeltons:ReactNode[] = []
    for (let index = 0; index < 8; index++) {
        squeltons.push(<Squelton key={index}/>)
        
    }
    return (
        <div
            className={cn(
                " w-full",
                "bg-light-gray px-3 min-h-screen",
                isDark && "bg-dark-bg",
                "grid grid-cols-[repeat(auto-fit,minmax(250px,300px))] justify-center  gap-5 p-6",
                
                
                isDark && "text-white bg-dark-bg",
                'sm:gap-16',
            )}>
                {squeltons}

            </div>
    );
};

export default Squeletons;
