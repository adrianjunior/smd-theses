import { useTranslations } from 'next-intl';
import { ScreenSize } from './screen-size';

export const TranslatedText = () => {
    const t = useTranslations('Index');
    const screenSize = ScreenSize();
    let textSize;

    (screenSize == 'xl') ? textSize = 'long' : textSize = 'short';

    const paths = {
        design: t(`paths.design.${textSize}`)
    }
    return paths
}