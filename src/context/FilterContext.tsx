import { ArrowBigDownIcon, ChevronDown, ChevronUp } from "lucide-react";
import {
    PropsWithChildren,
    ReactComponentElement,
    ReactNode,
    createContext,
    useContext,
    useState,
} from "react";
const context = createContext({} as any);

export const Dropdown = ({ children }: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <context.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </context.Provider>
    );
};

const Button = ({ children }: PropsWithChildren) => {
    const { isOpen, setIsOpen } = useContext(context);
    return (
        <button
            onClick={() => setIsOpen((currentValue: boolean) => !currentValue)}>
            {children}{" "}
            {isOpen ? (
                <ChevronDown key={"open"} />
            ) : (
                <ChevronUp key={"closed"} />
            )}
        </button>
    );
};

const List = ({ children }: PropsWithChildren) => {
    const { isOpen } = useContext(context);
    return <>{isOpen ? <ul>{children}</ul> : null}</>;
};

const Item = ({ children }: PropsWithChildren) => {
    return <li>{children}</li>;
};

Dropdown.Button = Button;
Dropdown.List = List;
Dropdown.Item = Item;
