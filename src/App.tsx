import React, { useState } from "react";
import Table from "./components/Table";
import { type line } from "./models/line";
import Actions from "./components/Actions";

const getLocalOvLine = () => {
    const lines = window.localStorage.getItem("ov-lines");
    // const tableRef = useRef<HTMLTableElement>(null);
    if (lines) {
        return JSON.parse(lines);
    } else {
        return Array.from({ length: 20 }, (_, i) => ({
            id: (i + 1).toString(),
            lineName: "",
            item: "",
            location: ""
        }));
    }
};

const App = () => {
    const initialTable: line[] = getLocalOvLine();

    const [rows, setRows] = useState<line[]>(initialTable);

    const updateRow = (id: string, key: keyof line, value: string) => {
        setRows((preRows) => {
            const updatedRows = preRows.map((row) =>
                row.id === id ? { ...row, [key]: value } : row
            );
            window.localStorage.setItem(
                "ov-lines",
                JSON.stringify(updatedRows)
            );
            console.log(id, key, value);
            return updatedRows;
        });
    };

    const handleReset = () => {
        if (confirm("Are you sure to reset?")) {
            setRows(
                Array.from({ length: 20 }, (_, i) => ({
                    id: (i + 1).toString(),
                    lineName: "",
                    item: "",
                    location: ""
                }))
            );
            localStorage.removeItem("ov-lines");
        }
    };
    return (
        <>
            <Table rows={rows} updateRow={updateRow} />
            <Actions handleReset={handleReset} />
        </>
    );
};

export default App;
