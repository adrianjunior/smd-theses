import { useTranslations } from 'next-intl';
import { ScreenSize } from './screen-size';

export const TranslatedStrings = () => {
    const t = useTranslations('Strings');
    const screenSize = ScreenSize();
    let textSize;

    (screenSize == 'xl') ? textSize = 'long' : textSize = 'short';

    const strings = {
        paths: {
            design: t(`paths.design.${textSize}`),
            systems: t(`paths.systems.${textSize}`),
            audiovisual: t(`paths.audiovisual.${textSize}`),
            games: t(`paths.games.${textSize}`),
            education: t(`paths.education.${textSize}`)
        },
        types: {
            paper: t(`types.paper.${textSize}`),
            monograph: t(`types.monograph.${textSize}`),
            report: t(`types.report.${textSize}`)
        },
        labels: {
            author: t(`labels.author.${textSize}`),
            supervisor: t(`labels.supervisor.${textSize}`),
            objective: t(`labels.objective.${textSize}`),
            keywords: t(`labels.keywords.${textSize}`),
            moreInfo: t(`labels.more-info.${textSize}`),
            lessInfo: t(`labels.less-info.${textSize}`),
            filters: t(`labels.filters.${textSize}`),
            confirmFilters: t(`labels.confirm-filters.${textSize}`),
            clearFilter: t(`labels.clear-filter.${textSize}`),
            clearAllFilters: t(`labels.clear-all-filters.${textSize}`),
            workTitle: t(`labels.work-title.${textSize}`),
            theme: t(`labels.theme.${textSize}`),
            darkTheme: t(`labels.dark-theme.${textSize}`),
            lightTheme: t(`labels.light-theme.${textSize}`),
            language: t(`labels.language.${textSize}`),
            portuguese: t(`labels.portuguese.${textSize}`),
            english: t(`labels.english.${textSize}`)
        },
        headers: {
            workList: t(`headers.work-list.${textSize}`),
            filter: t(`headers.filter.${textSize}`),
            mainInformation: t(`headers.main-information.${textSize}`),
            paths: t(`headers.paths.${textSize}`),
            workType: t(`headers.work-type.${textSize}`),
            settings: t(`headers.settings.${textSize}`),
            appHeader: t(`headers.app-header.${textSize}`),
            worksOnList: t(`headers.works-on-list.${textSize}`),
            developedBy: t(`headers.developed-by.${textSize}`)
        },
        order: {
            sort: t(`order.sort.${textSize}`),
            bySemesterAsc: t(`order.by-semester-asc.${textSize}`),
            bySemesterDesc: t(`order.by-semester-desc.${textSize}`),
            alphabeticalAsc: t(`order.alphabetical-asc.${textSize}`),
            alphabeticalDesc: t(`order.alphabetical-desc.${textSize}`)
        },
        hints: {
            workTitle: t(`hints.work-title.${textSize}`),
            author: t(`hints.author.${textSize}`),
            supervisor: t(`hints.supervisor.${textSize}`)
        }
    }
    return strings
}