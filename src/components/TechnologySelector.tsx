import React, { useState, useMemo } from 'react';
import { Search, X, Play } from 'lucide-react';
import { technologies, Technology } from '@/data/technologies';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TechnologySelectorProps {
  onStartAnimation: (selectedTechs: Technology[]) => void;
}

const TechnologySelector: React.FC<TechnologySelectorProps> = ({ onStartAnimation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter technologies based on search term
  const filteredTechs = useMemo(() => {
    if (!searchTerm.trim()) return technologies.slice(0, 20); // Show first 20 by default
    return technologies.filter(tech =>
      tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.decade.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Add technology to selection
  const addTechnology = (tech: Technology) => {
    if (!selectedTechs.find(t => t.id === tech.id)) {
      setSelectedTechs(prev => [...prev, tech]);
    }
    setSearchTerm('');
    setShowSuggestions(false);
  };

  // Remove technology from selection
  const removeTechnology = (techId: string) => {
    setSelectedTechs(prev => prev.filter(t => t.id !== techId));
  };

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  // Handle start animation
  const handleStartAnimation = () => {
    if (selectedTechs.length > 0) {
      // Sort selected technologies by year for timeline
      const sortedTechs = [...selectedTechs].sort((a, b) => a.year - b.year);
      onStartAnimation(sortedTechs);
    }
  };

  // Get era color for technology pill
  const getEraColor = (decade: string) => {
    const colorMap: Record<string, string> = {
      '1960s': 'border-era-1960s bg-era-1960s/10 text-era-1960s',
      '1970s': 'border-era-1970s bg-era-1970s/10 text-era-1970s',
      '1980s': 'border-era-1980s bg-era-1980s/10 text-era-1980s',
      '1990s': 'border-era-1990s bg-era-1990s/10 text-era-1990s',
      '2000s': 'border-era-2000s bg-era-2000s/10 text-era-2000s',
      '2010s': 'border-era-2010s bg-era-2010s/10 text-era-2010s',
      '2020s': 'border-era-2020s bg-era-2020s/10 text-era-2020s'
    };
    return colorMap[decade] || colorMap['2020s'];
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-timeline bg-clip-text text-transparent mb-4">
          Technology Timeline Builder
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Create your personalized journey through the evolution of programming technologies.
          Select the technologies that shaped your career and watch them come alive in a stunning timeline animation.
        </p>
      </div>

      {/* Technology Search */}
      <div className="w-full max-w-4xl relative mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search technologies (e.g., React, Python, Java)..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(searchTerm.length > 0)}
            className="pl-12 pr-4 py-6 text-lg glass-card border-primary/20 focus:border-primary/40"
          />
        </div>

        {/* Technology Suggestions */}
        {showSuggestions && filteredTechs.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 glass-card border border-primary/20 rounded-lg max-h-80 overflow-y-auto z-50">
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {filteredTechs.slice(0, 50).map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => addTechnology(tech)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all tech-pill-hover ${getEraColor(tech.decade)}`}
                  >
                    {tech.name} ({tech.year})
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Selected Technologies */}
      {selectedTechs.length > 0 && (
        <div className="w-full max-w-4xl mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Selected Technologies ({selectedTechs.length})
          </h3>
          <div className="glass-card p-6 border border-primary/20 rounded-lg">
            <div className="flex flex-wrap gap-3">
              {selectedTechs
                .sort((a, b) => a.year - b.year)
                .map((tech) => (
                  <div
                    key={tech.id}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full border text-sm font-medium ${getEraColor(tech.decade)}`}
                  >
                    <span>{tech.name}</span>
                    <span className="text-xs opacity-70">({tech.year})</span>
                    <button
                      onClick={() => removeTechnology(tech.id)}
                      className="ml-2 hover:bg-current hover:bg-opacity-20 rounded-full p-1 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Start Animation Button */}
      {selectedTechs.length > 0 && (
        <div className="text-center">
          <Button
            onClick={handleStartAnimation}
            size="lg"
            className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Play className="mr-3 h-6 w-6" />
            Start Timeline Animation
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Your {selectedTechs.length} selected technologies will be animated in chronological order
          </p>
        </div>
      )}

      {/* Quick Start Options */}
      {selectedTechs.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Or try these popular technology combinations:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { name: 'Full Stack Journey', techs: ['html', 'css', 'javascript', 'nodejs', 'react', 'mongodb'] },
              { name: 'Backend Evolution', techs: ['c', 'java', 'python', 'nodejs', 'go', 'kubernetes'] },
              { name: 'Frontend Revolution', techs: ['html', 'css', 'jquery', 'angular', 'react', 'vue'] },
              { name: 'Mobile Era', techs: ['java', 'objectivec', 'swift', 'kotlin', 'reactnative', 'flutter'] }
            ].map((preset) => (
              <Button
                key={preset.name}
                variant="outline"
                onClick={() => {
                  const presetTechs = technologies.filter(tech => 
                    preset.techs.includes(tech.id)
                  );
                  setSelectedTechs(presetTechs);
                }}
                className="glass-card border-primary/30 hover:border-primary/50"
              >
                {preset.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologySelector;