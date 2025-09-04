import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, Users, Zap } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
// (removed duplicate import)
import { Technology, historicalEvents, getDecadeTheme, getTechSizeClass, getHistoricalEventForYear } from '@/data/technologies';
import { Button } from '@/components/ui/button';
import * as LucideIcons from 'lucide-react';

interface TimelineAnimationProps {
  selectedTechnologies: Technology[];
  onBack: () => void;
}

type AnimationPhase = 'intro' | 'timeline' | 'ending';

// Pills with hover popover (not click)
type PillGridProps = { selectedTechnologies: Technology[] };

function PillGridWithHoverPopovers({ selectedTechnologies }: PillGridProps) {
  const [hovered, setHovered] = React.useState<string | null>(null);
  return (
    <div className="grid grid-cols-4 gap-4 w-[60vw] mx-auto relative" style={{maxWidth:'900px'}}>
      {selectedTechnologies.map((tech, i) => {
        const pillColors = [
          "bg-pink-400 text-white",
          "bg-blue-400 text-white",
          "bg-green-400 text-white",
          "bg-yellow-400 text-black",
          "bg-purple-400 text-white",
          "bg-orange-400 text-white",
          "bg-teal-400 text-white",
          "bg-red-400 text-white",
          "bg-indigo-400 text-white",
          "bg-fuchsia-400 text-white",
          "bg-emerald-400 text-white",
          "bg-cyan-400 text-black",
          "bg-lime-400 text-black",
          "bg-amber-400 text-black",
          "bg-violet-400 text-white",
          "bg-rose-400 text-white",
        ];
        const jitterX = Math.random() * 10 - 5;
        const jitterY = Math.random() * 10 - 5;
        const colorClass = pillColors[i % pillColors.length];
        const event = getHistoricalEventForYear(tech.decade, tech.year, tech.id);
        return (
          <div
            key={tech.id}
            className={`relative px-4 py-2 rounded-full font-bold text-lg shadow-lg border-2 border-white animate-swingTopFwd ${colorClass} tech-pill-hover cursor-pointer`}
            style={{
              marginLeft: `${jitterX}px`,
              marginTop: `${jitterY}px`,
              animationDelay: `${i * 0.18}s`,
              minWidth: '120px',
              maxWidth: '220px',
              textAlign: 'center',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
              zIndex: hovered === tech.id ? 100 : 10 + i,
            }}
                          tabIndex={0}
                          onMouseEnter={() => setHovered(tech.id)}
                          onMouseLeave={() => setHovered(null)}
                          onFocus={() => setHovered(tech.id)}
                          onBlur={() => setHovered(null)}
                        >
                          {tech.name}
                          {hovered === tech.id && (
                            <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-50 mt-[-2.5rem] w-64 bg-popover text-popover-foreground rounded-md shadow-lg border p-4 animate-fadeInCard pointer-events-none">
                              <div className="text-base font-bold mb-1">{tech.name}</div>
                              <div className="text-sm text-muted-foreground mb-1">Year: <span className="font-semibold">{tech.year}</span></div>
                              {event && (
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-primary"><Zap className="inline-block h-4 w-4 mr-1" /></span>
                                  <span className="text-xs text-foreground">{event.event}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              }
  // Remove local getHistoricalEventForYear, use imported version directly


const TimelineAnimation: React.FC<TimelineAnimationProps> = ({ selectedTechnologies, onBack }) => {
  // State declarations must come first

  // State declarations must come first
  const [currentPhase, setCurrentPhase] = useState<AnimationPhase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardAnimKey, setCardAnimKey] = useState(0);
  const currentTech = selectedTechnologies[currentIndex];

  // Automatically advance the timeline (must be after state declarations)
  useEffect(() => {
    if (currentPhase !== 'timeline') return;
    if (currentIndex < selectedTechnologies.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex((i) => i + 1);
      }, 1200); // 1.2s per card
      return () => clearTimeout(timeout);
    } else if (currentPhase === 'timeline') {
      // Show ending after last card
      const timeout = setTimeout(() => {
        setCurrentPhase('ending');
      }, 1400);
      return () => clearTimeout(timeout);
    }
  }, [currentPhase, currentIndex, selectedTechnologies.length]);

  // When currentIndex changes, bump the key to retrigger animation
  useEffect(() => {
    setCardAnimKey((k) => k + 1);
  }, [currentIndex]);

  // Get dynamic icon component (if needed elsewhere)
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || LucideIcons.Star;
  };

  // Animation flow logic (advance timeline, etc.) can be added here if needed

  // Render intro phase
  if (currentPhase === 'intro') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="text-6xl font-bold bg-gradient-timeline bg-clip-text text-transparent mb-8">
            Your Technology Journey
          </div>
          <div className="text-2xl text-muted-foreground mb-6">
            {selectedTechnologies.length} Technologies • {selectedTechnologies[0]?.year} - {selectedTechnologies[selectedTechnologies.length - 1]?.year}
          </div>
          <Button
            onClick={() => {
              setCurrentPhase('timeline');
              setCurrentIndex(0);
            }}
            className="px-8 py-4 rounded bg-primary text-primary-foreground hover:bg-primary/80 text-lg font-semibold border border-primary/40 shadow mt-8"
          >
            Start Animation
          </Button>
        </div>
      </div>
    );
  }

  // Render timeline phase
  if (currentPhase === 'timeline' || currentPhase === 'ending') {
    // Animate card in/out using CSS only
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        {currentPhase === 'timeline' && currentTech && (
          <div
            key={cardAnimKey}
            className="glass-card p-8 border border-primary/20 rounded-lg max-w-lg w-full animate-flipScale"
            style={{ animationDuration: '0.7s' }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-extrabold text-3xl text-foreground text-left">
                {currentTech.name}
              </div>
              <div className={`font-bold text-xl text-era-${currentTech.decade.replace('s', '')} text-right`}>
                {currentTech.year}
              </div>
            </div>
            <div className="text-xs text-muted-foreground font-medium italic mb-3 text-left">
              {currentTech.category}
            </div>
            <div className="text-base text-foreground mb-3">
              {currentTech.description}
            </div>
            {currentTech.majorEvent && (
              <div className="pt-3 border-t border-primary/20 mt-2">
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-muted-foreground italic">
                    {currentTech.majorEvent}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {currentPhase === 'ending' && (
          <div className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-visible">
            {/* Grid layout for pills with jitter, popover on hover */}
            <PillGridWithHoverPopovers selectedTechnologies={selectedTechnologies} />
            <div className="z-20 mt-8 text-2xl font-semibold text-center text-gray-800 drop-shadow-lg">
              {`You've explored ${selectedTechnologies.length} technologies`}
            </div>
            <Button
              onClick={onBack}
              size="lg"
              variant="outline"
              className="absolute left-1/2 bottom-4 -translate-x-1/2 glass-card border-primary/30 hover:border-primary/50 z-50"
              style={{ pointerEvents: 'auto' }}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Create Another Timeline
            </Button>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default TimelineAnimation;