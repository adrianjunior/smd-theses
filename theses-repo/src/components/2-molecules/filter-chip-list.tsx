'use client';

import * as React from 'react';
import { useState } from 'react';
import { FilterChip } from '../1-atoms/filter-chip';

interface FilterChipItem {
    label: string;
    icon?: string;
    activated: boolean;
}

interface FilterChipListProps {
    items: FilterChipItem[]; 
}

const FilterChipList: React.FC<FilterChipListProps> = ({ items }) => {
    const [filterItems, setFilterItems] = useState<FilterChipItem[]>(items);

    const handleFilterClick = (index: number) => {
        setFilterItems((prevItems) =>
            prevItems.map((item, idx) =>
                idx === index ? { ...item, activated: !item.activated } : item 
            )
        );
        console.log("Clicked")
    };

    return (
        <div className="flex flex-wrap gap-2">
            {filterItems.map((item, index) => (
                <FilterChip
                    key={index}
                    icon={item.icon}
                    activated={item.activated}
                    onClick={() => handleFilterClick(index)}
                >
                    {item.label}
                </FilterChip>
            ))}
        </div>
    );
}

export default FilterChipList;