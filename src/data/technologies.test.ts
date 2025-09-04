import {
  technologies,
  historicalEvents,
  getTechnologiesByDecade,
  getDecadeTheme,
  getTechSizeClass,
  getHistoricalEventForYear,
} from './technologies';

describe('getTechnologiesByDecade', () => {
  it('returns all technologies for a given decade', () => {
    const techs = getTechnologiesByDecade('1980s');
    expect(Array.isArray(techs)).toBe(true);
    expect(techs.every(t => t.decade === '1980s')).toBe(true);
  });

  it('returns an empty array for a non-existent decade', () => {
    expect(getTechnologiesByDecade('2090s')).toEqual([]);
  });
});

describe('getDecadeTheme', () => {
  it('returns correct theme for known decades', () => {
    expect(getDecadeTheme('1960s')).toEqual({ color: 'era-1960s', icon: 'Terminal', title: 'Early Computing Era' });
    expect(getDecadeTheme('2020s')).toEqual({ color: 'era-2020s', icon: 'Cloud', title: 'AI & Cloud Era' });
  });

  it('returns default theme for unknown decade', () => {
    expect(getDecadeTheme('2090s')).toEqual({ color: 'era-2020s', icon: 'Cloud', title: 'AI & Cloud Era' });
  });
});

describe('getTechSizeClass', () => {
  it('returns tech-ancient for years before 1970', () => {
    expect(getTechSizeClass(1965)).toBe('tech-ancient');
  });
  it('returns tech-vintage for years 1970-1979', () => {
    expect(getTechSizeClass(1975)).toBe('tech-vintage');
  });
  it('returns tech-classic for years 1980-1989', () => {
    expect(getTechSizeClass(1985)).toBe('tech-classic');
  });
  it('returns tech-modern for years 1990-1999', () => {
    expect(getTechSizeClass(1995)).toBe('tech-modern');
  });
  it('returns tech-current for years 2000-2009', () => {
    expect(getTechSizeClass(2005)).toBe('tech-current');
  });
  it('returns tech-latest for years 2010 and after', () => {
    expect(getTechSizeClass(2015)).toBe('tech-latest');
  });
});

describe('getHistoricalEventForYear', () => {
  it('returns the correct event for a matching decade and year', () => {
    const event = getHistoricalEventForYear('1980s', 1986);
    expect(event).toBeTruthy();
    expect(event?.year).toBe(1986);
  });

  it('returns the correct event for a year in a different decade', () => {
    // Node.js is 2009, decade '2010s', but event is in '2000s'
    const event = getHistoricalEventForYear('2010s', 2009);
    expect(event).toBeTruthy();
    expect(event?.year).toBe(2009);
    expect(event?.event).toBe('Michael Jackson dies, world mourns');
  });

  it('returns null if no event exists for the year', () => {
    expect(getHistoricalEventForYear('1980s', 1988)).toBeNull();
    expect(getHistoricalEventForYear('2090s', 2099)).toBeNull();
  });

  it('returns the correct event for a year with multiple events in the same decade', () => {
    // 1968 has two events in the 1960s
    const events = (historicalEvents['1960s'] || []).filter(e => e.year === 1968);
    expect(events.length).toBeGreaterThan(1);
    const event = getHistoricalEventForYear('1960s', 1968);
    expect(event).toBeTruthy();
    expect(event?.year).toBe(1968);
  });
});
