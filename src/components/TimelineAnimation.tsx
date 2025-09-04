import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, Users, Zap } from 'lucide-react';
import { Technology, historicalEvents, getDecadeTheme, getTechSizeClass, getHistoricalEventForYear } from '@/data/technologies';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import * as LucideIcons from 'lucide-react';

interface TimelineAnimationProps {
  selectedTechnologies: Technology[];
  onBack: () => void;
}

type AnimationPhase = 'intro' | 'timeline' | 'ending';

const TimelineAnimation: React.FC<TimelineAnimationProps> = ({ 
  selectedTechnologies, 
  onBack 
}) => {
  const [currentPhase, setCurrentPhase] = useState<AnimationPhase>('intro');
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [currentDecade, setCurrentDecade] = useState('');
  const [showHistoricalEvent, setShowHistoricalEvent] = useState(false);
  const [completedTechs, setCompletedTechs] = useState<Technology[]>([]);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  // Map of tech.id to assigned event (for stable rendering)
  const [assignedEvents, setAssignedEvents] = useState<Record<string, any>>({});
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const latestTechRef = useRef<HTMLDivElement>(null);

  // Get the current technology
  const currentTech = selectedTechnologies[currentTechIndex];
  
  // Get decade theme
  const decadeTheme = currentTech ? getDecadeTheme(currentTech.decade) : null;

  // Animation timing constants
  const INTRO_DURATION = 3000;
  const TECH_DISPLAY_DURATION = 1000;
  const DECADE_TRANSITION_DURATION = 1500;
  const ENDING_DURATION = 5000;

  // Enhanced auto-scroll function
  const scrollToLatest = () => {
    if (scrollAreaRef.current && completedTechs.length > 0) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement && latestTechRef.current) {
        // Smooth scroll to the latest technology item
        latestTechRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    }
  };

  // Auto-scroll when new item is added with delay for animation
  useEffect(() => {
    if (completedTechs.length > 0) {
      // Add a small delay to allow the animation to start before scrolling
      const scrollTimer = setTimeout(() => {
        scrollToLatest();
      }, 300);
      
      return () => clearTimeout(scrollTimer);
    }
  }, [completedTechs.length]);

  // Start timeline animation
  useEffect(() => {
    if (selectedTechnologies.length === 0) return;

    // Intro phase
    const introTimer = setTimeout(() => {
      setCurrentPhase('timeline');
      setCurrentDecade(selectedTechnologies[0].decade);
    }, INTRO_DURATION);

    return () => clearTimeout(introTimer);
  }, [selectedTechnologies]);

  // Handle timeline progression
  useEffect(() => {
    if (currentPhase !== 'timeline' || !currentTech) return;

    const techTimer = setTimeout(() => {
      // Add current tech to completed list
      setCompletedTechs(prev => [...prev, currentTech]);

      // Check if we're done with all technologies
      if (currentTechIndex >= selectedTechnologies.length - 1) {
        setTimeout(() => setCurrentPhase('ending'), 1000);
        return;
      }

      // Move to next technology
      const nextTech = selectedTechnologies[currentTechIndex + 1];
      
      // Check if we're entering a new decade
      if (nextTech.decade !== currentTech.decade) {
        setShowHistoricalEvent(true);
        
        // Show historical event transition
        setTimeout(() => {
          setCurrentDecade(nextTech.decade);
          setCurrentTechIndex(prev => prev + 1);
          setShowHistoricalEvent(false);
        }, DECADE_TRANSITION_DURATION);
      } else {
        setCurrentTechIndex(prev => prev + 1);
      }
    }, TECH_DISPLAY_DURATION);

    return () => clearTimeout(techTimer);
  }, [currentTechIndex, currentPhase, currentTech, selectedTechnologies]);

  // Remove local getHistoricalEventForYear, use imported version directly

  // Get dynamic icon component
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || LucideIcons.Star;
  };

  // Render intro phase
  if (currentPhase === 'intro') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="text-6xl font-bold bg-gradient-timeline bg-clip-text text-transparent mb-8">
            Your Technology Journey
          </div>
          <div className="text-2xl text-muted-foreground mb-6">
            {selectedTechnologies.length} Technologies • {selectedTechnologies[0]?.year} - {selectedTechnologies[selectedTechnologies.length - 1]?.year}
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse">
              <Zap className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render timeline phase
  if (currentPhase === 'timeline' || currentPhase === 'ending') {
    const theme = currentTech ? getDecadeTheme(currentTech.decade) : getDecadeTheme(selectedTechnologies[0].decade);
    const IconComponent = getIconComponent(theme.icon);

    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header with decade info */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <IconComponent className={`h-10 w-10 text-primary`} />
              <div>
                <div className="text-xl font-bold text-foreground">
                  Technology Timeline
                </div>
                <div className="text-sm text-muted-foreground">Your Career Journey</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Progress</div>
              <div className="text-lg font-semibold">
                {completedTechs.length} / {selectedTechnologies.length}
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-surface-elevated rounded-full h-2 mt-4">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedTechs.length / selectedTechnologies.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="flex-1 relative">
          <ScrollArea className="h-full" ref={scrollAreaRef}>
            <div className="relative p-8" ref={timelineContainerRef}>
              {/* Central timeline line in the background */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0" />
              
              {/* Timeline items */}
              <div className="space-y-8 relative z-10">
                {completedTechs.map((tech, index) => {
                  const isLatest = index === completedTechs.length - 1;
                  const techTheme = getDecadeTheme(tech.decade);
                  const sizeClass = getTechSizeClass(tech.year);
                  // Assign event only if not already assigned
                  let event = assignedEvents[tech.id];
                  if (!event) {
                    event = getHistoricalEventForYear(tech.decade, tech.year, tech.id);
                    setAssignedEvents(prev => ({ ...prev, [tech.id]: event }));
                  }
                  const historicalEvent = event;

                  return (
                    <div 
                      key={tech.id} 
                      ref={isLatest ? latestTechRef : null}
                      className="relative flex flex-col items-center z-10"
                      style={{
                        animation: `fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.25}s both`
                      }}
                    >
                      {/* Timeline dot above the line */}
                      <div className="absolute left-1/2 -translate-x-1/2 z-20">
                        <div className={`w-4 h-4 rounded-full bg-era-${tech.decade.replace('s', '')} border-2 border-background shadow-lg ${
                          isLatest ? 'animate-pulse ring-4 ring-primary/30' : ''
                        }`} />
                      </div>
                      
                      {/* Content card above the line */}
                      <div className={`glass-card p-6 border border-primary/20 max-w-md w-[380px] mt-4 mb-4 timeline-item z-20 ${
                        isLatest ? 'ring-2 ring-primary/40 shadow-2xl' : ''
                      }`}>
                        {/* Technology name left, year right */}
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-extrabold text-2xl text-foreground text-left">
                            {tech.name}
                          </div>
                          <div className={`font-bold text-lg text-era-${tech.decade.replace('s', '')} text-right`}>
                            {tech.year}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground font-medium italic mb-3 text-left">
                          {tech.category}
                        </div>
                        <div className="text-sm text-foreground mb-3">
                          {tech.description}
                        </div>
                        {/* Historical event for this decade and year */}
                        {historicalEvent && (
                          <div className="pt-3 border-t border-primary/20 mb-2">
                            <div className="flex items-start gap-2">
                              <Calendar className="h-4 w-4 text-era-{tech.decade.replace('s', '')} mt-0.5 flex-shrink-0" />
                              <div className="text-xs text-muted-foreground italic">
                                <span className="font-semibold">{historicalEvent.year}:</span> {historicalEvent.event}
                              </div>
                            </div>
                          </div>
                        )}
                        {tech.majorEvent && (
                          <div className="pt-3 border-t border-primary/20">
                            <div className="flex items-start gap-2">
                              <Users className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                              <div className="text-xs text-muted-foreground italic">
                                {tech.majorEvent}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Connection line to timeline */}
                      <div className="w-8 h-0.5 bg-border" />
                    </div>
                  );
                })}
                
                {/* Current item indicator if still animating */}
                {currentTech && completedTechs.length < selectedTechnologies.length && (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-pulse">
                      <div className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-primary animate-ping" />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Completion message when all technologies are done */}
                {completedTechs.length === selectedTechnologies.length && completedTechs.length > 0 && (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="glass-card p-8 border border-primary/20 rounded-lg text-center max-w-md">
                      <div className="text-3xl font-bold bg-gradient-timeline bg-clip-text text-transparent mb-4">
                        Your technology footprint
                      </div>
                      <div className="text-lg text-foreground mb-6">
                        You've explored {completedTechs.length} technologies.
                      </div>
                      <Button
                        onClick={onBack}
                        size="lg"
                        variant="outline"
                        className="glass-card border-primary/30 hover:border-primary/50"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Create Another Timeline
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  }

  console.log(currentPhase)
  return null;
};

export default TimelineAnimation;