'use client';

import {
    Card,
    CardContent,
    CardFooter
} from "@/components/1-atoms/card"
import { Separator } from "@/components/1-atoms/separator"
import { useEffect, useRef, useState } from 'react';

import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';
import { cn } from "@/lib/utils";

export function ThesisCard({thesis, labels} : {thesis:any, labels:any}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedHeight, setExpandedHeight] = useState(0);
    const expandableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isExpanded && expandableRef.current) {
            setExpandedHeight(expandableRef.current.scrollHeight);
        } else {
            setExpandedHeight(0);
        }
    }, [isExpanded]);

    return (
        <Card className="w-96 thesis-card-style" data-expanded={isExpanded}>
            <CardContent>
                <a href="https://drive.google.com/file/d/102rlXD9B--Qe58gKC1PgYTOiCMonlcXw/view?usp=sharing" target="_blank" className="thesis-card-link">
                    {thesis.title}
                </a>
                <div className="thesis-card-column">
                    <div className="thesis-card-responsive">
                        <p className="text-on-surface-variant">{labels.author}</p>
                        <p>{thesis.author}</p>
                    </div>
                    <div className="thesis-card-responsive">
                        <p className="text-on-surface-variant">{labels.supervisor}</p>
                        <p>{thesis.supervisor}</p>
                    </div>
                </div>
                <div className="thesis-card-line gap-x-2 gap-y-1">
                    <span className={cn(isExpanded ? 'material-icons' : 'material-icons-outlined')}>school</span>
                    <p>{thesis.path}</p>
                    <p>•</p>
                    <p>{thesis.type}</p>
                    <p>•</p>
                    <p>{thesis.semester}</p>
                </div>
                <div
                    ref={expandableRef}
                    className="thesis-card-column thesis-card-expand sm:gap-2 lg:gap-4"
                    data-expanded={isExpanded}
                    style={{ maxHeight: expandedHeight }}
                >
                    <div className="thesis-card-column gap-1">
                        <p className="text-on-surface-variant">{labels.objective}</p>
                        <p>{thesis.objective}</p>
                    </div>
                    <div className="thesis-card-column gap-1">
                        <p className="text-on-surface-variant">{labels.keywords}</p>
                        <p>{thesis.keywords}</p>
                    </div>
                </div>
            </CardContent>
            <Separator />
            <CardFooter onClick={() => setIsExpanded(!isExpanded)}>
                <span className='material-icons thesis-card-dropdown' data-expanded={isExpanded}>arrow_drop_down</span>
                <p>
                    {!isExpanded && <span>{labels.moreinfo}</span>}
                    {isExpanded && <span>{labels.lessinfo}</span>}
                </p>
            </CardFooter>
        </Card>
    );
}