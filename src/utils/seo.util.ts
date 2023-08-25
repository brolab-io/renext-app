import { Metadata } from "next";
const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE;
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

export function buildMetadata(title?: string, description?: string): Metadata {
    return {
        title: title ? `${title} | ${SITE_TITLE}` : SITE_TITLE,
        description: description || SITE_DESCRIPTION,

    }
}