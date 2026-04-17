import { type FC } from "react";
import html2canvas from "html2canvas";

interface ActionsType {
    handleReset: () => void;
}

const getNowDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-GB");
};

const Actions: FC<ActionsType> = ({ handleReset }) => {
    const handleSave = async () => {
        const table = document.querySelector("#table") as HTMLTableElement;

        if (table) {
            const canvas = await html2canvas(table);
            const imgData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.download = getNowDate() + " " + "OV-line.png";
            link.href = imgData;
            link.click();
            // html2canvas(table).then((canvas) => {
            //     const imgData = canvas.toDataURL("image/png");
            //     const button = document.querySelector(
            //         "#save"
            //     ) as HTMLAnchorElement;
            //     button.download = getNowDate() + " " + "OV-line.png";
            //     button.href = imgData;
            //     // button.click();
            //     // return;
            // });
        }
    };

    return (
        <div id="actions">
            <button id="reset" className="btn" onClick={handleReset}>
                reset
            </button>
            <button className="btn" id="save" onClick={handleSave}>
                save
            </button>
        </div>
    );
};

export default Actions;
