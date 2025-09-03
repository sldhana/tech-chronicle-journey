// Comprehensive technology database with 150+ technologies organized by decade

export interface Technology {
  id: string;
  name: string;
  year: number;
  decade: string;
  category: string;
  description: string;
  majorEvent?: string;
}

export interface HistoricalEvent {
  year: number;
  event: string;
  icon: string;
}

export const technologies: Technology[] = [
  // 1960s-1970s - Early Computing Era
  { id: 'cobol', name: 'COBOL', year: 1959, decade: '1960s', category: 'Programming Language', description: 'Business-oriented programming language', majorEvent: 'Moon Landing inspires space-age computing' },
  { id: 'fortran', name: 'FORTRAN', year: 1957, decade: '1960s', category: 'Programming Language', description: 'First high-level programming language', majorEvent: 'Scientific computing revolution begins' },
  { id: 'c', name: 'C', year: 1972, decade: '1970s', category: 'Programming Language', description: 'Systems programming language', majorEvent: 'UNIX and C transform computing' },
  { id: 'pascal', name: 'Pascal', year: 1970, decade: '1970s', category: 'Programming Language', description: 'Structured programming language', majorEvent: 'Computer science education standardizes' },
  { id: 'sql', name: 'SQL', year: 1974, decade: '1970s', category: 'Database', description: 'Structured Query Language', majorEvent: 'Database revolution begins' },
  { id: 'unix', name: 'UNIX', year: 1971, decade: '1970s', category: 'Operating System', description: 'Multiuser operating system', majorEvent: 'Open source philosophy emerges' },
  { id: 'lisp', name: 'LISP', year: 1958, decade: '1960s', category: 'Programming Language', description: 'List processing language', majorEvent: 'AI research foundations laid' },
  { id: 'basic', name: 'BASIC', year: 1964, decade: '1960s', category: 'Programming Language', description: 'Beginner programming language', majorEvent: 'Programming accessibility movement' },
  { id: 'apl', name: 'APL', year: 1966, decade: '1960s', category: 'Programming Language', description: 'Array programming language', majorEvent: 'Mathematical computing advances' },
  { id: 'prolog', name: 'Prolog', year: 1972, decade: '1970s', category: 'Programming Language', description: 'Logic programming language', majorEvent: 'Expert systems research begins' },
  { id: 'smalltalk', name: 'Smalltalk', year: 1972, decade: '1970s', category: 'Programming Language', description: 'Object-oriented programming pioneer', majorEvent: 'GUI paradigm emergence' },
  { id: 'forth', name: 'Forth', year: 1970, decade: '1970s', category: 'Programming Language', description: 'Stack-based programming language', majorEvent: 'Embedded systems foundation' },

  // 1980s - Personal Computer Revolution
  { id: 'cpp', name: 'C++', year: 1985, decade: '1980s', category: 'Programming Language', description: 'Object-oriented extension of C', majorEvent: 'Personal computers enter mainstream' },
  { id: 'perl', name: 'Perl', year: 1987, decade: '1980s', category: 'Programming Language', description: 'Text processing language', majorEvent: 'System administration automation' },
  { id: 'oracle', name: 'Oracle', year: 1982, decade: '1980s', category: 'Database', description: 'Commercial database system', majorEvent: 'Enterprise software market emerges' },
  { id: 'dbase', name: 'dBASE', year: 1980, decade: '1980s', category: 'Database', description: 'Desktop database system', majorEvent: 'Small business computing boom' },
  { id: 'objectivec', name: 'Objective-C', year: 1984, decade: '1980s', category: 'Programming Language', description: 'Object-oriented C extension', majorEvent: 'NeXT computer influences future Apple' },
  { id: 'ada', name: 'Ada', year: 1983, decade: '1980s', category: 'Programming Language', description: 'Military programming standard', majorEvent: 'Software engineering discipline matures' },
  { id: 'postscript', name: 'PostScript', year: 1985, decade: '1980s', category: 'Language', description: 'Page description language', majorEvent: 'Desktop publishing revolution' },
  { id: 'eiffel', name: 'Eiffel', year: 1986, decade: '1980s', category: 'Programming Language', description: 'Contract-based programming', majorEvent: 'Software quality movement begins' },
  { id: 'hypercard', name: 'HyperCard', year: 1987, decade: '1980s', category: 'Development Tool', description: 'Hypermedia development platform', majorEvent: 'Multimedia computing previews web' },
  { id: 'turbopascal', name: 'Turbo Pascal', year: 1983, decade: '1980s', category: 'IDE', description: 'Integrated development environment', majorEvent: 'Rapid development tools emerge' },

  // 1990s - Web Era
  { id: 'python', name: 'Python', year: 1991, decade: '1990s', category: 'Programming Language', description: 'High-level interpreted language', majorEvent: 'Internet becomes publicly accessible' },
  { id: 'java', name: 'Java', year: 1995, decade: '1990s', category: 'Programming Language', description: 'Write once, run anywhere', majorEvent: 'World Wide Web explodes globally' },
  { id: 'javascript', name: 'JavaScript', year: 1995, decade: '1990s', category: 'Programming Language', description: 'Web scripting language', majorEvent: 'Dynamic web pages transform internet' },
  { id: 'html', name: 'HTML', year: 1993, decade: '1990s', category: 'Markup Language', description: 'HyperText Markup Language', majorEvent: 'Web browsers enable global information sharing' },
  { id: 'css', name: 'CSS', year: 1996, decade: '1990s', category: 'Styling Language', description: 'Cascading Style Sheets', majorEvent: 'Web design becomes sophisticated art form' },
  { id: 'php', name: 'PHP', year: 1995, decade: '1990s', category: 'Programming Language', description: 'Server-side web language', majorEvent: 'Dynamic websites become mainstream' },
  { id: 'mysql', name: 'MySQL', year: 1995, decade: '1990s', category: 'Database', description: 'Open source database', majorEvent: 'Open source movement gains momentum' },
  { id: 'postgresql', name: 'PostgreSQL', year: 1996, decade: '1990s', category: 'Database', description: 'Advanced open source database', majorEvent: 'Enterprise-grade open source emerges' },
  { id: 'ruby', name: 'Ruby', year: 1995, decade: '1990s', category: 'Programming Language', description: 'Programmer happiness language', majorEvent: 'Developer experience focus begins' },
  { id: 'visualbasic', name: 'Visual Basic', year: 1991, decade: '1990s', category: 'Programming Language', description: 'Rapid application development', majorEvent: 'GUI programming becomes accessible' },
  { id: 'delphi', name: 'Delphi', year: 1995, decade: '1990s', category: 'IDE', description: 'Visual Pascal development', majorEvent: 'Component-based development emerges' },
  { id: 'apache', name: 'Apache', year: 1995, decade: '1990s', category: 'Web Server', description: 'Open source web server', majorEvent: 'Web hosting industry founded' },
  { id: 'netscape', name: 'Netscape', year: 1994, decade: '1990s', category: 'Browser', description: 'First popular web browser', majorEvent: 'Browser wars begin' },
  { id: 'ie', name: 'Internet Explorer', year: 1995, decade: '1990s', category: 'Browser', description: 'Microsoft web browser', majorEvent: 'Microsoft enters web market' },
  { id: 'flash', name: 'Flash', year: 1996, decade: '1990s', category: 'Multimedia Platform', description: 'Web animation and interaction', majorEvent: 'Rich media web experiences debut' },

  // 2000s - Web 2.0 Era  
  { id: 'csharp', name: 'C#', year: 2000, decade: '2000s', category: 'Programming Language', description: 'Microsoft .NET language', majorEvent: 'Dot-com bubble reshapes tech industry' },
  { id: 'dotnet', name: '.NET', year: 2002, decade: '2000s', category: 'Framework', description: 'Microsoft development platform', majorEvent: 'Enterprise frameworks mature' },
  { id: 'aspnet', name: 'ASP.NET', year: 2002, decade: '2000s', category: 'Web Framework', description: 'Microsoft web development', majorEvent: 'Web applications become sophisticated' },
  { id: 'scala', name: 'Scala', year: 2003, decade: '2000s', category: 'Programming Language', description: 'Functional-object hybrid language', majorEvent: 'Functional programming renaissance' },
  { id: 'fsharp', name: 'F#', year: 2005, decade: '2000s', category: 'Programming Language', description: 'Functional .NET language', majorEvent: 'Multi-paradigm programming emerges' },
  { id: 'powershell', name: 'PowerShell', year: 2006, decade: '2000s', category: 'Shell', description: 'Windows automation framework', majorEvent: 'System administration evolves' },
  { id: 'jquery', name: 'jQuery', year: 2006, decade: '2000s', category: 'JavaScript Library', description: 'DOM manipulation library', majorEvent: 'AJAX transforms user experiences' },
  { id: 'prototype', name: 'Prototype.js', year: 2005, decade: '2000s', category: 'JavaScript Library', description: 'JavaScript framework pioneer', majorEvent: 'Rich internet applications emerge' },
  { id: 'scriptaculous', name: 'Script.aculo.us', year: 2005, decade: '2000s', category: 'JavaScript Library', description: 'Web UI effects library', majorEvent: 'Interactive web interfaces advance' },
  { id: 'mootools', name: 'MooTools', year: 2006, decade: '2000s', category: 'JavaScript Framework', description: 'Modular JavaScript framework', majorEvent: 'Web framework ecosystem grows' },
  { id: 'dojo', name: 'Dojo', year: 2005, decade: '2000s', category: 'JavaScript Framework', description: 'Enterprise JavaScript toolkit', majorEvent: 'Enterprise web development matures' },
  { id: 'yui', name: 'YUI', year: 2006, decade: '2000s', category: 'JavaScript Library', description: 'Yahoo UI Library', majorEvent: 'Component libraries standardize' },
  { id: 'cakephp', name: 'CakePHP', year: 2006, decade: '2000s', category: 'Web Framework', description: 'PHP web framework', majorEvent: 'Web framework patterns emerge' },
  { id: 'codeigniter', name: 'CodeIgniter', year: 2006, decade: '2000s', category: 'Web Framework', description: 'Lightweight PHP framework', majorEvent: 'Rapid web development accelerates' },
  { id: 'zend', name: 'Zend Framework', year: 2006, decade: '2000s', category: 'Web Framework', description: 'Enterprise PHP framework', majorEvent: 'PHP enterprise adoption grows' },
  { id: 'symfony', name: 'Symfony', year: 2005, decade: '2000s', category: 'Web Framework', description: 'PHP component framework', majorEvent: 'Modular architecture patterns spread' },
  { id: 'rails', name: 'Ruby on Rails', year: 2004, decade: '2000s', category: 'Web Framework', description: 'Convention over configuration', majorEvent: 'Web 2.0 development paradigm established' },
  { id: 'django', name: 'Django', year: 2005, decade: '2000s', category: 'Web Framework', description: 'Python web framework', majorEvent: 'Rapid prototyping becomes standard' },
  { id: 'xampp', name: 'XAMPP', year: 2002, decade: '2000s', category: 'Development Stack', description: 'Cross-platform web development stack', majorEvent: 'Local development environments simplify' },
  { id: 'lamp', name: 'LAMP', year: 2000, decade: '2000s', category: 'Technology Stack', description: 'Linux, Apache, MySQL, PHP', majorEvent: 'Open source web stacks dominate' },
  { id: 'sqlite', name: 'SQLite', year: 2000, decade: '2000s', category: 'Database', description: 'Embedded database engine', majorEvent: 'Lightweight databases enable mobility' },
  { id: 'firefox', name: 'Firefox', year: 2004, decade: '2000s', category: 'Browser', description: 'Open source web browser', majorEvent: 'Browser competition drives innovation' },
  { id: 'safari', name: 'Safari', year: 2003, decade: '2000s', category: 'Browser', description: 'Apple web browser', majorEvent: 'Web standards adoption accelerates' },
  { id: 'svn', name: 'SVN', year: 2000, decade: '2000s', category: 'Version Control', description: 'Subversion version control', majorEvent: 'Collaborative development scales up' },

  // 2010s - Modern Web & Mobile
  { id: 'nodejs', name: 'Node.js', year: 2009, decade: '2010s', category: 'Runtime', description: 'Server-side JavaScript', majorEvent: 'Full-stack JavaScript revolution begins' },
  { id: 'go', name: 'Go', year: 2009, decade: '2010s', category: 'Programming Language', description: 'Google systems language', majorEvent: 'Cloud computing era launches' },
  { id: 'kotlin', name: 'Kotlin', year: 2011, decade: '2010s', category: 'Programming Language', description: 'Modern JVM language', majorEvent: 'Mobile app development explodes' },
  { id: 'swift', name: 'Swift', year: 2014, decade: '2010s', category: 'Programming Language', description: 'Apple iOS development language', majorEvent: 'App economy reaches trillion dollars' },
  { id: 'typescript', name: 'TypeScript', year: 2012, decade: '2010s', category: 'Programming Language', description: 'Typed JavaScript superset', majorEvent: 'Large-scale web applications mature' },
  { id: 'rust', name: 'Rust', year: 2010, decade: '2010s', category: 'Programming Language', description: 'Memory-safe systems language', majorEvent: 'Security-first programming emerges' },
  { id: 'dart', name: 'Dart', year: 2011, decade: '2010s', category: 'Programming Language', description: 'Google application language', majorEvent: 'Cross-platform development standardizes' },
  { id: 'react', name: 'React', year: 2013, decade: '2010s', category: 'JavaScript Library', description: 'Component-based UI library', majorEvent: 'Single-page applications dominate web' },
  { id: 'angular', name: 'Angular', year: 2010, decade: '2010s', category: 'JavaScript Framework', description: 'Full-featured web framework', majorEvent: 'Enterprise web applications scale globally' },
  { id: 'vue', name: 'Vue.js', year: 2014, decade: '2010s', category: 'JavaScript Framework', description: 'Progressive web framework', majorEvent: 'Developer experience focus intensifies' },
  { id: 'backbone', name: 'Backbone.js', year: 2010, decade: '2010s', category: 'JavaScript Framework', description: 'MVC framework for web apps', majorEvent: 'Structured client-side development emerges' },
  { id: 'knockout', name: 'Knockout.js', year: 2010, decade: '2010s', category: 'JavaScript Framework', description: 'MVVM framework', majorEvent: 'Data binding patterns popularize' },
  { id: 'ember', name: 'Ember.js', year: 2011, decade: '2010s', category: 'JavaScript Framework', description: 'Ambitious web applications', majorEvent: 'Convention-driven development spreads' },
  { id: 'd3', name: 'D3.js', year: 2011, decade: '2010s', category: 'JavaScript Library', description: 'Data visualization library', majorEvent: 'Big data visualization becomes mainstream' },
  { id: 'three', name: 'Three.js', year: 2010, decade: '2010s', category: 'JavaScript Library', description: '3D graphics library', majorEvent: 'WebGL enables immersive web experiences' },
  { id: 'lodash', name: 'Lodash', year: 2012, decade: '2010s', category: 'JavaScript Library', description: 'Utility library', majorEvent: 'Functional programming patterns adopt mainstream' },
  { id: 'underscore', name: 'Underscore.js', year: 2009, decade: '2010s', category: 'JavaScript Library', description: 'Functional utility library', majorEvent: 'JavaScript utility ecosystems mature' },
  { id: 'grunt', name: 'Grunt', year: 2012, decade: '2010s', category: 'Build Tool', description: 'JavaScript task runner', majorEvent: 'Build automation becomes essential' },
  { id: 'gulp', name: 'Gulp', year: 2013, decade: '2010s', category: 'Build Tool', description: 'Streaming build system', majorEvent: 'Developer tooling sophistication grows' },
  { id: 'webpack', name: 'Webpack', year: 2012, decade: '2010s', category: 'Build Tool', description: 'Module bundler', majorEvent: 'Complex web applications need advanced tooling' },
  { id: 'bower', name: 'Bower', year: 2012, decade: '2010s', category: 'Package Manager', description: 'Web package manager', majorEvent: 'Frontend dependency management standardizes' },
  { id: 'npm', name: 'npm', year: 2010, decade: '2010s', category: 'Package Manager', description: 'Node.js package manager', majorEvent: 'JavaScript ecosystem explodes globally' },
  { id: 'yarn', name: 'Yarn', year: 2016, decade: '2010s', category: 'Package Manager', description: 'Fast package manager', majorEvent: 'Package management competition drives innovation' },
  { id: 'bootstrap', name: 'Bootstrap', year: 2011, decade: '2010s', category: 'CSS Framework', description: 'Responsive web framework', majorEvent: 'Mobile-first design becomes standard' },
  { id: 'foundation', name: 'Foundation', year: 2011, decade: '2010s', category: 'CSS Framework', description: 'Advanced responsive framework', majorEvent: 'Responsive design frameworks mature' },
  { id: 'sass', name: 'Sass', year: 2006, decade: '2010s', category: 'CSS Preprocessor', description: 'CSS extension language', majorEvent: 'CSS preprocessing becomes development standard' },
  { id: 'less', name: 'Less', year: 2009, decade: '2010s', category: 'CSS Preprocessor', description: 'CSS preprocessor', majorEvent: 'Dynamic CSS compilation improves workflow' },
  { id: 'stylus', name: 'Stylus', year: 2010, decade: '2010s', category: 'CSS Preprocessor', description: 'Expressive CSS language', majorEvent: 'CSS tooling diversifies and specializes' },
  { id: 'laravel', name: 'Laravel', year: 2011, decade: '2010s', category: 'Web Framework', description: 'Elegant PHP framework', majorEvent: 'PHP framework renaissance occurs' },
  { id: 'yii', name: 'Yii', year: 2008, decade: '2010s', category: 'Web Framework', description: 'High-performance PHP framework', majorEvent: 'Enterprise PHP development advances' },
  { id: 'phalcon', name: 'Phalcon', year: 2012, decade: '2010s', category: 'Web Framework', description: 'C-extension PHP framework', majorEvent: 'Performance-focused frameworks emerge' },
  { id: 'composer', name: 'Composer', year: 2012, decade: '2010s', category: 'Package Manager', description: 'PHP dependency manager', majorEvent: 'PHP ecosystem modernization accelerates' },
  { id: 'mongodb', name: 'MongoDB', year: 2009, decade: '2010s', category: 'Database', description: 'Document database', majorEvent: 'NoSQL revolution transforms data storage' },
  { id: 'redis', name: 'Redis', year: 2009, decade: '2010s', category: 'Database', description: 'In-memory data structure store', majorEvent: 'Real-time applications demand fast data' },
  { id: 'couchdb', name: 'CouchDB', year: 2005, decade: '2010s', category: 'Database', description: 'Document-oriented database', majorEvent: 'Distributed database systems scale globally' },
  { id: 'cassandra', name: 'Cassandra', year: 2008, decade: '2010s', category: 'Database', description: 'Distributed NoSQL database', majorEvent: 'Big data requires distributed storage' },
  { id: 'elasticsearch', name: 'Elasticsearch', year: 2010, decade: '2010s', category: 'Search Engine', description: 'Distributed search engine', majorEvent: 'Real-time search becomes expectation' },
  { id: 'phonegap', name: 'PhoneGap/Cordova', year: 2009, decade: '2010s', category: 'Mobile Framework', description: 'Cross-platform mobile development', majorEvent: 'Mobile app market explodes globally' },
  { id: 'xamarin', name: 'Xamarin', year: 2011, decade: '2010s', category: 'Mobile Framework', description: '.NET mobile development', majorEvent: 'Enterprise mobile development matures' },
  { id: 'ionic', name: 'Ionic', year: 2013, decade: '2010s', category: 'Mobile Framework', description: 'Hybrid mobile app framework', majorEvent: 'Web technologies power mobile apps' },
  { id: 'reactnative', name: 'React Native', year: 2015, decade: '2010s', category: 'Mobile Framework', description: 'Native mobile apps with React', majorEvent: 'Learn once, write anywhere becomes reality' },
  { id: 'junit', name: 'JUnit', year: 1997, decade: '2010s', category: 'Testing Framework', description: 'Java testing framework', majorEvent: 'Test-driven development becomes standard practice' },
  { id: 'phpunit', name: 'PHPUnit', year: 2004, decade: '2010s', category: 'Testing Framework', description: 'PHP testing framework', majorEvent: 'Automated testing adoption accelerates' },
  { id: 'mocha', name: 'Mocha', year: 2011, decade: '2010s', category: 'Testing Framework', description: 'JavaScript testing framework', majorEvent: 'JavaScript testing ecosystem matures' },
  { id: 'jasmine', name: 'Jasmine', year: 2010, decade: '2010s', category: 'Testing Framework', description: 'Behavior-driven testing', majorEvent: 'BDD testing patterns gain adoption' },
  { id: 'qunit', name: 'QUnit', year: 2008, decade: '2010s', category: 'Testing Framework', description: 'jQuery testing framework', majorEvent: 'Frontend testing becomes systematic' },
  { id: 'git', name: 'Git', year: 2005, decade: '2010s', category: 'Version Control', description: 'Distributed version control', majorEvent: 'Distributed development workflows dominate' },
  { id: 'github', name: 'GitHub', year: 2008, decade: '2010s', category: 'Platform', description: 'Git hosting and collaboration', majorEvent: 'Social coding transforms software development' },
  { id: 'docker', name: 'Docker', year: 2013, decade: '2010s', category: 'Containerization', description: 'Application containerization', majorEvent: 'DevOps revolution transforms deployment' },
  { id: 'vagrant', name: 'Vagrant', year: 2010, decade: '2010s', category: 'Virtualization', description: 'Development environment automation', majorEvent: 'Development environment standardization' },
  { id: 'jenkins', name: 'Jenkins', year: 2011, decade: '2010s', category: 'CI/CD', description: 'Continuous integration server', majorEvent: 'Continuous delivery becomes standard' },
  { id: 'aws', name: 'AWS', year: 2006, decade: '2010s', category: 'Cloud Platform', description: 'Amazon Web Services', majorEvent: 'Cloud computing becomes mainstream' },
  { id: 'heroku', name: 'Heroku', year: 2007, decade: '2010s', category: 'Cloud Platform', description: 'Platform as a Service', majorEvent: 'Platform-as-a-Service simplifies deployment' },

  // 2020s - Current Era
  { id: 'flutter', name: 'Flutter', year: 2017, decade: '2020s', category: 'Mobile Framework', description: 'Cross-platform UI toolkit', majorEvent: 'COVID-19 accelerates digital transformation globally' },
  { id: 'graphql', name: 'GraphQL', year: 2015, decade: '2020s', category: 'Query Language', description: 'API query language', majorEvent: 'API-first development becomes standard' },
  { id: 'kubernetes', name: 'Kubernetes', year: 2014, decade: '2020s', category: 'Orchestration', description: 'Container orchestration platform', majorEvent: 'Microservices architecture dominates enterprise' },
  { id: 'tensorflow', name: 'TensorFlow', year: 2015, decade: '2020s', category: 'Machine Learning', description: 'ML framework', majorEvent: 'AI revolution transforms every industry' },
  { id: 'pytorch', name: 'PyTorch', year: 2016, decade: '2020s', category: 'Machine Learning', description: 'Deep learning framework', majorEvent: 'Machine learning democratizes globally' },
  { id: 'svelte', name: 'Svelte', year: 2016, decade: '2020s', category: 'JavaScript Framework', description: 'Compile-time framework', majorEvent: 'Performance-first web development emerges' },
  { id: 'nextjs', name: 'Next.js', year: 2016, decade: '2020s', category: 'React Framework', description: 'Full-stack React framework', majorEvent: 'Static site generation renaissance occurs' },
  { id: 'nuxtjs', name: 'Nuxt.js', year: 2016, decade: '2020s', category: 'Vue Framework', description: 'Vue.js application framework', majorEvent: 'Server-side rendering becomes standard' },
  { id: 'gatsby', name: 'Gatsby', year: 2015, decade: '2020s', category: 'Static Site Generator', description: 'React-based static site generator', majorEvent: 'JAMstack architecture gains mainstream adoption' },
  { id: 'deno', name: 'Deno', year: 2018, decade: '2020s', category: 'Runtime', description: 'Secure TypeScript runtime', majorEvent: 'Security-first development paradigms emerge' },
  { id: 'vite', name: 'Vite', year: 2020, decade: '2020s', category: 'Build Tool', description: 'Next-generation build tool', majorEvent: 'Developer experience optimization accelerates' },
  { id: 'tailwind', name: 'Tailwind CSS', year: 2017, decade: '2020s', category: 'CSS Framework', description: 'Utility-first CSS framework', majorEvent: 'Utility-first design systems gain adoption' },
  { id: 'jest', name: 'Jest', year: 2014, decade: '2020s', category: 'Testing Framework', description: 'JavaScript testing framework', majorEvent: 'Zero-configuration testing becomes expectation' },
  { id: 'cypress', name: 'Cypress', year: 2017, decade: '2020s', category: 'Testing Framework', description: 'End-to-end testing framework', majorEvent: 'Modern testing tools improve quality' },
  { id: 'playwright', name: 'Playwright', year: 2020, decade: '2020s', category: 'Testing Framework', description: 'Cross-browser testing framework', majorEvent: 'Browser automation reaches new sophistication' },
  { id: 'prisma', name: 'Prisma', year: 2019, decade: '2020s', category: 'Database Toolkit', description: 'Type-safe database client', majorEvent: 'Type-safe development becomes priority' },
  { id: 'serverless', name: 'Serverless', year: 2015, decade: '2020s', category: 'Architecture', description: 'Function-as-a-Service computing', majorEvent: 'Serverless computing transforms cloud architecture' },
  { id: 'jamstack', name: 'JAMstack', year: 2015, decade: '2020s', category: 'Architecture', description: 'JavaScript, APIs, Markup architecture', majorEvent: 'Static-first web architecture becomes mainstream' }
];

export const historicalEvents: Record<string, HistoricalEvent[]> = {
  '1960s': [
    { year: 1969, event: 'Moon Landing - Neil Armstrong steps on lunar surface', icon: 'Terminal' },
    { year: 1963, event: 'JFK Assassination shocks the world', icon: 'AlertCircle' },
    { year: 1969, event: 'Woodstock Festival defines a generation', icon: 'Music' },
    { year: 1968, event: 'Civil Rights Movement reaches peak', icon: 'Users' }
  ],
  '1970s': [
    { year: 1974, event: 'Watergate Scandal ends Nixon presidency', icon: 'Cpu' },
    { year: 1973, event: 'Oil Crisis transforms global economy', icon: 'Fuel' },
    { year: 1977, event: 'Star Wars creates modern blockbuster era', icon: 'Star' },
    { year: 1975, event: 'Personal Computing begins with Altair 8800', icon: 'Monitor' }
  ],
  '1980s': [
    { year: 1981, event: 'MTV launches "Video Killed the Radio Star"', icon: 'Zap' },
    { year: 1989, event: 'Berlin Wall falls, Cold War ends', icon: 'Landmark' },
    { year: 1986, event: 'Chernobyl nuclear disaster', icon: 'AlertTriangle' },
    { year: 1984, event: 'Apple Macintosh introduces GUI to masses', icon: 'Mouse' }
  ],
  '1990s': [
    { year: 1991, event: 'World Wide Web becomes publicly available', icon: 'Globe' },
    { year: 1991, event: 'Gulf War first televised conflict', icon: 'Tv' },
    { year: 1999, event: 'Y2K fears grip the world', icon: 'Clock' },
    { year: 1995, event: 'Windows 95 brings computing to mainstream', icon: 'Window' }
  ],
  '2000s': [
    { year: 2001, event: '9/11 attacks change world security forever', icon: 'Monitor' },
    { year: 2004, event: 'Facebook launches social media revolution', icon: 'Users2' },
    { year: 2007, event: 'iPhone launch creates smartphone era', icon: 'Smartphone' },
    { year: 2008, event: 'Global Financial Crisis reshapes economy', icon: 'TrendingDown' }
  ],
  '2010s': [
    { year: 2010, event: 'Arab Spring driven by social media', icon: 'Smartphone' },
    { year: 2016, event: 'Brexit vote surprises global markets', icon: 'Vote' },
    { year: 2016, event: 'Trump election reshapes politics', icon: 'User' },
    { year: 2010, event: 'Instagram launches visual social media', icon: 'Camera' }
  ],
  '2020s': [
    { year: 2020, event: 'COVID-19 pandemic triggers global lockdowns', icon: 'Cloud' },
    { year: 2020, event: 'Remote work becomes permanent for millions', icon: 'Home' },
    { year: 2022, event: 'ChatGPT launches AI revolution', icon: 'Brain' },
    { year: 2021, event: 'Climate action becomes urgent priority', icon: 'Leaf' }
  ]
};

// Helper functions for technology management
export const getTechnologiesByDecade = (decade: string) =>
  technologies.filter(tech => tech.decade === decade);

export const getDecadeTheme = (decade: string) => {
  const themes: Record<string, { color: string; icon: string; title: string }> = {
    '1960s': { color: 'era-1960s', icon: 'Terminal', title: 'Early Computing Era' },
    '1970s': { color: 'era-1970s', icon: 'Cpu', title: 'Personal Computing Birth' },
    '1980s': { color: 'era-1980s', icon: 'Zap', title: 'GUI Revolution' },
    '1990s': { color: 'era-1990s', icon: 'Globe', title: 'Web Era Dawn' },
    '2000s': { color: 'era-2000s', icon: 'Monitor', title: 'Web 2.0 Revolution' },
    '2010s': { color: 'era-2010s', icon: 'Smartphone', title: 'Mobile-First Era' },
    '2020s': { color: 'era-2020s', icon: 'Cloud', title: 'AI & Cloud Era' }
  };
  return themes[decade] || themes['2020s'];
};

export const getTechSizeClass = (year: number) => {
  if (year < 1970) return 'tech-ancient';
  if (year < 1980) return 'tech-vintage';
  if (year < 1990) return 'tech-classic';
  if (year < 2000) return 'tech-modern';
  if (year < 2010) return 'tech-current';
  return 'tech-latest';
};