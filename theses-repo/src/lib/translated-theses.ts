import { useTranslations } from 'next-intl';

export const TranslatedTheses = () => {

    interface Thesis {
        title: string;
        author: string;
        supervisor: string;
        path: string;
        type: string;
        semester: string;
        summary: string;
        keywords: string;
    }

    const thesesData = useTranslations('Theses');
    let theses = [];

    for (let i=1 ; i <= thesesData.length ; i++) {
        const thesis: Thesis = {
            title: thesesData(`thesis-${i}.title`),
            author: thesesData(`thesis-${i}.author`),
            supervisor: thesesData(`thesis-${i}.supervisor`),
            path: thesesData(`thesis-${i}.path`),
            type: thesesData(`thesis-${i}.type`),
            semester: thesesData(`thesis-${i}.semester`),
            summary: thesesData(`thesis-${i}.summary`),
            keywords: thesesData(`thesis-${i}.keywords`),
        }
        theses.push(thesis)
    }

    return theses
}