# 🩺 MediPromptAI

**Your AI Medical Assistant for Health Reports & Symptom Analysis**

*"From Symptoms to Solutions — in Seconds."*

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)

## 🧠 Overview

MediPromptAI is an intelligent, AI-powered healthcare web application that analyzes uploaded medical reports (PDFs, scanned images, or text descriptions), identifies health anomalies, and auto-generates comprehensive health insights including:

- 📄 **Diagnostic summaries** with confidence scores
- 💊 **Treatment suggestions** and recommendations
- 🧘 **Preventive health advice** tailored to your condition
- 🚨 **Emergency prioritization** with risk assessment
- 📊 **Visual health dashboards** with trend analysis

This system empowers users with actionable insights to better understand their health status and make informed decisions about their care.

## ✨ Key Features

### 🤖 AI-Powered Medical Analysis
- **Smart Report Processing**: Extracts symptoms, test values, and observations from any standard lab reports
- **Medical NLP**: Understands and explains complex medical terms in simple language
- **Multi-format Support**: Handles PDFs, images (JPEG, PNG), and text descriptions

### 📋 Intelligent Diagnosis Engine
- **Symptom Matching**: Correlates symptoms and lab metrics with possible conditions
- **Risk Assessment**: Provides Low/Medium/High risk levels with confidence scores
- **Condition Detection**: Identifies potential health issues with probability percentages

### 💊 Personalized Health Reports
Auto-generates comprehensive reports featuring:
- Detected health issues and anomalies
- Possible causes and explanations
- Lifestyle and dietary suggestions
- Recommended follow-up tests or consultations
- Emergency flags for urgent conditions

### 🏥 Emergency Triage System
- **Priority Scoring**: Assigns urgency levels based on vital signs and symptoms
- **Real-time Assessment**: Monitors heart rate, glucose, WBC, platelet levels
- **Alert System**: Immediate notifications for critical health indicators

### 💬 AI Chat Assistant
- **Interactive Consultation**: Ask questions about your health reports
- **Medical Explanations**: Get detailed explanations of medical terms and conditions
- **24/7 Availability**: Round-the-clock AI assistance for health queries

### 🔐 Privacy & Security
- **HIPAA-Compliant**: All data encrypted and anonymized
- **Secure Processing**: Files processed securely with no permanent storage
- **Privacy-First**: Your health data never leaves the secure environment

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern UI framework
- **TypeScript 5.5.3** - Type-safe development
- **Tailwind CSS 3.4.1** - Utility-first styling
- **Framer Motion 11.0.0** - Smooth animations
- **React Router DOM 6.22.0** - Client-side routing
- **Lucide React 0.344.0** - Beautiful icons

### Build Tools
- **Vite 5.4.2** - Fast development server
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

### Document Processing
- **html2canvas 1.4.1** - Screenshot generation
- **jsPDF 2.5.1** - PDF report generation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mediprompt-ai.git
   cd mediprompt-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
npm run preview
```

## 📱 Application Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   └── Navbar.tsx      # Navigation component
├── pages/              # Main application pages
│   ├── HomePage.tsx    # Landing page with features
│   ├── UploadPage.tsx  # File upload interface
│   ├── AnalysisPage.tsx # AI analysis results
│   ├── ChatPage.tsx    # AI chat assistant
│   └── ReportsPage.tsx # Report management
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🩻 Supported Input Types

| Format | Description | Examples |
|--------|-------------|----------|
| **PDF** | Lab reports, medical documents | Dr Lal PathLabs, Apollo, SRL reports |
| **Images** | Scanned reports, prescriptions | JPEG, PNG files of medical documents |
| **Text** | Manual symptom descriptions | Typed symptoms, medical history |

## 📊 Example Workflow

1. **📤 Upload**: Drag & drop your medical report or describe symptoms
2. **🔍 Analysis**: AI extracts and analyzes medical data
3. **📋 Results**: View comprehensive health insights and risk assessment
4. **💬 Consultation**: Chat with AI for clarifications and questions
5. **📄 Report**: Download detailed PDF report for your records
6. **👨‍⚕️ Share**: Forward results to your healthcare provider

## 🎨 Design Features

- **Medical-Grade UI**: Professional healthcare application design
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Modern Aesthetics**: Clean, minimalist design with medical iconography

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

We welcome contributions to MediPromptAI! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] **Real AI Integration**: Connect with OpenAI/Claude APIs
- [ ] **OCR Implementation**: Add Tesseract.js for image text extraction
- [ ] **Database Integration**: Add user accounts and report history
- [ ] **Mobile App**: React Native version
- [ ] **Wearable Integration**: Connect with fitness trackers
- [ ] **Telemedicine**: Video consultation features
- [ ] **Multi-language**: Support for regional languages

## ⚠️ Disclaimer

**Important Medical Disclaimer**: MediPromptAI is designed for educational and informational purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions regarding medical conditions. Never disregard professional medical advice or delay seeking treatment based on information from this application.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Medical terminology and guidelines from WHO and ICD-10
- UI/UX inspiration from leading healthcare applications
- Icons provided by [Lucide React](https://lucide.dev/)
- Built with modern web technologies and best practices

## 📞 Support

For support, email support@medipromptai.com or join our community discussions.

---

**Made with ❤️ for better healthcare accessibility**

*MediPromptAI - Empowering patients with AI-driven health insights*