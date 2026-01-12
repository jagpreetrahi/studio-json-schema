import YAML from "js-yaml";
import type { Json } from "@hyperjump/json-pointer";

type ParseSchema = (schema: string, format: string) => Json;

export const parseSchema: ParseSchema = (schema: string, format: string) => {
    if (format === "yaml") {
        return YAML.load(schema);
    } else {
        return JSON.parse(schema);
    }
}