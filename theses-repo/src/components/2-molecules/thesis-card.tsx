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

export function ThesisCard() {
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
                    DESENVOLVIMENTO DE JOGOS EDUCATIVOS CONTROLADOS VIA INTERFACE CÉREBRO-COMPUTADOR: UMA REVISÃO SISTEMÁTICA DA LITERATURA
                </a>
                <div className="thesis-card-column">
                    <div className="thesis-card-responsive">
                        <p className="text-on-surface-variant">Autor(a)</p>
                        <p>Thais Ribeiro Barroso Torres</p>
                    </div>
                    <div className="thesis-card-responsive">
                        <p className="text-on-surface-variant">Orientador(a)</p>
                        <p>Edgar Marçal de Barros Filho</p>
                    </div>
                </div>
                <div className="thesis-card-line gap-x-2 gap-y-1">
                    <span className={cn(isExpanded ? 'material-icons' : 'material-icons-outlined')}>school</span>
                    <p>Tecnologia Educativa</p>
                    <p>•</p>
                    <p>Monografia</p>
                    <p>•</p>
                    <p>2023.2</p>
                </div>
                <div
                    ref={expandableRef}
                    className="thesis-card-column thesis-card-expand sm:gap-2 lg:gap-4"
                    data-expanded={isExpanded}
                    style={{ maxHeight: expandedHeight }}
                >
                    <div className="thesis-card-column gap-1">
                        <p className="text-on-surface-variant">Objetivo</p>
                        <p>Simplificar o desenvolvimento de jogos educativos controlados por ondas cerebrais, reunindo dados relevantes para desenvolvedores e pesquisadores da área.</p>
                    </div>
                    <div className="thesis-card-column gap-1">
                        <p className="text-on-surface-variant">Palavras-chave</p>
                        <p>1. Interfaces Cérebro-computador. 2. Dispositivos de Eletroencefalograma. 3. Jogos Educativos.</p>
                    </div>
                </div>
            </CardContent>
            <Separator />
            <CardFooter onClick={() => setIsExpanded(!isExpanded)}>
                <span className='material-icons thesis-card-dropdown' data-expanded={isExpanded}>arrow_drop_down</span>
                <p>
                    { !isExpanded && <span>Ver mais</span> }
                    { isExpanded && <span>Ver menos</span> }
                </p>
            </CardFooter>
        </Card>
    );
}