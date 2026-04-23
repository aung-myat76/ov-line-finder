import { useEffect, useState, type FC } from "react";

interface InputType {
    initialValue: string;
    list?: string;
    id?: string;
    type: string;
    onSave: (value: string) => void;
}

const Input: FC<InputType> = ({ initialValue, list, type, id, onSave }) => {
    const [inputValue, setInputValue] = useState(initialValue);

    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue]);

    return (
        <input
            className="table-input"
            type={type}
            value={inputValue}
            list={list ? list : ""}
            id={id ? id : ""}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => onSave(inputValue)}
        />
    );
};

export default Input;
