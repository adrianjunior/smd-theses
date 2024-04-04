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

export function ThesisCard({ thesis, strings }: { thesis: any, strings: any }) {
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

    let path: string = "";
    let icon: string = "";

    if (thesis.path == "design") {
        path = strings.paths.design
        icon = "design_services"
    }

    if (thesis.path == "systems") {
        path = strings.paths.systems
        icon = "code_blocks"
    }

    if (thesis.path == "audiovisual") {
        path = strings.paths.audiovisual
        icon = "movie"
    }

    if (thesis.path == "games") {
        path = strings.paths.games
        icon = "sports_esports"
    }

    if (thesis.path == "education") {
        path = strings.paths.education
        icon = "school"
    }

    let type: string = "";

    if (thesis.type == "paper") type = strings.types.paper
    if (thesis.type == "monograph") type = strings.types.monograph
    if (thesis.type == "report") type = strings.types.report

    return (
        <Card className="w-96 thesis-card-style" data-expanded={isExpanded}>
            <CardContent>
                <a href="https://drive.google.com/file/d/102rlXD9B--Qe58gKC1PgYTOiCMonlcXw/view?usp=sharing" target="_blank" className="thesis-card-link">
                    {thesis.title}
                </a>
                <div className="thesis-card-column gap-1 sm:mt-2 lg:mt-4">
                    <div className="thesis-card-responsive">
                        <p className="text-on-surface-variant">{strings.labels.author}</p>
                        <p>{thesis.author}</p>
                    </div>
                    <div className="thesis-card-responsive">
                        <p className="text-on-surface-variant">{strings.labels.supervisor}</p>
                        <p>{thesis.supervisor}</p>
                    </div>
                </div>
                <div className="thesis-card-line gap-x-2 gap-y-1 sm:mt-2 lg:mt-4">
                    <span className={cn(isExpanded ? 'material-icons' : 'material-icons-outlined')}>{icon}</span>
                    <p>{path}</p>
                    <p>•</p>
                    <p>{type}</p>
                    <p>•</p>
                    <p>{thesis.semester}</p>
                </div>
                <div
                    ref={expandableRef}
                    className="thesis-card-column thesis-card-expand"
                    data-expanded={isExpanded}
                    style={{ maxHeight: expandedHeight }}
                >
                    <div className="thesis-card-column gap-1">
                        <p className="text-on-surface-variant">{strings.labels.objective}</p>
                        <p>{thesis.summary}</p>
                    </div>
                    <div className="thesis-card-column gap-1">
                        <p className="text-on-surface-variant">{strings.labels.keywords}</p>
                        <p>{thesis.keywords}</p>
                    </div>
                </div>
            </CardContent>
            <Separator />
            <CardFooter onClick={() => setIsExpanded(!isExpanded)}>
                <span className='material-icons thesis-card-dropdown' data-expanded={isExpanded}>arrow_drop_down</span>
                <p>
                    {!isExpanded && <span>{strings.labels.moreInfo}</span>}
                    {isExpanded && <span>{strings.labels.lessInfo}</span>}
                </p>
            </CardFooter>
        </Card>
    );
}