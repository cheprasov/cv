import React from 'react';
import { AwardInf } from '../../type/cv';
import ArticleBlock from '../article/ArticleBlock';
import DateTime from '../../date/DateTime';

import './Award.scss';

interface AwardProps {
    award: AwardInf;
}

const LOGO_AWARD = 'award.jpeg';

const Award = ({ award }: AwardProps) => {
    const { title, organizer, description, date, logo } = award;
    const dates = (Array.isArray(date) ? date : [date]).map(dt => {
        return new DateTime(dt).getFormatDate('%F %Y');
    });

    return (
        <div className="Award">
            <ArticleBlock
                title={title}
                subtitle={`by ${organizer}, ${dates.join(', ')}`}
                logo={logo || LOGO_AWARD}
                text={description}
            />
        </div>
    );
};

export default Award;
