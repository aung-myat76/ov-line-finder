// import React, { useEffect, useRef } from "react";
import { type line } from "../models/line";
import { allItems } from "../models/items";
import Input from "./Input";
import { useState } from "react";

interface TableProps {
    rows: line[];
    updateRow: (id: string, key: keyof line, value: string) => void;
    sortType: "asc" | "dsc";
    sortRows: () => void;
}

const Table = ({ rows, updateRow, sortRows, sortType }: TableProps) => {
    return (
        <table id="table">
            <thead>
                <tr>
                    <th className="no">No.</th>
                    <th onClick={sortRows} className="lineName">
                        line {sortType === "asc" ? "\u2191" : "\u2193"}
                    </th>
                    <th className="item">Item</th>
                    <th className="location">Location</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={row.id}>
                        <td>{i + 1}</td>
                        <td className="lineName">
                            <span></span>
                            <Input
                                type="string"
                                initialValue={row.lineName}
                                onSave={(value) =>
                                    updateRow(row.id, "lineName", `OV-${value}`)
                                }
                            />
                        </td>
                        <td className="item">
                            <Input
                                type="string"
                                list={"items"}
                                initialValue={row.item}
                                onSave={(value) =>
                                    updateRow(row.id, "item", value)
                                }
                            />
                            <datalist id="items">
                                {allItems.map((item) => (
                                    <option key={item} value={item} />
                                ))}
                            </datalist>
                        </td>

                        <td className="location">
                            <Input
                                type="string"
                                initialValue={row.location}
                                onSave={(value) =>
                                    updateRow(row.id, "location", value)
                                }
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
