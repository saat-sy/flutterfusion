import { componentTitle } from "../common/constants";
import { CodeContainerProperties } from "./model/container_properties";

export const codeContainer: CodeContainerProperties = {
    child: {
        beginning: "child: ",
        end: ""
    },
    width: {
        beginning: "width: ",
        end: ","
    },
    height: {
        beginning: "height: ",
        end: ","
    },
    decoration: {
        color: {
            beginning: "color: Color(0xFF",
            end: "),"
        },
        borderRadius: {
            beginning: "borderRadius: BorderRadius.circular(",
            end: "),"
        },
        border: {
            borderColor: {
                beginning: "color: Color(0xFF",
                end: "),"
            },
            borderWidth: {
                beginning: "width: ",
                end: ","
            },
            [componentTitle]: "border: Border.all",
        },
        [componentTitle]: "decoration: BoxDecoration",
    },
    [componentTitle]: "Container",
};