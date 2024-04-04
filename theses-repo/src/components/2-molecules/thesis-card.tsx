'use client';

import {
    Card,
    CardContent,
    CardFooter
} from "@/components/1-atoms/card"
import { useState } from 'react';

import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';
import { cn } from "@/lib/utils";

export function ThesisCard({ thesis, strings }: { thesis: any, strings: any }) {
    const [isHovered, setIsHovered] = useState(false);

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
        <a href={thesis.link} target="_blank" className="thesis-card-style thesis-card-style-active"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}>
            <Card className="w-96">
                <CardContent>
                    <p className="self-stretch font-bold">
                        {thesis.title}
                    </p>
                    <div className="thesis-card-column gap-1">
                        <div className="thesis-card-responsive">
                            <p className={cn(isHovered ? 'thesis-card-aux-text-active' : 'thesis-card-aux-text')}>{strings.labels.author}</p>
                            <p>{thesis.author}</p>
                        </div>
                        <div className="thesis-card-responsive">
                            <p className={cn(isHovered ? 'thesis-card-aux-text-active' : 'thesis-card-aux-text')}>{strings.labels.supervisor}</p>
                            <p>{thesis.supervisor}</p>
                        </div>
                    </div>
                    <div className="thesis-card-line gap-x-2 gap-y-1">
                        <span className={cn(isHovered ? 'material-icons' : 'material-icons-outlined')}>{icon}</span>
                        <p>{path}</p>
                        <p>•</p>
                        <p>{type}</p>
                        <p>•</p>
                        <p>{thesis.semester}</p>
                    </div>
                    <div className="thesis-card-column gap-1">
                        <p className={cn(isHovered ? 'thesis-card-aux-text-active' : 'thesis-card-aux-text')}>{strings.labels.keywords}</p>
                        <p>{thesis.keywords}</p>
                    </div>
                    <div className="thesis-card-column gap-1">
                        <p className={cn(isHovered ? 'thesis-card-aux-text-active' : 'thesis-card-aux-text')}>{strings.labels.objective}</p>
                        <p>{thesis.summary}</p>
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}