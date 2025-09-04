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


export const technologies: Technology[] = [// 1960s
  { id: 'fortran', name: 'FORTRAN', year: 1957, decade: '1960s', category: 'Programming Language', description: 'First high-level programming language', majorEvent: 'Space race drives computational needs' },
  { id: 'cobol', name: 'COBOL', year: 1959, decade: '1960s', category: 'Programming Language', description: 'Business-oriented programming language', majorEvent: 'Business computing revolution begins' },
  { id: 'lisp', name: 'LISP', year: 1958, decade: '1960s', category: 'Programming Language', description: 'AI and symbolic computation language', majorEvent: 'AI research foundations laid' },
  { id: 'basic', name: 'BASIC', year: 1964, decade: '1960s', category: 'Programming Language', description: 'Beginner-friendly programming language', majorEvent: 'Computing education democratized' },
  { id: 'multics', name: 'Multics', year: 1965, decade: '1960s', category: 'Operating System', description: 'Early time-sharing operating system', majorEvent: 'Multi-user computing concepts emerge' },

  // 1970s
  { id: 'unix', name: 'Unix', year: 1970, decade: '1970s', category: 'Operating System', description: 'Portable, multi-user operating system', majorEvent: 'Personal computer revolution begins' },
  { id: 'c-lang', name: 'C', year: 1972, decade: '1970s', category: 'Programming Language', description: 'System programming language', majorEvent: 'Microprocessor development accelerates' },
  { id: 'pascal', name: 'Pascal', year: 1970, decade: '1970s', category: 'Programming Language', description: 'Structured programming language', majorEvent: 'Software engineering discipline emerges' },
  { id: 'smalltalk', name: 'Smalltalk', year: 1972, decade: '1970s', category: 'Programming Language', description: 'Object-oriented programming pioneer', majorEvent: 'GUI concepts developed at Xerox PARC' },
  { id: 'sql', name: 'SQL', year: 1974, decade: '1970s', category: 'Query Language', description: 'Structured Query Language for databases', majorEvent: 'Relational database theory established' },
  { id: 'ethernet', name: 'Ethernet', year: 1973, decade: '1970s', category: 'Networking', description: 'Local area networking standard', majorEvent: 'Computer networking foundations laid' },

  // 1980s
  { id: 'cpp', name: 'C++', year: 1985, decade: '1980s', category: 'Programming Language', description: 'Object-oriented extension of C', majorEvent: 'Personal computer market explodes' },
  { id: 'perl', name: 'Perl', year: 1987, decade: '1980s', category: 'Programming Language', description: 'Text processing and scripting language', majorEvent: 'Internet infrastructure development' },
  { id: 'tcpip', name: 'TCP/IP', year: 1983, decade: '1980s', category: 'Protocol', description: 'Internet protocol suite', majorEvent: 'ARPANET transitions to Internet' },
  { id: 'x-windows', name: 'X Window System', year: 1984, decade: '1980s', category: 'GUI Framework', description: 'Network-transparent windowing system', majorEvent: 'Graphical user interfaces standardize' },
  { id: 'postscript', name: 'PostScript', year: 1982, decade: '1980s', category: 'Page Description Language', description: 'Document formatting and printing', majorEvent: 'Desktop publishing revolution' },

  // 1990s
  { id: 'python', name: 'Python', year: 1991, decade: '1990s', category: 'Programming Language', description: 'High-level, readable programming language', majorEvent: 'Web development boom begins' },
  { id: 'javascript', name: 'JavaScript', year: 1995, decade: '1990s', category: 'Programming Language', description: 'Web scripting language', majorEvent: 'Interactive web experiences emerge' },
  { id: 'java', name: 'Java', year: 1995, decade: '1990s', category: 'Programming Language', description: 'Write once, run anywhere language', majorEvent: 'Cross-platform development standardized' },
  { id: 'php', name: 'PHP', year: 1995, decade: '1990s', category: 'Programming Language', description: 'Server-side web development language', majorEvent: 'Dynamic web applications proliferate' },
  { id: 'cakephp', name: 'CakePHP', year: 2006, decade: '1990s', category: 'PHP Framework', description: 'Convention-over-configuration PHP framework', majorEvent: 'PHP frameworks bring structure to web development' },
  { id: 'codeigniter', name: 'CodeIgniter', year: 2006, decade: '1990s', category: 'PHP Framework', description: 'Lightweight PHP framework', majorEvent: 'Simple PHP frameworks gain popularity' },
  { id: 'html', name: 'HTML', year: 1993, decade: '1990s', category: 'Markup Language', description: 'Web page markup language', majorEvent: 'World Wide Web goes public' },
  { id: 'css', name: 'CSS', year: 1996, decade: '1990s', category: 'Style Sheet Language', description: 'Web page styling language', majorEvent: 'Web design becomes sophisticated' },
  { id: 'xml', name: 'XML', year: 1998, decade: '1990s', category: 'Markup Language', description: 'Extensible markup language', majorEvent: 'Data exchange standards emerge' },
  { id: 'linux', name: 'Linux', year: 1991, decade: '1990s', category: 'Operating System', description: 'Open-source Unix-like OS', majorEvent: 'Open source movement gains momentum' },
  { id: 'apache', name: 'Apache HTTP Server', year: 1995, decade: '1990s', category: 'Web Server', description: 'Open-source web server', majorEvent: 'Web server market consolidates' },
  { id: 'mysql', name: 'MySQL', year: 1995, decade: '1990s', category: 'Database', description: 'Open-source relational database', majorEvent: 'Database democratization begins' },

  // 2000s
  { id: 'csharp', name: 'C#', year: 2000, decade: '2000s', category: 'Programming Language', description: 'Microsoft\'s object-oriented language', majorEvent: 'Enterprise development frameworks mature' },
  { id: 'dotnet', name: '.NET Framework', year: 2002, decade: '2000s', category: 'Framework', description: 'Microsoft development platform', majorEvent: 'Platform-as-a-service concepts emerge' },
  { id: 'ruby', name: 'Ruby', year: 1995, decade: '2000s', category: 'Programming Language', description: 'Developer-friendly scripting language', majorEvent: 'Web 2.0 and social media rise' },
  { id: 'rails', name: 'Ruby on Rails', year: 2005, decade: '2000s', category: 'Web Framework', description: 'Convention-over-configuration web framework', majorEvent: 'Rapid web development becomes standard' },
  { id: 'sinatra', name: 'Sinatra', year: 2007, decade: '2000s', category: 'Ruby Framework', description: 'Lightweight Ruby web framework', majorEvent: 'Microframeworks emerge for simple applications' },
  { id: 'symfony', name: 'Symfony', year: 2005, decade: '2000s', category: 'PHP Framework', description: 'High-performance PHP framework', majorEvent: 'Enterprise PHP development matures' },
  { id: 'zend', name: 'Zend Framework', year: 2006, decade: '2000s', category: 'PHP Framework', description: 'Enterprise PHP framework', majorEvent: 'PHP gains enterprise credibility' },
  { id: 'yii', name: 'Yii Framework', year: 2008, decade: '2000s', category: 'PHP Framework', description: 'Secure and efficient PHP framework', majorEvent: 'PHP framework ecosystem diversifies' },
  { id: 'flask', name: 'Flask', year: 2010, decade: '2000s', category: 'Python Framework', description: 'Lightweight Python web framework', majorEvent: 'Microframeworks gain traction' },
  { id: 'tornado', name: 'Tornado', year: 2009, decade: '2000s', category: 'Python Framework', description: 'Scalable non-blocking web server', majorEvent: 'Real-time web applications emerge' },
  { id: 'spring', name: 'Spring Framework', year: 2003, decade: '2000s', category: 'Java Framework', description: 'Enterprise Java application framework', majorEvent: 'Enterprise Java development simplifies' },
  { id: 'struts', name: 'Apache Struts', year: 2000, decade: '2000s', category: 'Java Framework', description: 'MVC framework for Java web applications', majorEvent: 'Java web development standardizes' },
  { id: 'jsf', name: 'JavaServer Faces (JSF)', year: 2004, decade: '2000s', category: 'Java Framework', description: 'Component-based web framework', majorEvent: 'Component-based web development emerges' },
  { id: 'play', name: 'Play Framework', year: 2007, decade: '2000s', category: 'Java/Scala Framework', description: 'Reactive web framework', majorEvent: 'Reactive programming gains momentum' },
  { id: 'jquery', name: 'jQuery', year: 2006, decade: '2000s', category: 'JavaScript Library', description: 'DOM manipulation and AJAX library', majorEvent: 'Rich web applications become mainstream' },
  { id: 'prototype', name: 'Prototype.js', year: 2005, decade: '2000s', category: 'JavaScript Library', description: 'JavaScript framework extending DOM', majorEvent: 'AJAX-driven web applications emerge' },
  { id: 'mootools', name: 'MooTools', year: 2006, decade: '2000s', category: 'JavaScript Library', description: 'Modular JavaScript framework', majorEvent: 'JavaScript framework competition intensifies' },
  { id: 'sass', name: 'Sass', year: 2006, decade: '2000s', category: 'CSS Preprocessor', description: 'Syntactically Awesome Style Sheets', majorEvent: 'CSS preprocessing revolutionizes styling' },
  { id: 'less', name: 'LESS', year: 2009, decade: '2000s', category: 'CSS Preprocessor', description: 'Dynamic stylesheet language', majorEvent: 'CSS preprocessing becomes mainstream' },
  { id: '960-grid', name: '960 Grid System', year: 2008, decade: '2000s', category: 'CSS Framework', description: 'Fixed-width grid system', majorEvent: 'Grid-based web design becomes standard' },
  { id: 'blueprint', name: 'Blueprint CSS', year: 2007, decade: '2000s', category: 'CSS Framework', description: 'Grid-based CSS framework', majorEvent: 'CSS frameworks emerge for layout consistency' },
  { id: 'yaml', name: 'YAML CSS Framework', year: 2005, decade: '2000s', category: 'CSS Framework', description: 'Yet Another Multicolumn Layout', majorEvent: 'Multi-column layouts become standardized' },
  { id: 'yui-css', name: 'YUI CSS', year: 2006, decade: '2000s', category: 'CSS Framework', description: 'Yahoo User Interface CSS', majorEvent: 'Major companies release CSS frameworks' },
  { id: 'git', name: 'Git', year: 2005, decade: '2000s', category: 'Version Control', description: 'Distributed version control system', majorEvent: 'Collaborative development scales globally' },
  { id: 'django', name: 'Django', year: 2005, decade: '2000s', category: 'Web Framework', description: 'Python web framework', majorEvent: 'Content management systems proliferate' },
  { id: 'postgresql', name: 'PostgreSQL', year: 1996, decade: '2000s', category: 'Database', description: 'Advanced open-source database', majorEvent: 'Enterprise adopts open-source databases' },
  { id: 'firefox', name: 'Firefox', year: 2004, decade: '2000s', category: 'Web Browser', description: 'Open-source web browser', majorEvent: 'Browser wars drive web standards' },
  { id: 'virtualization', name: 'VMware', year: 1999, decade: '2000s', category: 'Virtualization', description: 'Server virtualization platform', majorEvent: 'Data center efficiency revolution' },
  { id: 'xen', name: 'Xen Hypervisor', year: 2003, decade: '2000s', category: 'Virtualization', description: 'Open-source hypervisor', majorEvent: 'Virtualization becomes mainstream' },
  { id: 'virtualbox', name: 'VirtualBox', year: 2007, decade: '2000s', category: 'Virtualization', description: 'Desktop virtualization platform', majorEvent: 'Desktop virtualization democratizes' },
  { id: 'vagrant', name: 'Vagrant', year: 2010, decade: '2000s', category: 'Development Environment', description: 'Development environment provisioning', majorEvent: 'Development environment standardization' },
  { id: 'chef', name: 'Chef', year: 2009, decade: '2000s', category: 'Configuration Management', description: 'Infrastructure automation framework', majorEvent: 'Infrastructure as code emerges' },
  { id: 'puppet', name: 'Puppet', year: 2005, decade: '2000s', category: 'Configuration Management', description: 'Declarative system configuration', majorEvent: 'Configuration management becomes essential' },

  // 2010s
  { id: 'nodejs', name: 'Node.js', year: 2009, decade: '2000s', category: 'Runtime', description: 'Server-side JavaScript runtime', majorEvent: 'JavaScript everywhere movement begins' },
  { id: 'backbone', name: 'Backbone.js', year: 2010, decade: '2010s', category: 'JavaScript Framework', description: 'Lightweight MVC framework', majorEvent: 'Single-page applications gain traction' },
  { id: 'knockout', name: 'Knockout.js', year: 2010, decade: '2010s', category: 'JavaScript Library', description: 'MVVM pattern library', majorEvent: 'Data binding becomes essential in web apps' },
  { id: 'angularjs', name: 'AngularJS', year: 2010, decade: '2010s', category: 'JavaScript Framework', description: 'Single-page application framework', majorEvent: 'Rich web applications become standard' },
  { id: 'ember', name: 'Ember.js', year: 2011, decade: '2010s', category: 'JavaScript Framework', description: 'Ambitious web applications framework', majorEvent: 'Convention-over-configuration gains popularity' },
  { id: 'underscore', name: 'Underscore.js', year: 2009, decade: '2000s', category: 'JavaScript Library', description: 'Functional programming utilities', majorEvent: 'Functional programming patterns emerge in JS' },
  { id: 'lodash', name: 'Lodash', year: 2012, decade: '2010s', category: 'JavaScript Library', description: 'Modern utility library', majorEvent: 'JavaScript utility libraries mature' },
  { id: 'requirejs', name: 'RequireJS', year: 2009, decade: '2000s', category: 'JavaScript Library', description: 'AMD module loader', majorEvent: 'JavaScript module systems emerge' },
  { id: 'browserify', name: 'Browserify', year: 2011, decade: '2010s', category: 'Build Tool', description: 'Bundle CommonJS modules for browser', majorEvent: 'Node.js modules come to browser' },
  { id: 'd3', name: 'D3.js', year: 2011, decade: '2010s', category: 'JavaScript Library', description: 'Data-driven documents library', majorEvent: 'Data visualization becomes sophisticated' },
  { id: 'handlebars', name: 'Handlebars.js', year: 2010, decade: '2010s', category: 'Template Engine', description: 'Logic-less templating engine', majorEvent: 'Template engines separate logic from presentation' },
  { id: 'mustache', name: 'Mustache.js', year: 2009, decade: '2000s', category: 'Template Engine', description: 'Logic-less templates', majorEvent: 'Template standardization across languages' },
  { id: 'moment', name: 'Moment.js', year: 2011, decade: '2010s', category: 'JavaScript Library', description: 'Date manipulation library', majorEvent: 'Complex date handling becomes common' },
  { id: 'react', name: 'React', year: 2013, decade: '2010s', category: 'JavaScript Library', description: 'Component-based UI library', majorEvent: 'Component architecture revolutionizes frontend' },
  { id: 'angular', name: 'Angular', year: 2016, decade: '2010s', category: 'JavaScript Framework', description: 'Complete rewrite of AngularJS with TypeScript', majorEvent: 'TypeScript adoption accelerates' },
  { id: 'vue', name: 'Vue.js', year: 2014, decade: '2010s', category: 'JavaScript Framework', description: 'Progressive web framework', majorEvent: 'Developer experience becomes priority' },
  { id: 'gulp', name: 'Gulp', year: 2013, decade: '2010s', category: 'Build Tool', description: 'Streaming build system', majorEvent: 'Build automation becomes sophisticated' },
  { id: 'grunt', name: 'Grunt', year: 2012, decade: '2010s', category: 'Build Tool', description: 'JavaScript task runner', majorEvent: 'Frontend build processes mature' },
  { id: 'stylus', name: 'Stylus', year: 2010, decade: '2010s', category: 'CSS Preprocessor', description: 'Expressive CSS preprocessor', majorEvent: 'CSS preprocessing diversifies' },
  { id: 'compass', name: 'Compass', year: 2008, decade: '2010s', category: 'CSS Framework', description: 'Sass-based CSS authoring framework', majorEvent: 'CSS frameworks become sophisticated' },
  { id: 'bootstrap', name: 'Bootstrap', year: 2011, decade: '2010s', category: 'CSS Framework', description: 'Responsive web design framework', majorEvent: 'Mobile-first design becomes standard' },
  { id: 'foundation', name: 'Foundation', year: 2011, decade: '2010s', category: 'CSS Framework', description: 'Advanced responsive front-end framework', majorEvent: 'Responsive design frameworks compete' },
  { id: 'materialize', name: 'Materialize', year: 2014, decade: '2010s', category: 'CSS Framework', description: 'Material Design CSS framework', majorEvent: 'Google Material Design influences web' },
  { id: 'semantic-ui', name: 'Semantic UI', year: 2013, decade: '2010s', category: 'CSS Framework', description: 'Human-friendly HTML framework', majorEvent: 'Semantic naming conventions gain popularity' },
  { id: 'pure-css', name: 'Pure.css', year: 2013, decade: '2010s', category: 'CSS Framework', description: 'Minimal CSS modules by Yahoo', majorEvent: 'Modular CSS frameworks emerge' },
  { id: 'skeleton', name: 'Skeleton', year: 2011, decade: '2010s', category: 'CSS Framework', description: 'Lightweight responsive boilerplate', majorEvent: 'Minimalist frameworks gain traction' },
  { id: 'milligram', name: 'Milligram', year: 2015, decade: '2010s', category: 'CSS Framework', description: 'Minimalist CSS framework', majorEvent: 'Ultra-lightweight frameworks emerge' },
  { id: 'spectre', name: 'Spectre.css', year: 2016, decade: '2010s', category: 'CSS Framework', description: 'Lightweight responsive framework', majorEvent: 'Modern CSS features adopted in frameworks' },
  { id: 'tachyons', name: 'Tachyons', year: 2014, decade: '2010s', category: 'CSS Framework', description: 'Functional CSS framework', majorEvent: 'Utility-first CSS approach emerges' },
  { id: 'normalize', name: 'Normalize.css', year: 2011, decade: '2010s', category: 'CSS Library', description: 'CSS reset alternative', majorEvent: 'CSS normalization becomes standard practice' },
  { id: 'animate-css', name: 'Animate.css', year: 2011, decade: '2010s', category: 'CSS Library', description: 'Cross-browser CSS animations', majorEvent: 'CSS animations become mainstream' },
  { id: 'hover-css', name: 'Hover.css', year: 2014, decade: '2010s', category: 'CSS Library', description: 'Collection of CSS3 hover effects', majorEvent: 'Interactive CSS effects proliferate' },
  { id: 'laravel', name: 'Laravel', year: 2011, decade: '2010s', category: 'PHP Framework', description: 'Elegant PHP framework', majorEvent: 'Modern PHP development practices emerge' },
  { id: 'phalcon', name: 'Phalcon', year: 2012, decade: '2010s', category: 'PHP Framework', description: 'High-performance C-extension PHP framework', majorEvent: 'Performance optimization becomes critical' },
  { id: 'slim', name: 'Slim Framework', year: 2010, decade: '2010s', category: 'PHP Framework', description: 'Fast and minimalist PHP framework', majorEvent: 'API-first development emerges' },
  { id: 'fastapi', name: 'FastAPI', year: 2018, decade: '2010s', category: 'Python Framework', description: 'Modern Python web framework for APIs', majorEvent: 'API documentation becomes automated' },
  { id: 'gin', name: 'Gin', year: 2014, decade: '2010s', category: 'Go Framework', description: 'HTTP web framework for Go', majorEvent: 'Go web development ecosystem emerges' },
  { id: 'echo', name: 'Echo', year: 2015, decade: '2010s', category: 'Go Framework', description: 'High performance Go web framework', majorEvent: 'Minimalist web frameworks gain popularity' },
  { id: 'fiber', name: 'Fiber', year: 2020, decade: '2010s', category: 'Go Framework', description: 'Express-inspired Go web framework', majorEvent: 'Go web frameworks adopt familiar patterns' },
  { id: 'beego', name: 'Beego', year: 2012, decade: '2010s', category: 'Go Framework', description: 'MVC framework for Go', majorEvent: 'Full-stack Go frameworks emerge' },
  { id: 'revel', name: 'Revel', year: 2012, decade: '2010s', category: 'Go Framework', description: 'High-productivity Go web framework', majorEvent: 'Developer productivity in Go improves' },
  { id: 'hanami', name: 'Hanami', year: 2014, decade: '2010s', category: 'Ruby Framework', description: 'Full-stack Ruby web framework', majorEvent: 'Alternative Ruby frameworks emerge' },
  { id: 'spring-boot', name: 'Spring Boot', year: 2014, decade: '2010s', category: 'Java Framework', description: 'Opinionated Spring application framework', majorEvent: 'Microservices architecture becomes mainstream' },
  { id: 'quarkus', name: 'Quarkus', year: 2019, decade: '2010s', category: 'Java Framework', description: 'Cloud-native Java framework', majorEvent: 'Cloud-native development becomes priority' },
  { id: 'micronaut', name: 'Micronaut', year: 2018, decade: '2010s', category: 'Java Framework', description: 'Modern JVM-based framework', majorEvent: 'JVM frameworks optimize for cloud deployment' },
  { id: 'vert-x', name: 'Vert.x', year: 2011, decade: '2010s', category: 'Java Framework', description: 'Reactive applications on the JVM', majorEvent: 'Event-driven programming becomes mainstream' },
  { id: 'dropwizard', name: 'Dropwizard', year: 2011, decade: '2010s', category: 'Java Framework', description: 'Java framework for RESTful web services', majorEvent: 'REST APIs become standard' },
  { id: 'grails', name: 'Grails', year: 2006, decade: '2010s', category: 'Groovy Framework', description: 'Convention-over-configuration Groovy framework', majorEvent: 'Alternative JVM languages gain traction' },
  { id: 'ktor', name: 'Ktor', year: 2018, decade: '2010s', category: 'Kotlin Framework', description: 'Asynchronous Kotlin web framework', majorEvent: 'Kotlin adoption accelerates beyond Android' },
  { id: 'pyramid', name: 'Pyramid', year: 2010, decade: '2010s', category: 'Python Framework', description: 'Minimalist Python web framework', majorEvent: 'Python web framework ecosystem matures' },
  { id: 'bottle', name: 'Bottle', year: 2009, decade: '2000s', category: 'Python Framework', description: 'Micro web framework for Python', majorEvent: 'Single-file frameworks gain popularity' },
  { id: 'cherrypy', name: 'CherryPy', year: 2002, decade: '2010s', category: 'Python Framework', description: 'Object-oriented HTTP framework', majorEvent: 'Python web servers become more sophisticated' },
  { id: 'mongodb', name: 'MongoDB', year: 2009, decade: '2000s', category: 'Database', description: 'Document-oriented NoSQL database', majorEvent: 'Big data and NoSQL movement emerges' },
  { id: 'redis', name: 'Redis', year: 2009, decade: '2000s', category: 'Database', description: 'In-memory data structure store', majorEvent: 'Real-time applications require fast data' },
  { id: 'docker', name: 'Docker', year: 2013, decade: '2010s', category: 'Containerization', description: 'Application containerization platform', majorEvent: 'DevOps and continuous deployment mature' },
  { id: 'kubernetes', name: 'Kubernetes', year: 2014, decade: '2010s', category: 'Orchestration', description: 'Container orchestration platform', majorEvent: 'Microservices architecture dominates enterprise' },
  { id: 'ansible', name: 'Ansible', year: 2012, decade: '2010s', category: 'Configuration Management', description: 'Agentless automation platform', majorEvent: 'Simple automation tools gain adoption' },
  { id: 'terraform', name: 'Terraform', year: 2014, decade: '2010s', category: 'Infrastructure as Code', description: 'Infrastructure provisioning tool', majorEvent: 'Multi-cloud infrastructure management emerges' },
  { id: 'jenkins', name: 'Jenkins', year: 2011, decade: '2010s', category: 'CI/CD', description: 'Continuous integration server', majorEvent: 'Continuous deployment becomes standard' },
  { id: 'gitlab-ci', name: 'GitLab CI/CD', year: 2012, decade: '2010s', category: 'CI/CD', description: 'Integrated CI/CD platform', majorEvent: 'DevOps toolchain integration accelerates' },
  { id: 'travis-ci', name: 'Travis CI', year: 2011, decade: '2010s', category: 'CI/CD', description: 'Cloud-based continuous integration', majorEvent: 'Cloud-based CI/CD becomes mainstream' },
  { id: 'circleci', name: 'CircleCI', year: 2011, decade: '2010s', category: 'CI/CD', description: 'Continuous integration and delivery', majorEvent: 'CI/CD as a service proliferates' },
  { id: 'bamboo', name: 'Bamboo', year: 2007, decade: '2010s', category: 'CI/CD', description: 'Atlassian\'s CI/CD server', majorEvent: 'Enterprise CI/CD solutions mature' },
  { id: 'teamcity', name: 'TeamCity', year: 2006, decade: '2010s', category: 'CI/CD', description: 'JetBrains CI/CD server', majorEvent: 'IDE-integrated CI/CD emerges' },
  { id: 'consul', name: 'Consul', year: 2014, decade: '2010s', category: 'Service Discovery', description: 'Service mesh and discovery tool', majorEvent: 'Microservices networking becomes complex' },
  { id: 'etcd', name: 'etcd', year: 2013, decade: '2010s', category: 'Distributed Storage', description: 'Distributed key-value store', majorEvent: 'Distributed systems coordination improves' },
  { id: 'zookeeper', name: 'Apache ZooKeeper', year: 2008, decade: '2010s', category: 'Coordination Service', description: 'Distributed coordination service', majorEvent: 'Distributed application coordination standardizes' },
  { id: 'mesos', name: 'Apache Mesos', year: 2009, decade: '2000s', category: 'Cluster Management', description: 'Distributed systems kernel', majorEvent: 'Cluster resource management evolves' },
  { id: 'marathon', name: 'Marathon', year: 2013, decade: '2010s', category: 'Container Orchestration', description: 'Container orchestration for Mesos', majorEvent: 'Container orchestration options diversify' },
  { id: 'swarm', name: 'Docker Swarm', year: 2014, decade: '2010s', category: 'Container Orchestration', description: 'Native Docker clustering', majorEvent: 'Container orchestration becomes competitive' },
  { id: 'nomad', name: 'HashiCorp Nomad', year: 2015, decade: '2010s', category: 'Orchestration', description: 'Flexible workload orchestrator', majorEvent: 'Orchestration beyond containers emerges' },
  { id: 'helm', name: 'Helm', year: 2015, decade: '2010s', category: 'Package Manager', description: 'Kubernetes package manager', majorEvent: 'Kubernetes ecosystem tools proliferate' },
  { id: 'prometheus', name: 'Prometheus', year: 2012, decade: '2010s', category: 'Monitoring', description: 'Systems monitoring and alerting', majorEvent: 'Cloud-native monitoring becomes essential' },
  { id: 'grafana', name: 'Grafana', year: 2014, decade: '2010s', category: 'Monitoring', description: 'Analytics and monitoring platform', majorEvent: 'Observability becomes critical in microservices' },
  { id: 'elk', name: 'ELK Stack', year: 2010, decade: '2010s', category: 'Logging', description: 'Elasticsearch, Logstash, Kibana', majorEvent: 'Centralized logging becomes standard' },
  { id: 'fluentd', name: 'Fluentd', year: 2011, decade: '2010s', category: 'Logging', description: 'Unified logging layer', majorEvent: 'Log aggregation solutions mature' },
  { id: 'logstash', name: 'Logstash', year: 2009, decade: '2000s', category: 'Logging', description: 'Server-side data processing pipeline', majorEvent: 'Log processing pipelines emerge' },
  { id: 'kibana', name: 'Kibana', year: 2010, decade: '2010s', category: 'Data Visualization', description: 'Elasticsearch data visualization', majorEvent: 'Log visualization becomes sophisticated' },
  { id: 'saltstack', name: 'SaltStack', year: 2011, decade: '2010s', category: 'Configuration Management', description: 'Event-driven automation platform', majorEvent: 'Real-time infrastructure management emerges' },
  { id: 'swift', name: 'Swift', year: 2014, decade: '2010s', category: 'Programming Language', description: 'Apple\'s modern programming language', majorEvent: 'Mobile development becomes critical' },
  { id: 'kotlin', name: 'Kotlin', year: 2011, decade: '2010s', category: 'Programming Language', description: 'Modern JVM programming language', majorEvent: 'Android development evolves rapidly' },
  { id: 'go', name: 'Go', year: 2009, decade: '2000s', category: 'Programming Language', description: 'Google\'s systems programming language', majorEvent: 'Cloud infrastructure scales massively' },
  { id: 'rust', name: 'Rust', year: 2010, decade: '2010s', category: 'Programming Language', description: 'Memory-safe systems programming language', majorEvent: 'Security and performance become paramount' },
  { id: 'elasticsearch', name: 'Elasticsearch', year: 2010, decade: '2010s', category: 'Search Engine', description: 'Distributed search and analytics engine', majorEvent: 'Big data analytics becomes mainstream' },
  { id: 'express', name: 'Express.js', year: 2010, decade: '2010s', category: 'Web Framework', description: 'Minimalist Node.js web framework', majorEvent: 'API-first development emerges' },
  { id: 'hibernate', name: 'Hibernate', year: 2001, decade: '2010s', category: 'ORM Framework', description: 'Object-relational mapping for Java', majorEvent: 'Database abstraction layers mature' },
  { id: 'maven', name: 'Apache Maven', year: 2004, decade: '2010s', category: 'Build Tool', description: 'Java project management tool', majorEvent: 'Build automation becomes standard' },
  { id: 'gradle', name: 'Gradle', year: 2008, decade: '2010s', category: 'Build Tool', description: 'Flexible build automation system', majorEvent: 'Build systems become more sophisticated' },
  { id: 'webpack', name: 'Webpack', year: 2012, decade: '2010s', category: 'Module Bundler', description: 'JavaScript module bundler', majorEvent: 'Frontend build tooling matures' },
  { id: 'babel', name: 'Babel', year: 2014, decade: '2010s', category: 'JavaScript Compiler', description: 'JavaScript transpiler', majorEvent: 'Modern JavaScript features adopted widely' },
  { id: 'eslint', name: 'ESLint', year: 2013, decade: '2010s', category: 'Linter', description: 'JavaScript code linting tool', majorEvent: 'Code quality tools become essential' },
  { id: 'jest', name: 'Jest', year: 2014, decade: '2010s', category: 'Testing Framework', description: 'JavaScript testing framework', majorEvent: 'Test-driven development becomes standard' },

  // 2020s - LLM and AI Revolution
  { id: 'transformer', name: 'Transformer Architecture', year: 2017, decade: '2020s', category: 'Neural Network Architecture', description: 'Attention-based architecture', majorEvent: 'Foundation for modern LLMs established' },
  { id: 'bert', name: 'BERT', year: 2018, decade: '2020s', category: 'Language Model', description: 'Bidirectional Encoder Representations from Transformers', majorEvent: 'Pre-trained language models breakthrough' },
  { id: 'gpt1', name: 'GPT-1', year: 2018, decade: '2020s', category: 'Language Model', description: 'First Generative Pre-trained Transformer', majorEvent: 'Generative language modeling advances' },
  { id: 'gpt2', name: 'GPT-2', year: 2019, decade: '2020s', category: 'Language Model', description: '1.5B parameter language model', majorEvent: 'OpenAI initially withholds release due to concerns' },
  { id: 'gpt3', name: 'GPT-3', year: 2020, decade: '2020s', category: 'Language Model', description: '175B parameter language model', majorEvent: 'Large language models demonstrate emergent abilities' },
  { id: 'gpt4', name: 'GPT-4', year: 2023, decade: '2020s', category: 'Language Model', description: 'Multimodal large language model', majorEvent: 'AI achieves human-level performance on many tasks' },
  { id: 'chatgpt', name: 'ChatGPT', year: 2022, decade: '2020s', category: 'AI Assistant', description: 'Conversational AI based on GPT-3.5', majorEvent: 'AI chatbots go mainstream, 100M users in 2 months' },
  { id: 'claude', name: 'Claude', year: 2022, decade: '2020s', category: 'AI Assistant', description: 'Constitutional AI assistant by Anthropic', majorEvent: 'Safe AI development becomes priority' },
  { id: 'palm', name: 'PaLM', year: 2022, decade: '2020s', category: 'Language Model', description: 'Google\'s 540B parameter Pathways Language Model', majorEvent: 'Scale of language models continues growing' },
  { id: 'lamda', name: 'LaMDA', year: 2021, decade: '2020s', category: 'Language Model', description: 'Google\'s Language Model for Dialogue Applications', majorEvent: 'Conversational AI becomes more natural' },
  { id: 'codex', name: 'Codex', year: 2021, decade: '2020s', category: 'Code Generation Model', description: 'GPT model fine-tuned for code', majorEvent: 'AI-assisted programming becomes viable' },
  { id: 'github-copilot', name: 'GitHub Copilot', year: 2021, decade: '2020s', category: 'AI Programming Assistant', description: 'AI pair programmer powered by Codex', majorEvent: 'AI transforms software development workflow' },
  { id: 'dall-e', name: 'DALL-E', year: 2021, decade: '2020s', category: 'Image Generation Model', description: 'Text-to-image generation model', majorEvent: 'AI art generation goes mainstream' },
  { id: 'dall-e-2', name: 'DALL-E 2', year: 2022, decade: '2020s', category: 'Image Generation Model', description: 'Improved text-to-image model', majorEvent: 'AI-generated images become indistinguishable from human art' },
  { id: 'midjourney', name: 'Midjourney', year: 2022, decade: '2020s', category: 'Image Generation Tool', description: 'AI art generation platform', majorEvent: 'Creative industries disrupted by AI art' },
  { id: 'stable-diffusion', name: 'Stable Diffusion', year: 2022, decade: '2020s', category: 'Image Generation Model', description: 'Open-source text-to-image model', majorEvent: 'Democratization of AI image generation' },
  { id: 'whisper', name: 'Whisper', year: 2022, decade: '2020s', category: 'Speech Recognition Model', description: 'OpenAI\'s robust speech recognition system', majorEvent: 'Near-human speech recognition accuracy achieved' },
  { id: 'flamingo', name: 'Flamingo', year: 2022, decade: '2020s', category: 'Multimodal Model', description: 'DeepMind\'s few-shot learning model', majorEvent: 'Multimodal AI understanding advances' },
  { id: 'chinchilla', name: 'Chinchilla', year: 2022, decade: '2020s', category: 'Language Model', description: '70B parameter model that outperforms larger models', majorEvent: 'Efficient scaling laws for language models discovered' },
  { id: 'alpaca', name: 'Stanford Alpaca', year: 2023, decade: '2020s', category: 'Language Model', description: 'Fine-tuned LLaMA model for instruction following', majorEvent: 'Open-source instruction-following models emerge' },
  { id: 'llama', name: 'LLaMA', year: 2023, decade: '2020s', category: 'Language Model', description: 'Meta\'s Large Language Model Meta AI', majorEvent: 'Open foundation models compete with closed systems' },
  { id: 'llama2', name: 'LLaMA 2', year: 2023, decade: '2020s', category: 'Language Model', description: 'Meta\'s improved open-source language model', majorEvent: 'Commercial-use open models challenge proprietary systems' },
  { id: 'vicuna', name: 'Vicuna', year: 2023, decade: '2020s', category: 'Language Model', description: 'Open-source chatbot trained by fine-tuning LLaMA', majorEvent: 'Community-driven AI development accelerates' },
  { id: 'palm2', name: 'PaLM 2', year: 2023, decade: '2020s', category: 'Language Model', description: 'Google\'s improved language model', majorEvent: 'Tech giants compete in LLM capabilities' },
  { id: 'bard', name: 'Google Bard', year: 2023, decade: '2020s', category: 'AI Assistant', description: 'Google\'s conversational AI service', majorEvent: 'Search giants enter chatbot competition' },
  { id: 'bing-chat', name: 'Bing Chat', year: 2023, decade: '2020s', category: 'AI Assistant', description: 'Microsoft\'s GPT-powered search assistant', majorEvent: 'AI integration transforms web search' },
  { id: 'anthropic-constitutional-ai', name: 'Constitutional AI', year: 2022, decade: '2020s', category: 'AI Safety Method', description: 'Training method for harmless and helpful AI', majorEvent: 'AI alignment research becomes critical' },
  { id: 'rlhf', name: 'RLHF (Reinforcement Learning from Human Feedback)', year: 2017, decade: '2020s', category: 'AI Training Method', description: 'Method to align AI with human preferences', majorEvent: 'Human feedback loops improve AI behavior' },
  { id: 'instruct-gpt', name: 'InstructGPT', year: 2022, decade: '2020s', category: 'Language Model', description: 'GPT model trained with human feedback', majorEvent: 'Instruction-following capabilities dramatically improve' },
  { id: 'chain-of-thought', name: 'Chain-of-Thought Prompting', year: 2022, decade: '2020s', category: 'AI Technique', description: 'Prompting technique for complex reasoning', majorEvent: 'AI reasoning capabilities significantly enhanced' },
  { id: 'few-shot-learning', name: 'Few-Shot Learning', year: 2020, decade: '2020s', category: 'AI Technique', description: 'Learning from minimal examples', majorEvent: 'AI adaptability without retraining demonstrated' },
  { id: 'langchain', name: 'LangChain', year: 2022, decade: '2020s', category: 'AI Development Framework', description: 'Framework for developing LLM applications', majorEvent: 'LLM application development ecosystem emerges' },
  { id: 'auto-gpt', name: 'Auto-GPT', year: 2023, decade: '2020s', category: 'AI Agent', description: 'Autonomous GPT-4 agent', majorEvent: 'Autonomous AI agents capture public imagination' },
  { id: 'chatgpt-plugins', name: 'ChatGPT Plugins', year: 2023, decade: '2020s', category: 'AI Extension System', description: 'Plugin system for extending ChatGPT capabilities', majorEvent: 'AI becomes extensible platform' },
  { id: 'gpt4-turbo', name: 'GPT-4 Turbo', year: 2023, decade: '2020s', category: 'Language Model', description: 'Faster, cheaper version of GPT-4', majorEvent: 'AI models become more accessible and efficient' },
  { id: 'gemini', name: 'Google Gemini', year: 2023, decade: '2020s', category: 'Language Model', description: 'Google\'s most capable AI model', majorEvent: 'Multimodal AI capabilities advance significantly' },
  { id: 'sora', name: 'Sora', year: 2024, decade: '2020s', category: 'Video Generation Model', description: 'OpenAI\'s text-to-video generation model', majorEvent: 'AI video generation reaches new quality levels' },
  { id: 'devin', name: 'Devin', year: 2024, decade: '2020s', category: 'AI Software Engineer', description: 'First AI software engineer', majorEvent: 'AI agents begin replacing knowledge workers' },
  { id: 'claude-3', name: 'Claude 3', year: 2024, decade: '2020s', category: 'Language Model', description: 'Anthropic\'s most advanced AI model family', majorEvent: 'AI safety and capability advance together' },
  { id: 'grok', name: 'Grok', year: 2023, decade: '2020s', category: 'AI Assistant', description: 'xAI\'s conversational AI with real-time information', majorEvent: 'Real-time AI information access becomes standard' },
  { id: 'mistral', name: 'Mistral 7B', year: 2023, decade: '2020s', category: 'Language Model', description: 'High-performance open-source language model', majorEvent: 'European AI companies challenge US dominance' },
  { id: 'mixtral', name: 'Mixtral 8x7B', year: 2023, decade: '2020s', category: 'Language Model', description: 'Sparse mixture-of-experts language model', majorEvent: 'Mixture of experts architectures gain popularity' },
  { id: 'hugging-face', name: 'Hugging Face Transformers', year: 2018, decade: '2020s', category: 'AI Library', description: 'Open-source library for NLP models', majorEvent: 'Democratic access to state-of-the-art AI models' },
  { id: 'openai-api', name: 'OpenAI API', year: 2020, decade: '2020s', category: 'AI Service', description: 'API access to GPT models', majorEvent: 'AI-as-a-service business model emerges' },
  { id: 'replicate', name: 'Replicate', year: 2019, decade: '2020s', category: 'AI Platform', description: 'Platform for running AI models in the cloud', majorEvent: 'AI model deployment becomes accessible' },
  { id: 'wandb', name: 'Weights & Biases', year: 2017, decade: '2020s', category: 'MLOps Platform', description: 'Machine learning experiment tracking', majorEvent: 'MLOps tools become essential for AI development' },
  { id: 'mlflow', name: 'MLflow', year: 2018, decade: '2020s', category: 'MLOps Platform', description: 'Open source ML lifecycle management', majorEvent: 'ML lifecycle management becomes standardized' },
  { id: 'ray', name: 'Ray', year: 2017, decade: '2020s', category: 'Distributed AI Framework', description: 'Distributed computing framework for AI', majorEvent: 'Distributed AI training becomes accessible' },
  { id: 'jax', name: 'JAX', year: 2018, decade: '2020s', category: 'AI Framework', description: 'NumPy-compatible library for machine learning', majorEvent: 'Functional programming approaches in AI gain traction' },
  { id: 'flutter', name: 'Flutter', year: 2017, decade: '2020s', category: 'Mobile Framework', description: 'Cross-platform UI toolkit', majorEvent: 'COVID-19 accelerates digital transformation globally' },
  { id: 'graphql', name: 'GraphQL', year: 2015, decade: '2020s', category: 'Query Language', description: 'API query language', majorEvent: 'API-first development becomes standard' },
  { id: 'tensorflow', name: 'TensorFlow', year: 2015, decade: '2020s', category: 'Machine Learning', description: 'ML framework', majorEvent: 'AI revolution transforms every industry' },
  { id: 'pytorch', name: 'PyTorch', year: 2016, decade: '2020s', category: 'Machine Learning', description: 'Deep learning framework', majorEvent: 'Machine learning democratizes globally' },
  { id: 'livewire', name: 'Laravel Livewire', year: 2020, decade: '2020s', category: 'PHP Framework', description: 'Full-stack framework for Laravel', majorEvent: 'Full-stack PHP development renaissance' },
  { id: 'inertia', name: 'Inertia.js', year: 2019, decade: '2020s', category: 'Full-Stack Framework', description: 'Modern monolith approach', majorEvent: 'SPAs meet server-side rendering' },
  { id: 'htmx', name: 'HTMX', year: 2020, decade: '2020s', category: 'JavaScript Library', description: 'HTML-driven interactivity', majorEvent: 'HTML-first development resurges' },
  { id: 'alpine', name: 'Alpine.js', year: 2019, decade: '2020s', category: 'JavaScript Framework', description: 'Minimal framework for HTML enhancement', majorEvent: 'Lightweight alternatives gain popularity' },
  { id: 'pinia', name: 'Pinia', year: 2019, decade: '2020s', category: 'Vue State Management', description: 'Vue 3 state management library', majorEvent: 'Modern state management patterns emerge' },
  { id: 'zustand', name: 'Zustand', year: 2019, decade: '2020s', category: 'React State Management', description: 'Simple React state management', majorEvent: 'Simplified state management gains popularity' },
  { id: 'jotai', name: 'Jotai', year: 2020, decade: '2020s', category: 'React State Management', description: 'Atomic state management for React', majorEvent: 'Fine-grained reactivity becomes focus' },
  { id: 'trpc', name: 'tRPC', year: 2020, decade: '2020s', category: 'API Framework', description: 'End-to-end typesafe APIs', majorEvent: 'Type safety extends across full stack' },
  { id: 'fresh', name: 'Fresh', year: 2022, decade: '2020s', category: 'Deno Framework', description: 'Full-stack web framework for Deno', majorEvent: 'Alternative runtimes gain traction' },
  { id: 'sveltekit', name: 'SvelteKit', year: 2021, decade: '2020s', category: 'Svelte Framework', description: 'Full-stack Svelte framework', majorEvent: 'Meta-frameworks become standard' },
  { id: 'nextjs', name: 'Next.js', year: 2016, decade: '2020s', category: 'React Framework', description: 'Full-stack React framework', majorEvent: 'JAMstack architecture gains popularity' },
  { id: 'nuxt', name: 'Nuxt.js', year: 2016, decade: '2020s', category: 'Vue Framework', description: 'Universal Vue.js framework', majorEvent: 'Server-side rendering becomes standard' },
  { id: 'gatsby', name: 'Gatsby', year: 2015, decade: '2020s', category: 'Static Site Generator', description: 'React-based static site generator', majorEvent: 'Static site renaissance begins' },
  { id: 'svelte', name: 'Svelte', year: 2016, decade: '2020s', category: 'JavaScript Framework', description: 'Compile-time optimized framework', majorEvent: 'Build-time optimization becomes focus' },
  { id: 'lit', name: 'Lit', year: 2017, decade: '2020s', category: 'Web Components Library', description: 'Fast and lightweight web components', majorEvent: 'Web Components standard matures' },
  { id: 'solidjs', name: 'Solid.js', year: 2021, decade: '2020s', category: 'JavaScript Framework', description: 'Fine-grained reactive framework', majorEvent: 'Performance-focused frameworks emerge' },
  { id: 'remix', name: 'Remix', year: 2021, decade: '2020s', category: 'React Framework', description: 'Full-stack web framework', majorEvent: 'Web fundamentals approach resurges' },
  { id: 'qwik', name: 'Qwik', year: 2021, decade: '2020s', category: 'JavaScript Framework', description: 'Resumable web framework', majorEvent: 'Instant loading becomes priority' },
  { id: 'deno', name: 'Deno', year: 2020, decade: '2020s', category: 'Runtime', description: 'Secure TypeScript/JavaScript runtime', majorEvent: 'Security-first development practices emerge' },
  { id: 'typescript', name: 'TypeScript', year: 2012, decade: '2020s', category: 'Programming Language', description: 'Typed superset of JavaScript', majorEvent: 'Type safety becomes critical in large codebases' },
  { id: 'postcss', name: 'PostCSS', year: 2013, decade: '2020s', category: 'CSS Tool', description: 'CSS transformation tool', majorEvent: 'CSS tooling becomes modular and plugin-based' },
  { id: 'tailwind', name: 'Tailwind CSS', year: 2017, decade: '2020s', category: 'CSS Framework', description: 'Utility-first CSS framework', majorEvent: 'Developer productivity tools proliferate' },
  { id: 'unocss', name: 'UnoCSS', year: 2021, decade: '2020s', category: 'CSS Framework', description: 'Instant on-demand atomic CSS engine', majorEvent: 'Build-time CSS optimization becomes priority' },
  { id: 'windicss', name: 'Windi CSS', year: 2020, decade: '2020s', category: 'CSS Framework', description: 'Next generation utility-first CSS framework', majorEvent: 'Faster build times drive framework innovation' },
  { id: 'open-props', name: 'Open Props', year: 2021, decade: '2020s', category: 'CSS Framework', description: 'CSS custom properties framework', majorEvent: 'CSS custom properties become widely adopted' },
  { id: 'pico-css', name: 'Pico.css', year: 2019, decade: '2020s', category: 'CSS Framework', description: 'Minimal CSS framework for semantic HTML', majorEvent: 'Semantic HTML approaches resurge' },
  { id: 'water-css', name: 'Water.css', year: 2019, decade: '2020s', category: 'CSS Framework', description: 'Drop-in collection of CSS styles', majorEvent: 'No-class CSS frameworks gain popularity' },
  { id: 'primer', name: 'Primer CSS', year: 2016, decade: '2020s', category: 'CSS Framework', description: 'GitHub\'s design system', majorEvent: 'Design systems become open source' },
  { id: 'carbon', name: 'Carbon Design System', year: 2016, decade: '2020s', category: 'CSS Framework', description: 'IBM\'s design system', majorEvent: 'Enterprise design systems proliferate' },
  { id: 'atlassian', name: 'Atlassian Design System', year: 2017, decade: '2020s', category: 'CSS Framework', description: 'Atlassian\'s design language', majorEvent: 'Company-specific design systems emerge' },
  { id: 'fluent-ui', name: 'Fluent UI', year: 2020, decade: '2020s', category: 'CSS Framework', description: 'Microsoft\'s design system', majorEvent: 'Cross-platform design systems standardize' },
  { id: 'styled-components', name: 'styled-components', year: 2016, decade: '2020s', category: 'CSS-in-JS Library', description: 'CSS-in-JS styling library', majorEvent: 'Component-scoped styling becomes popular' },
  { id: 'emotion', name: 'Emotion', year: 2017, decade: '2020s', category: 'CSS-in-JS Library', description: 'Performant CSS-in-JS library', majorEvent: 'CSS-in-JS ecosystem matures' },
  { id: 'chakra-ui', name: 'Chakra UI', year: 2019, decade: '2020s', category: 'React UI Library', description: 'Simple and accessible component library', majorEvent: 'Accessibility becomes design system priority' },
  { id: 'material-ui', name: 'Material-UI (MUI)', year: 2014, decade: '2020s', category: 'React UI Library', description: 'React Material Design components', majorEvent: 'Design systems become standard' },
  { id: 'ant-design', name: 'Ant Design', year: 2015, decade: '2020s', category: 'React UI Library', description: 'Enterprise design language and components', majorEvent: 'Enterprise UI libraries proliferate' },
  { id: 'jamstack', name: 'JAMstack', year: 2015, decade: '2020s', category: 'Architecture', description: 'JavaScript, APIs, and Markup stack', majorEvent: 'Static site generators become sophisticated' },
  { id: 'webassembly', name: 'WebAssembly', year: 2017, decade: '2020s', category: 'Runtime', description: 'Binary instruction format for web', majorEvent: 'High-performance web applications emerge' },
  { id: 'prisma', name: 'Prisma', year: 2016, decade: '2020s', category: 'Database Toolkit', description: 'Type-safe database toolkit', majorEvent: 'Developer experience in databases improves' },
  { id: 'serverless', name: 'AWS Lambda', year: 2014, decade: '2020s', category: 'Serverless Computing', description: 'Function-as-a-service platform', majorEvent: 'Serverless architecture becomes mainstream' },
  { id: 'istio', name: 'Istio', year: 2017, decade: '2020s', category: 'Service Mesh', description: 'Service mesh platform', majorEvent: 'Service mesh architecture becomes standard' },
  { id: 'linkerd', name: 'Linkerd', year: 2016, decade: '2020s', category: 'Service Mesh', description: 'Lightweight service mesh', majorEvent: 'Microservices communication becomes sophisticated' },
  { id: 'envoy', name: 'Envoy Proxy', year: 2016, decade: '2020s', category: 'Proxy', description: 'Cloud-native high-performance proxy', majorEvent: 'Modern load balancing and proxying emerge' },
  { id: 'argo', name: 'Argo CD', year: 2018, decade: '2020s', category: 'GitOps', description: 'Declarative GitOps continuous delivery', majorEvent: 'GitOps becomes standard deployment practice' },
  { id: 'flux', name: 'Flux', year: 2016, decade: '2020s', category: 'GitOps', description: 'GitOps operator for Kubernetes', majorEvent: 'Git-driven infrastructure management emerges' },
  { id: 'tekton', name: 'Tekton', year: 2019, decade: '2020s', category: 'CI/CD', description: 'Kubernetes-native CI/CD building blocks', majorEvent: 'Cloud-native CI/CD pipelines standardize' },
  { id: 'github-actions', name: 'GitHub Actions', year: 2018, decade: '2020s', category: 'CI/CD', description: 'GitHub-integrated automation platform', majorEvent: 'Git-integrated CI/CD becomes standard' },
  { id: 'pulumi', name: 'Pulumi', year: 2017, decade: '2020s', category: 'Infrastructure as Code', description: 'Modern infrastructure as code', majorEvent: 'Programming languages enter infrastructure' },
  { id: 'crossplane', name: 'Crossplane', year: 2018, decade: '2020s', category: 'Infrastructure as Code', description: 'Kubernetes-based infrastructure management', majorEvent: 'Kubernetes becomes infrastructure control plane' },
  { id: 'cdk', name: 'AWS CDK', year: 2019, decade: '2020s', category: 'Infrastructure as Code', description: 'Cloud Development Kit', majorEvent: 'Cloud-native infrastructure tooling matures' },
  { id: 'cdktf', name: 'CDK for Terraform', year: 2020, decade: '2020s', category: 'Infrastructure as Code', description: 'Define infrastructure using familiar languages', majorEvent: 'Infrastructure as code becomes more accessible' },
  { id: 'knative', name: 'Knative', year: 2018, decade: '2020s', category: 'Serverless Platform', description: 'Kubernetes-based serverless platform', majorEvent: 'Serverless on Kubernetes becomes viable' },
  { id: 'openshift', name: 'Red Hat OpenShift', year: 2011, decade: '2020s', category: 'Container Platform', description: 'Enterprise Kubernetes platform', majorEvent: 'Enterprise Kubernetes platforms mature' },
  { id: 'rancher', name: 'Rancher', year: 2014, decade: '2020s', category: 'Container Management', description: 'Kubernetes management platform', majorEvent: 'Kubernetes management complexity drives tooling' },
  { id: 'jaeger', name: 'Jaeger', year: 2017, decade: '2020s', category: 'Distributed Tracing', description: 'Distributed tracing platform', majorEvent: 'Observability becomes critical for microservices' },
  { id: 'zipkin', name: 'Zipkin', year: 2012, decade: '2020s', category: 'Distributed Tracing', description: 'Distributed tracing system', majorEvent: 'Request tracing becomes essential' },
  { id: 'otel', name: 'OpenTelemetry', year: 2019, decade: '2020s', category: 'Observability', description: 'Observability framework', majorEvent: 'Observability standardization emerges' },
  { id: 'falco', name: 'Falco', year: 2016, decade: '2020s', category: 'Security', description: 'Runtime security monitoring', majorEvent: 'Container security becomes priority' },
  { id: 'opa', name: 'Open Policy Agent', year: 2016, decade: '2020s', category: 'Policy Engine', description: 'Policy-based control framework', majorEvent: 'Policy as code becomes standard' },
  { id: 'gatekeeper', name: 'Gatekeeper', year: 2019, decade: '2020s', category: 'Policy Engine', description: 'Kubernetes admission controller', majorEvent: 'Kubernetes policy enforcement matures' },
  { id: 'vite', name: 'Vite', year: 2020, decade: '2020s', category: 'Build Tool', description: 'Fast frontend build tool', majorEvent: 'Developer experience optimization accelerates' },
  { id: 'shadcn', name: 'shadcn/ui', year: 2023, decade: '2020s', category: 'UI Library', description: 'Copy-paste React component library', majorEvent: 'AI-assisted development becomes common' },
  { id: 'astro', name: 'Astro', year: 2021, decade: '2020s', category: 'Static Site Generator', description: 'Multi-framework static site builder', majorEvent: 'Island architecture for better performance' },
  { id: 'cypress', name: 'Cypress', year: 2017, decade: '2020s', category: 'Testing Framework', description: 'End-to-end testing framework', majorEvent: 'Quality assurance automation advances' },
];

export const historicalEvents = {
  '1950s': [
    { year: 1957, event: 'Sputnik launches Space Race', icon: 'Rocket' },
    { year: 1958, event: 'NASA established in response to Soviet space achievements', icon: 'Globe' },
    { year: 1959, event: 'Alaska and Hawaii become US states', icon: 'Flag' }
  ],
  
  '1960s': [
    { year: 1963, event: 'JFK Assassination shocks the world', icon: 'AlertCircle' },
    { year: 1964, event: 'Beatles arrive in America, "Beatlemania" sweeps globe', icon: 'Music' },
    { year: 1965, event: 'Vietnam War escalates with first US combat troops', icon: 'Shield' },
    { year: 1968, event: 'Martin Luther King Jr. assassinated', icon: 'Heart' },
    { year: 1968, event: 'Paris Student Riots spark global youth movement', icon: 'Users' },
    { year: 1969, event: 'Moon Landing - "One small step for man"', icon: 'Rocket' },
    { year: 1969, event: 'Woodstock Festival defines counterculture', icon: 'Music' }
  ],
  
  '1970s': [
    { year: 1970, event: 'Kent State shootings shock America', icon: 'AlertTriangle' },
    { year: 1972, event: 'Watergate break-in begins political scandal', icon: 'Eye' },
    { year: 1973, event: 'Oil Crisis quadruples gas prices overnight', icon: 'Fuel' },
    { year: 1974, event: 'Nixon becomes first US President to resign', icon: 'UserX' },
    { year: 1975, event: 'Vietnam War ends with fall of Saigon', icon: 'Flag' },
    { year: 1977, event: 'Star Wars premieres, creates modern blockbuster', icon: 'Star' },
    { year: 1979, event: 'Iran hostage crisis begins 444-day ordeal', icon: 'Lock' }
  ],
  
  '1980s': [
    { year: 1980, event: 'John Lennon shot and killed in NYC', icon: 'Music' },
    { year: 1981, event: 'MTV launches with "Video Killed the Radio Star"', icon: 'Tv' },
    { year: 1982, event: 'Falklands War between UK and Argentina', icon: 'Sword' },
    { year: 1983, event: 'Reagan announces Strategic Defense Initiative', icon: 'Shield' },
    { year: 1984, event: 'Apple\'s "1984" Super Bowl ad launches Macintosh', icon: 'Monitor' },
    { year: 1985, event: 'Live Aid concerts raise funds for African famine', icon: 'Heart' },
    { year: 1986, event: 'Chernobyl nuclear disaster', icon: 'AlertTriangle' },
    { year: 1986, event: 'Challenger space shuttle explodes', icon: 'AlertCircle' },
    { year: 1987, event: 'Black Monday stock market crash', icon: 'TrendingDown' },
    { year: 1989, event: 'Berlin Wall falls, Cold War ends', icon: 'Hammer' },
    { year: 1989, event: 'Tiananmen Square protests in China', icon: 'Users' }
  ],
  
  '1990s': [
    { year: 1991, event: 'Gulf War begins with Operation Desert Storm', icon: 'Target' },
    { year: 1991, event: 'Soviet Union collapses, ending Cold War era', icon: 'Flag' },
    { year: 1992, event: 'Los Angeles riots follow Rodney King verdict', icon: 'Flame' },
    { year: 1993, event: 'World Trade Center bombing (first attack)', icon: 'AlertTriangle' },
    { year: 1994, event: 'Nelson Mandela elected President of South Africa', icon: 'Crown' },
    { year: 1994, event: 'Rwanda genocide kills 800,000', icon: 'AlertCircle' },
    { year: 1995, event: 'Oklahoma City bombing shocks America', icon: 'Building' },
    { year: 1995, event: 'OJ Simpson trial captivates nation', icon: 'Scale' },
    { year: 1996, event: 'Mad Cow Disease crisis hits Europe', icon: 'AlertTriangle' },
    { year: 1997, event: 'Princess Diana dies in Paris car crash', icon: 'Heart' },
    { year: 1998, event: 'Monica Lewinsky scandal rocks Clinton presidency', icon: 'Eye' },
    { year: 1999, event: 'Columbine High School shooting', icon: 'AlertCircle' },
    { year: 1999, event: 'Y2K fears grip the world', icon: 'Clock' }
  ],
  
  '2000s': [
    { year: 2000, event: 'Y2K passes without major disasters', icon: 'CheckCircle' },
    { year: 2001, event: '9/11 attacks change the world forever', icon: 'AlertTriangle' },
    { year: 2002, event: 'Enron scandal exposes corporate corruption', icon: 'DollarSign' },
    { year: 2003, event: 'Iraq War begins with "Shock and Awe"', icon: 'Target' },
    { year: 2004, event: 'Facebook launches from Harvard dorm room', icon: 'Users' },
    { year: 2004, event: 'Indian Ocean tsunami kills 230,000', icon: 'Waves' },
    { year: 2005, event: 'Hurricane Katrina devastates New Orleans', icon: 'CloudRain' },
    { year: 2005, event: 'YouTube founded, video sharing begins', icon: 'Video' },
    { year: 2006, event: 'Twitter launches, microblogging born', icon: 'MessageCircle' },
    { year: 2007, event: 'iPhone released, smartphone revolution begins', icon: 'Smartphone' },
    { year: 2008, event: 'Barack Obama elected first Black US President', icon: 'Crown' },
    { year: 2008, event: 'Global Financial Crisis, Lehman Brothers collapses', icon: 'TrendingDown' },
    { year: 2009, event: 'Michael Jackson dies, world mourns', icon: 'Music' }
  ],
  
  '2010s': [
    { year: 2010, event: 'Haiti earthquake kills over 200,000', icon: 'AlertTriangle' },
    { year: 2010, event: 'iPad launches tablet computing era', icon: 'Tablet' },
    { year: 2011, event: 'Arab Spring revolutions sweep Middle East', icon: 'Users' },
    { year: 2011, event: 'Osama bin Laden killed by Navy SEALs', icon: 'Target' },
    { year: 2011, event: 'Fukushima nuclear disaster after tsunami', icon: 'Zap' },
    { year: 2012, event: 'Sandy Hook Elementary School shooting', icon: 'AlertCircle' },
    { year: 2012, event: 'London Olympics showcase British culture', icon: 'Award' },
    { year: 2013, event: 'Edward Snowden reveals NSA surveillance', icon: 'Eye' },
    { year: 2014, event: 'Russia annexes Crimea, tensions rise', icon: 'Globe' },
    { year: 2014, event: 'Ebola outbreak spreads fear globally', icon: 'AlertTriangle' },
    { year: 2015, event: 'Paris attacks by ISIS terrorists', icon: 'AlertCircle' },
    { year: 2015, event: 'Marriage equality legalized in United States', icon: 'Heart' },
    { year: 2016, event: 'Brexit vote shocks EU and UK', icon: 'Vote' },
    { year: 2016, event: 'Donald Trump elected US President', icon: 'Crown' },
    { year: 2017, event: '#MeToo movement goes viral', icon: 'Users' },
    { year: 2018, event: 'Parkland shooting sparks gun control debates', icon: 'AlertCircle' },
    { year: 2019, event: 'Notre-Dame Cathedral fire devastates Paris', icon: 'Flame' },
    { year: 2019, event: 'Hong Kong protests against China', icon: 'Users' }
  ],
  
  '2020s': [
    { year: 2020, event: 'COVID-19 pandemic shuts down the world', icon: 'Shield' },
    { year: 2020, event: 'George Floyd killing sparks global protests', icon: 'Users' },
    { year: 2020, event: 'Joe Biden wins contentious US election', icon: 'Vote' },
    { year: 2021, event: 'January 6 Capitol insurrection', icon: 'AlertTriangle' },
    { year: 2021, event: 'Taliban retakes Afghanistan as US withdraws', icon: 'Flag' },
    { year: 2021, event: 'Ever Given ship blocks Suez Canal', icon: 'Ship' },
    { year: 2022, event: 'Russia invades Ukraine, war begins', icon: 'Sword' },
    { year: 2022, event: 'Queen Elizabeth II dies after 70-year reign', icon: 'Crown' },
    { year: 2022, event: 'Elon Musk buys Twitter for $44 billion', icon: 'DollarSign' },
    { year: 2023, event: 'ChatGPT launches AI revolution', icon: 'Brain' },
    { year: 2023, event: 'Turkey-Syria earthquakes kill 50,000+', icon: 'AlertTriangle' },
    { year: 2024, event: 'Israel-Hamas war escalates in Gaza', icon: 'AlertCircle' },
    { year: 2025, event: 'TikTok faces potential US ban', icon: 'Ban' }
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

// Helper to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Map to track assigned events for each year in a session
const assignedEventsMap: Record<string, Record<number, Set<string>>> = {};

export const getHistoricalEventForYear = (decade: string, year: number, techId?: string) => {
  // Find all events for the year
  let events = historicalEvents[decade]?.filter(e => e.year === year) || [];
  if (events.length === 0) {
    // Try to find the correct decade for the year
    const decadeKey = Object.keys(historicalEvents).find(d => {
      const start = parseInt(d.slice(0, 4), 10);
      return year >= start && year < start + 10;
    });
    if (decadeKey) {
      events = historicalEvents[decadeKey]?.filter(e => e.year === year) || [];
    }
  }
  if (events.length === 0) return null;

  // Track assigned events for this decade/year
  if (!assignedEventsMap[decade]) assignedEventsMap[decade] = {};
  if (!assignedEventsMap[decade][year]) assignedEventsMap[decade][year] = new Set();

  // Try to assign a distinct event for this tech
  const unassigned = events.filter(e => !assignedEventsMap[decade][year].has(e.event));
  let chosenEvent;
  if (unassigned.length > 0) {
    chosenEvent = shuffleArray(unassigned)[0];
  } else {
    // If all events are assigned, allow reuse (random)
    chosenEvent = shuffleArray(events)[0];
  }
  if (chosenEvent) assignedEventsMap[decade][year].add(chosenEvent.event);
  return chosenEvent;
};

export const getDecadeForYear = (year: number): string | null => {
  const decades = Object.keys(historicalEvents);
  for (const decade of decades) {
    const start = parseInt(decade.slice(0, 4), 10);
    if (year >= start && year < start + 10) {
      return decade;
    }
  }
  return null;
};