import { componentTitle } from "../common/constants";
import { CodeRowProperties } from "./model/row_properties";

export const codeRow: CodeRowProperties = {
    [componentTitle]: "Row",
    children: {
        beginning: "children: [\n",
        end: "],"
    },
    mainAxisSize: {
        beginning: "mainAxisSize: MainAxisSize.",
        end: ","
    },
    crossAxisAlignment: {
        beginning: "crossAxisAlignment: CrossAxisAlignment.",
        end: ","
    },
    mainAxisAlignment: {
        beginning: "mainAxisAlignment: MainAxisAlignment.",
        end: ","
    },
};