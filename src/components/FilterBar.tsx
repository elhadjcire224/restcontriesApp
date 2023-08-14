import { useState } from "react";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { cn } from "../utils/cn";
import { useTheme } from "../context/useTheme";
import { ArrowBigDownIcon, ChevronDown, ChevronUp } from "lucide-react";
import { Dropdown } from "../context/FilterContext";


const people = [
    { id: 1, name: "Afrique" },
    { id: 2, name: "Amerique" },
    { id: 3, name: "Asie" },
    { id: 4, name: "Europe" },
    { id: 5, name: "Oceanie" },
];

export default function FilterBar() {
    const {isDark} = useTheme()
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    return (
        <Dropdown>
            <Dropdown.Button>Filtre par pay...</Dropdown.Button>
            <Dropdown.List>
                <Dropdown.Item>lol</Dropdown.Item>
            </Dropdown.List>
        </Dropdown>




        // <div className={cn("bg-white w-[60%] py-0 overflow-hidden rounded text-dark-blue-light shadow-md" ,isDark && "text-light-gray")}>
        //     <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        //     <Listbox.Button className={cn('bg-white w-[100%] h-[100%] p-3 ', isDark && "bg-dark-blue")}>{selectedPerson.name}</Listbox.Button>
        //     <Listbox.Options>
        //         {people.map((person) => (
        //             <Listbox.Option 
        //                 className={cn("w-max ")}
        //                 key={person.id}
        //                 value={person}
        //                 >
        //                 {person.name}
        //             </Listbox.Option>
        //         ))}
        //     </Listbox.Options>
        // </Listbox>
        // </div>
    );
}
