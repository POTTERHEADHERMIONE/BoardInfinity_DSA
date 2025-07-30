# Swiggy Releaf 🍃

A modern web and mobile interface for Swiggy's packaging return & rewards platform, specifically designed for busy working professionals and dual-income households.

## ✨ Features

### 🏠 Landing Page
- **Bold Hero Section**: Swiggy-orange and white design with "Less Waste. More Rewards. Perfect for Busy Lives."
- **Modern Illustrations**: Office-goer and Swiggy Genie agent interactions
- **Key Benefits**: Doorstep pickup, auto-scheduling, credit rewards, impact tracking
- **Social Proof**: Testimonials from busy professionals
- **Environmental Impact**: Real-time CO₂ savings tracker

### 🔄 Return Process
- **Recent Orders Display**: Shows eligible containers from recent Swiggy orders
- **1-Tap Auto-Scheduling**: AI picks optimal pickup times based on user patterns
- **Recurring Pickup**: Set weekly pickup schedules
- **Visual Feedback**: Confetti animations and success badges
- **Progress Tracking**: Real-time credit calculation and CO₂ impact

### 🎁 Rewards Dashboard
- **Credits Balance**: Current available Swiggy credits
- **Tier System**: Orange Rookie → Delivery Guardian → Eco Leader
- **Reward Suggestions**: Swiggy One subscriptions, food credits, grocery credits
- **Donation Options**: Support environmental causes with credits
- **Activity Timeline**: Recent transactions and achievements

## 🎨 Design System

### Color Palette
- **Primary**: Swiggy Orange (#FC8019)
- **Secondary**: Eco Green (#4CAF50)
- **Neutral**: White, Light Gray (#F8F9FA), Medium Gray (#E9ECEF)
- **Text**: Swiggy Dark (#282C3F)

### Key Design Principles
- **Mobile-First**: Responsive design optimized for mobile devices
- **3-Tap Maximum**: Fast navigation with minimal user effort
- **Modern Flat Design**: Clean layouts with subtle shadows and gradients
- **Accessibility**: High contrast ratios and clear typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swiggy-releaf
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState)

## 📱 Mobile Optimization

The application is built with a mobile-first approach:

- **Responsive Grid System**: Adapts from mobile (1 column) to desktop (4 columns)
- **Touch-Friendly**: Large tap targets (44px minimum)
- **Fast Loading**: Optimized images and lazy loading
- **Offline Support**: Service worker for basic caching
- **Progressive Web App**: Can be installed on mobile devices

## 🎯 Target Audience

### Primary Users
- **Working Professionals**: Software engineers, managers, consultants
- **Dual-Income Households**: Busy families with limited time
- **Urban Demographics**: Metro cities with high food delivery usage
- **Eco-Conscious**: Environmentally aware but time-constrained

### User Journey
1. **Discovery**: Learn about Swiggy Releaf benefits
2. **Onboarding**: Schedule first container return
3. **Engagement**: Set up recurring pickups
4. **Retention**: Track rewards and environmental impact

## 🔄 User Flow

### Container Return Process
1. **Select Orders**: Choose from recent orders with eligible containers
2. **Auto-Schedule**: AI suggests optimal pickup times
3. **Confirmation**: Visual feedback with pickup details
4. **Collection**: Swiggy Genie picks up containers
5. **Rewards**: Credits added to account automatically

### Rewards Redemption
1. **View Balance**: Check available credits
2. **Browse Options**: Food credits, subscriptions, donations
3. **Redeem**: One-tap redemption process
4. **Confirmation**: Instant application of rewards

## 🌱 Environmental Impact

The platform tracks and displays:
- **CO₂ Emissions Saved**: Real-time calculation based on container types
- **Waste Diverted**: Total packaging returned and recycled
- **Tree Equivalency**: Visual representation of environmental impact
- **Achievement System**: Gamification of eco-friendly behaviors

## 📊 Analytics & Tracking

Key metrics monitored:
- **Return Rate**: Percentage of eligible containers returned
- **User Engagement**: Frequency of app usage
- **Tier Progression**: User advancement through reward tiers
- **Credit Redemption**: Most popular reward categories
- **Environmental Impact**: Aggregate CO₂ savings and waste reduction

## 🔧 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   └── Navbar.jsx      # Navigation component
├── pages/              # Main application pages
│   ├── LandingPage.jsx # Hero section and benefits
│   ├── ReturnProcess.jsx # Container return flow
│   └── RewardsDashboard.jsx # Credits and rewards
├── styles/
│   └── index.css       # Global styles and Tailwind imports
└── App.jsx             # Main application component
```

### Custom Animations
- **Bounce In**: Success feedback animations
- **Fade In**: Page load transitions
- **Slide Up**: Content reveal animations
- **Pulse**: Loading and attention indicators

## 🎨 UI Components

### Interactive Elements
- **Gradient Buttons**: Primary actions with hover effects
- **Card Layouts**: Modern rounded corners with subtle shadows
- **Progress Bars**: Tier advancement and impact tracking
- **Success Modals**: Celebratory animations for completed actions

### Typography
- **Font Family**: Inter (clean, modern, highly legible)
- **Hierarchy**: Clear distinction between headers, body text, and captions
- **Color Contrast**: WCAG AA compliant for accessibility

## 🚀 Performance Optimizations

- **Code Splitting**: Route-based chunks for faster loading
- **Image Optimization**: WebP format with fallbacks
- **CSS Purging**: Unused Tailwind classes removed in production
- **Bundle Analysis**: Monitored build size and dependencies

## 🔒 Security & Privacy

- **Data Protection**: Minimal personal data collection
- **Secure API**: HTTPS-only communication
- **User Consent**: Clear privacy policy and opt-in features
- **Local Storage**: Sensitive data encrypted

## 📈 Future Enhancements

### Planned Features
- **Push Notifications**: Pickup reminders and reward alerts
- **Social Sharing**: Environmental impact achievements
- **Referral Program**: Credits for inviting friends
- **Advanced Analytics**: Detailed carbon footprint reports
- **Gamification**: Badges, streaks, and leaderboards

### Technical Improvements
- **PWA**: Full progressive web app capabilities
- **Offline Mode**: Basic functionality without internet
- **Performance**: Further loading time optimizations
- **Accessibility**: Enhanced screen reader support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Swiggy.

## 📞 Support

For technical support or feature requests:
- Email: releaf-support@swiggy.in
- Documentation: [Internal Wiki]
- Slack: #swiggy-releaf

---

**Built with ❤️ for a sustainable future by the Swiggy Releaf Team**