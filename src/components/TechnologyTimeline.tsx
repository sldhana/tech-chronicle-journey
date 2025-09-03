import React, { useState } from 'react';
import { Technology } from '@/data/technologies';
import TechnologySelector from './TechnologySelector';
import TimelineAnimation from './TimelineAnimation';

type AppState = 'selection' | 'animation';

const TechnologyTimeline: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>('selection');
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const handleStartAnimation = (techs: Technology[]) => {
    setSelectedTechnologies(techs);
    setCurrentState('animation');
  };

  const handleBackToSelection = () => {
    setCurrentState('selection');
    setSelectedTechnologies([]);
  };

  if (currentState === 'selection') {
    return <TechnologySelector onStartAnimation={handleStartAnimation} />;
  }

  if (currentState === 'animation') {
    return (
      <TimelineAnimation
        selectedTechnologies={selectedTechnologies}
        onBack={handleBackToSelection}
      />
    );
  }

  return null;
};

export default TechnologyTimeline;