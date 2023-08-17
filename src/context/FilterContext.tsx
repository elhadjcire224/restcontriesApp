import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";
import { ReactNode, createContext, useContext, useState } from "react";

import { cn } from "../utils/cn";
import { useTheme } from "./useTheme";
import { Region } from "../hooks/useFilter";
const context = createContext({} as any);

export const Dropdown = ({
    children,
    className,
    onChange,
}: {
    children: ReactNode;
    className?: string;
    onChange: (region: Region) => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <context.Provider value={{ isOpen, setIsOpen, onChange }}>
            <div className={className}>{children}</div>
        </context.Provider>
    );
};

const Button = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const { isOpen, setIsOpen } = useContext(context);
    const { isDark } = useTheme();
    return (
        <button
            className={className}
            onClick={() => setIsOpen((currentValue: boolean) => !currentValue)}>
            {children}
            {isOpen ? (
                <ChevronDown
                    className={cn(
                        "h-5 text-dark-blue-light",
                        isDark && "text-light-gray"
                    )}
                    key={"open"}
                />
            ) : (
                <ChevronUp
                    className={cn(
                        "h-5 text-dark-blue-light",
                        isDark && "text-light-gray"
                    )}
                    key={"closed"}
                />
            )}
        </button>
    );
};

const List = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const { isOpen } = useContext(context);
    return <>{isOpen ? <ul className={className}>{children}</ul> : null}</>;
};

const Item = ({
    children,
    className,
    itemValue,
}: {
    children: ReactNode;
    className?: string;
    itemValue: any;
}) => {
    const { onChange, setIsOpen } = useContext(context);
    return (
        <li
            onClick={() => {
                onChange(itemValue);
                setIsOpen(false);
            }}
            className={className}>
            {children}
        </li>
    );
};

Dropdown.Button = Button;
Dropdown.List = List;
Dropdown.Item = Item;
