import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Clock,
  Radar,
  Smartphone,
  Calendar,
  Lightbulb,
  Wifi,
  Battery,
  Shield,
  Play,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Star,
  Check,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Focus,
  Pause,
  RotateCcw,
  Home,
  Target,
  Settings
} from 'lucide-react';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : systemTheme;
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const features = [
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Custom Focus + Break Cycles",
      description: "Set your own focus & break times or use Pomodoro presets. Quick adjust with the rotary knob & buttons."
    },
    {
      icon: <Radar className="w-6 h-6" />,
      title: "Auto-Pause Presence Sensing",
      description: "Built-in 24 GHz mmWave pauses when you leave, resumes when you return—only true focus time is logged."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "App Sync + Habit Tracking",
      description: "Sync sessions to Google/Apple Calendar; track streaks, completion %, interruptions, and goals."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Distraction-Hiding Mobile App",
      description: "iOS Focus Modes and Android allow-lists keep only essential apps visible while you work (opt-in)."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "LED Flag + Night Mode",
      description: "Green focus, orange break, red busy. Gentle night light with dimming."
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Phone-Optional",
      description: "Works offline; stores 60–90 days of history; syncs later."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Twist & Start",
      description: "Simple rotary knob and large digits make starting a session effortless.",
      icon: <Focus className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Auto-pause on leave",
      description: "mmWave sensor detects when you step away and pauses automatically.",
      icon: <Pause className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Sync & review",
      description: "Sessions sync to calendar and apps. Review insights and build habits.",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  const specs = [
    { label: "MCU", value: "ESP32-WROOM-32 (Wi-Fi/BLE)", icon: <Zap className="w-5 h-5" /> },
    { label: "Display", value: "3.2″ SPI TFT (dimmable)", icon: <Monitor className="w-5 h-5" /> },
    { label: "Controls", value: "Rotary encoder + 2 buttons", icon: <RotateCcw className="w-5 h-5" /> },
    { label: "Presence", value: "24 GHz mmWave", icon: <Radar className="w-5 h-5" /> },
    { label: "Audio", value: "Buzzer chimes (volume/mute)", icon: <Volume2 className="w-5 h-5" /> },
    { label: "LED", value: "RGB flag (focus/break/DND/away)", icon: <Lightbulb className="w-5 h-5" /> },
    { label: "Power", value: "USB-C; optional 18650 battery", icon: <Battery className="w-5 h-5" /> },
    { label: "Storage", value: "60–90 days on-device", icon: <HardDrive className="w-5 h-5" /> }
  ];

  const perks = [
    {
      title: "Super Early Bird",
      subtitle: "35% off MSRP",
      price: "$79",
      originalPrice: "$119",
      includes: ["FocusBuddy device", "USB-C cable", "Quick-start guide"],
      badge: "Limited Quantity",
      isPopular: false
    },
    {
      title: "Early Bird",
      subtitle: "25% off MSRP",
      price: "$89", 
      originalPrice: "$119",
      includes: ["Device + USB-C cable", "Soft carry pouch", "Quick-start guide"],
      badge: null,
      isPopular: true
    },
    {
      title: "FocusBuddy Duo",
      subtitle: "2-Pack",
      price: "$169",
      originalPrice: "$238", 
      includes: ["2× devices (mix colors)", "2× cables", "2× pouches"],
      badge: "Save for you + a friend",
      isPopular: false
    },
    {
      title: "Pro Set",
      subtitle: "Everything included",
      price: "$119",
      originalPrice: "$149",
      includes: ["Device + extra knob cap", "Spare cable", "Premium pouch", "Priority support"],
      badge: null,
      isPopular: false
    }
  ];

  const timeline = [
    { month: "M0–1", milestone: "EVT prototypes" },
    { month: "M2", milestone: "DVT & enclosure" },
    { month: "M3", milestone: "Certifications & app beta" },
    { month: "M4", milestone: "PVT & lock firmware" },
    { month: "M5", milestone: "Mass production" },
    { month: "M6", milestone: "Ship" }
  ];

  const faqs = [
    {
      question: "Does FocusBuddy work without the app?",
      answer: "Yes. You can start/stop sessions and see progress on the device. The app adds sync, habits, insights, and distraction controls."
    },
    {
      question: "Will it truly block my distracting apps?",
      answer: "iOS: we trigger Focus Modes + Screen Time limits (official, safe). Android: allow-lists and DND using Accessibility/Usage Access. We don't use shady workarounds."
    },
    {
      question: "Can I disable the sensor?",
      answer: "Yes. You can turn presence sensing off or set grace periods to avoid false pauses."
    },
    {
      question: "Battery or plug-in?",
      answer: "Both. It runs great on USB-C; with a 3,500 mAh battery you can expect ~14–17 h active screen-on (longer with dimming/duty cycling)."
    },
    {
      question: "Will you support Teams?",
      answer: "Yes—shared dashboards and team bundles are planned after v1."
    },
    {
      question: "What about privacy and data export?",
      answer: "Local-first design; cloud sync is opt-in; export data anytime (CSV/ICS). We respect your privacy and data ownership."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-width section-padding">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-focus-green rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">FocusBuddy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-focus-green transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium hover:text-focus-green transition-colors">
                How it Works
              </button>
              <button onClick={() => scrollToSection('specs')} className="text-sm font-medium hover:text-focus-green transition-colors">
                Specs
              </button>
              <button onClick={() => scrollToSection('perks')} className="text-sm font-medium hover:text-focus-green transition-colors">
                Perks
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-focus-green transition-colors">
                FAQ
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => scrollToSection('perks')}
                className="hidden sm:inline-flex items-center px-4 py-2 bg-focus-green text-white rounded-lg hover:bg-focus-green/90 transition-colors"
              >
                Get FocusBuddy
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('features')} className="text-left text-sm font-medium hover:text-focus-green transition-colors">
                  Features
                </button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-left text-sm font-medium hover:text-focus-green transition-colors">
                  How it Works
                </button>
                <button onClick={() => scrollToSection('specs')} className="text-left text-sm font-medium hover:text-focus-green transition-colors">
                  Specs
                </button>
                <button onClick={() => scrollToSection('perks')} className="text-left text-sm font-medium hover:text-focus-green transition-colors">
                  Perks
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-sm font-medium hover:text-focus-green transition-colors">
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection('perks')}
                  className="inline-flex items-center justify-center px-4 py-2 bg-focus-green text-white rounded-lg hover:bg-focus-green/90 transition-colors w-full"
                >
                  Get FocusBuddy
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container-width section-padding py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  FocusBuddy: The Smart Productivity Timer for{' '}
                  <span className="gradient-text">Deep Work & Balance</span>
                </h1>
                <p className="text-lg text-muted-foreground text-balance max-w-xl">
                  Auto-pause presence sensing, app sync, LED signals — phone-optional focus that only tracks true work time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('perks')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-focus-green text-white rounded-lg hover:bg-focus-green/90 transition-colors text-lg font-medium"
                >
                  Get FocusBuddy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors text-lg font-medium">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Bar */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-focus-green text-focus-green" />
                  <span className="font-medium">4.8/5</span>
                </div>
                <span>Featured on TechCrunch</span>
                <span>Y Combinator</span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                {/* Actual FocusBuddy device */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc84913c58ceb44cab7b4f494aa13eb36%2Fe81b9aa8d70c46aabafb55df0af07212?format=webp&width=800"
                    alt="FocusBuddy Smart Productivity Timer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Feature callouts */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg p-3 text-xs font-medium shadow-lg max-w-40">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-focus-green rounded-full"></div>
                    <span>Live presence sensing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-info-teal rounded-full"></div>
                    <span>Auto-pause on leave</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg p-3 text-xs font-medium shadow-lg">
                  <div className="flex items-center space-x-2">
                    <RotateCcw className="w-3 h-3" />
                    <span>Rotary control</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 bg-muted/50">
        <div className="container-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-balance">The Problem</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-busy-red rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Phones, pings, and meetings shred attention into useless fragments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-busy-red rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Existing timers keep running while you're away, logging fake focus time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-busy-red rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Building consistent focus habits feels impossible with unreliable tools</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-balance">The Solution</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-focus-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Presence sensing captures only authentic focus time, auto-pausing when you leave</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-focus-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Desk-first design with app sync and distraction controls you can trust</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-focus-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Build sustainable habits with accurate tracking and meaningful insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for Real Focus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to protect your attention and build lasting productivity habits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-focus-green/10 rounded-lg flex items-center justify-center mb-4 text-focus-green">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/50">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to effortless focus tracking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-focus-green rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold mb-2 text-focus-green">Step {step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="container-width section-padding">
          <h2 className="text-3xl font-bold text-center mb-12">See FocusBuddy in Action</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Dark Device Hero", caption: "Premium matte finish in charcoal" },
              { title: "Light Device Variant", caption: "Clean aesthetic for any workspace" },
              { title: "Side Angle View", caption: "Rotary knob and button controls" },
              { title: "Screen Close-up", caption: "Large, glanceable focus display" },
              { title: "LED Flag States", caption: "Green focus, orange break, red busy" },
              { title: "Lifestyle Desk Shot", caption: "Perfect companion for deep work" }
            ].map((item, index) => (
              <div key={index} className="aspect-video bg-muted rounded-xl overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-charcoal/10 to-graphite/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-lg font-medium mb-2">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.caption}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Features */}
      <section className="py-20 bg-muted/50">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Complete Mobile Companion</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five powerful tabs that transform your phone into a focus command center — with app blocking, habit tracking, and seamless device control.
            </p>
          </div>

          {/* 5-Tab Overview */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { name: 'Home', icon: <Home className="w-6 h-6" />, desc: 'Dashboard & quick start' },
              { name: 'Timer', icon: <Clock className="w-6 h-6" />, desc: 'Remote control & presets' },
              { name: 'Habits', icon: <Target className="w-6 h-6" />, desc: 'Goals & streaks' },
              { name: 'Insights', icon: <BarChart3 className="w-6 h-6" />, desc: 'Stats & analytics' },
              { name: 'Device', icon: <Settings className="w-6 h-6" />, desc: 'Hardware & integrations' }
            ].map((tab, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-focus-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-focus-green">
                  {tab.icon}
                </div>
                <h3 className="font-semibold mb-2">{tab.name}</h3>
                <p className="text-sm text-muted-foreground">{tab.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <Smartphone className="w-5 h-5 text-focus-green" />
                    <span>Smart Phone Integration</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">iOS Focus Modes</span>
                        <p className="text-sm text-muted-foreground">Automatically triggers Screen Time limits and hides distracting apps</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Android App Blocking</span>
                        <p className="text-sm text-muted-foreground">Create allow-lists and DND modes using official Accessibility APIs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Emergency Bypass</span>
                        <p className="text-sm text-muted-foreground">30-second unlock for urgent access — always safe and reversible</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-focus-green" />
                    <span>Calendar & Task Integration</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Auto-Schedule Focus Blocks</span>
                        <p className="text-sm text-muted-foreground">Google/Apple Calendar integration with meeting awareness</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Task App Sync</span>
                        <p className="text-sm text-muted-foreground">Connect to Todoist, Asana, Notion — link sessions to specific tasks</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Auto-DND Mode</span>
                        <p className="text-sm text-muted-foreground">Quiet notifications during focus blocks and meetings</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <Target className="w-5 h-5 text-focus-green" />
                    <span>Habit Building & Analytics</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Smart Insights</span>
                        <p className="text-sm text-muted-foreground">Peak focus hours, completion rates, interruption patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Guided Programs</span>
                        <p className="text-sm text-muted-foreground">14-day Deep Work challenges, Thesis Sprint routines</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Streak Tracking</span>
                        <p className="text-sm text-muted-foreground">Visual calendar heatmap, badges, and weekly goal progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { screen: 'Home Dashboard', features: ['Current status', 'Quick presets', 'Today summary', 'Calendar preview'] },
                { screen: 'Timer Remote', features: ['Device control', 'Custom presets', 'Presence settings', 'LED & audio'] },
                { screen: 'Habits & Goals', features: ['Weekly targets', 'Streak calendar', 'Guided programs', 'Achievement badges'] },
                { screen: 'Insights & Stats', features: ['Focus analytics', 'Peak hours', 'Session history', 'Export data'] }
              ].map((app, index) => (
                <div key={index} className="aspect-[9/16] bg-card border rounded-2xl p-4 hover:shadow-lg transition-shadow">
                  <div className="h-full flex flex-col">
                    <div className="text-center mb-4">
                      <Smartphone className="w-8 h-8 text-focus-green mx-auto mb-2" />
                      <div className="text-sm font-semibold">{app.screen}</div>
                    </div>
                    <div className="space-y-2 flex-1">
                      {app.features.map((feature, i) => (
                        <div key={i} className="text-xs text-muted-foreground flex items-center space-x-1">
                          <div className="w-1 h-1 bg-focus-green rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section id="specs" className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-lg text-muted-foreground">
              Carefully engineered for reliability and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-card border rounded-lg">
                <div className="text-focus-green">{spec.icon}</div>
                <div className="flex-1">
                  <div className="font-medium">{spec.label}</div>
                  <div className="text-sm text-muted-foreground">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Planned certifications: FCC/CE/RoHS • Specs may evolve during engineering validation
            </p>
          </div>
        </div>
      </section>

      {/* Perks/Pricing */}
      <section id="perks" className="py-20 bg-muted/50">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Early Bird Perks</h2>
            <p className="text-lg text-muted-foreground">
              Be first to focus smarter. Limited quantities at special pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <div key={index} className={cn(
                "bg-card border rounded-xl p-6 relative",
                perk.isPopular && "border-focus-green shadow-lg scale-105"
              )}>
                {perk.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-focus-green text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      {perk.badge}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-1">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{perk.subtitle}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold">{perk.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{perk.originalPrice}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {perk.includes.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm">
                      <Check className="w-4 h-4 text-focus-green flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button className={cn(
                  "w-full py-3 rounded-lg font-medium transition-colors",
                  perk.isPopular 
                    ? "bg-focus-green text-white hover:bg-focus-green/90"
                    : "border border-border hover:bg-muted"
                )}>
                  Back this perk
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Development Timeline</h2>
            <p className="text-lg text-muted-foreground">
              Realistic milestones with monthly updates
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-focus-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="text-sm font-medium mb-1">{item.month}</div>
                  <div className="text-xs text-muted-foreground">{item.milestone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted/50">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about FocusBuddy
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <ChevronDown className={cn(
                    "w-5 h-5 transition-transform",
                    openFaq === index && "rotate-180"
                  )} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container-width section-padding py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-focus-green rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">FocusBuddy</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The smart productivity timer for deep work & balance.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button onClick={() => scrollToSection('features')} className="block hover:text-foreground transition-colors">Features</button>
                <button onClick={() => scrollToSection('specs')} className="block hover:text-foreground transition-colors">Specifications</button>
                <button onClick={() => scrollToSection('perks')} className="block hover:text-foreground transition-colors">Pricing</button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button onClick={() => scrollToSection('faq')} className="block hover:text-foreground transition-colors">FAQ</button>
                <a href="#" className="block hover:text-foreground transition-colors">Contact</a>
                <a href="#" className="block hover:text-foreground transition-colors">Press Kit</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background"
                />
                <button className="px-4 py-2 bg-focus-green text-white rounded-lg hover:bg-focus-green/90 transition-colors text-sm">
                  Join
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Early-bird pricing and exclusive updates
              </p>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 FocusBuddy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Missing icon components for specs
function Monitor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="14" x="2" y="3" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}

function Volume2({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  );
}

function HardDrive({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="12" x2="2" y2="12"/>
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
      <line x1="6" y1="16" x2="6.01" y2="16"/>
      <line x1="10" y1="16" x2="10.01" y2="16"/>
    </svg>
  );
}
