import {map} from 'lodash';
import React, { useCallback } from 'react';
import style from './Styles/select.less';

interface ISelectOption {
    label: string;
    value: string;
}

interface IProps {
    value: string;
    options: ISelectOption[];
    onChange: (value: string) => void;
}

export const Select: React.FC<IProps> = ({value, options, onChange}) => {
    
    const handleClick = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }, [onChange]);

    return (
        <select className={style.select} value={value} onChange={handleClick}>
            {map(options, ({ value, label }) => (
                <option key={value} value={value}>{label}</option>
            ))}
        </select>
    );
};
