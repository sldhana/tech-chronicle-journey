import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, Users, Zap } from 'lucide-react';
import { Technology, historicalEvents, getDecadeTheme, getTechSizeClass } from '@/data/technologies';
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
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  // Get the current technology
  const currentTech = selectedTechnologies[currentTechIndex];
  
  // Get decade theme
  const decadeTheme = currentTech ? getDecadeTheme(currentTech.decade) : null;

  // Animation timing constants
  const INTRO_DURATION = 3000;
  const TECH_DISPLAY_DURATION = 1000;
  const DECADE_TRANSITION_DURATION = 1500;
  const ENDING_DURATION = 5000;

  // Auto-scroll to bottom when new item is added
  useEffect(() => {
    if (scrollAreaRef.current && completedTechs.length > 0) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTo({
          top: scrollElement.scrollHeight,
          behavior: 'smooth'
        });
      }
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

  // Get random historical event for current decade
  const getCurrentHistoricalEvent = () => {
    const events = historicalEvents[currentDecade] || [];
    return events[Math.floor(Math.random() * events.length)];
  };

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

  // Render decade transition with historical event
  if (showHistoricalEvent && currentPhase === 'timeline') {
    const event = getCurrentHistoricalEvent();
    const theme = getDecadeTheme(currentDecade);
    const IconComponent = getIconComponent(event?.icon || theme.icon);

    return (
      <div className={`min-h-screen flex items-center justify-center era-${currentDecade.replace('s', 's')}`}>
        <div className="text-center animate-scale-in">
          <div className="mb-8">
            <IconComponent className={`h-24 w-24 mx-auto mb-6 text-era-${currentDecade.replace('s', 's')}`} />
          </div>
          <div className={`text-4xl font-bold text-era-${currentDecade.replace('s', 's')} mb-4`}>
            {theme.title}
          </div>
          <div className="text-xl text-foreground mb-2">
            {currentDecade}
          </div>
          {event && (
            <div className="text-lg text-muted-foreground max-w-2xl">
              {event.year}: {event.event}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render timeline phase
  if (currentPhase === 'timeline') {
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
              {/* Central timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-0.5" />
              
              {/* Timeline items */}
              <div className="space-y-8">
                {completedTechs.map((tech, index) => {
                  const isLeft = index % 2 === 0;
                  const techTheme = getDecadeTheme(tech.decade);
                  const sizeClass = getTechSizeClass(tech.year);
                  
                  return (
                    <div 
                      key={tech.id} 
                      className={`relative flex items-center ${isLeft ? 'justify-end pr-8' : 'justify-start pl-8'}`}
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                      }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div className={`w-4 h-4 rounded-full bg-era-${tech.decade.replace('s', '')} border-2 border-background shadow-lg`} />
                      </div>
                      
                      {/* Content card */}
                      <div className={`glass-card p-6 border border-primary/20 max-w-md ${isLeft ? 'mr-8' : 'ml-8'} timeline-item`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`text-2xl font-bold text-era-${tech.decade.replace('s', '')}`}>
                            {tech.year}
                          </div>
                          <div className="flex-1">
                            <div className={`${sizeClass} font-bold text-foreground`}>
                              {tech.name}
                            </div>
                            <div className={`text-sm text-era-${tech.decade.replace('s', '')} font-medium`}>
                              {tech.category}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-foreground mb-3">
                          {tech.description}
                        </div>
                        
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
                        
                        {/* Connection line to timeline */}
                        <div className={`absolute top-1/2 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-8 h-0.5 bg-border transform -translate-y-1/2`} />
                      </div>
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
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  }

  // Render ending phase
  if (currentPhase === 'ending') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <div className="text-center animate-fade-in">
          <div className="text-6xl font-bold bg-gradient-timeline bg-clip-text text-transparent mb-8">
            Your Technology Life
          </div>
          <div className="text-4xl font-bold text-foreground mb-12">
            in 60 Seconds
          </div>

          {/* Final timeline visualization */}
          <div className="glass-card p-8 max-w-6xl mx-auto border border-primary/20 mb-12">
            <div className="text-2xl font-semibold mb-8">Complete Journey Timeline</div>
            <div className="flex flex-wrap gap-4 justify-center">
              {completedTechs.map((tech, index) => {
                const theme = getDecadeTheme(tech.decade);
                const isHovered = hoveredTech === tech.id;
                
                return (
                  <div
                    key={tech.id}
                    className="relative"
                    onMouseEnter={() => setHoveredTech(tech.id)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full bg-era-${tech.decade.replace('s', 's')} cursor-pointer transition-all duration-300 ${
                        isHovered ? 'scale-150 shadow-lg' : 'hover:scale-125'
                      }`}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: 'fadeIn 0.5s ease-out forwards'
                      }}
                    />
                    {isHovered && (
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass-card p-3 border border-primary/20 rounded-lg whitespace-nowrap z-10">
                        <div className="font-semibold">{tech.name}</div>
                        <div className="text-sm text-muted-foreground">{tech.year} • {tech.category}</div>
                        {tech.majorEvent && (
                          <div className="text-xs text-muted-foreground mt-1 max-w-48 whitespace-normal">
                            {tech.majorEvent}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-8 text-lg text-muted-foreground">
              Hover over the circles to see each technology's impact on your journey
            </div>
          </div>

          {/* Call to action */}
          <div className="space-y-6">
            <Button
              onClick={onBack}
              size="lg"
              variant="outline"
              className="mr-4 glass-card border-primary/30 hover:border-primary/50"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Create Another Timeline
            </Button>
            <div className="text-lg text-muted-foreground">
              Share your technology journey and inspire others to explore their path through programming history
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default TimelineAnimation;