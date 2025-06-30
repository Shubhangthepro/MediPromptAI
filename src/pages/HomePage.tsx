import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Brain, 
  FileText, 
  Shield, 
  Clock, 
  Users,
  ChevronRight,
  Stethoscope,
  Activity,
  Heart
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your medical reports and identify potential health concerns.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: FileText,
      title: 'Comprehensive Reports',
      description: 'Get detailed health insights with personalized recommendations and treatment suggestions.',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your medical data is encrypted, anonymized, and processed with HIPAA-level security standards.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Receive AI-generated health insights and recommendations within seconds of uploading.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Reports Analyzed', icon: FileText },
    { value: '98%', label: 'Accuracy Rate', icon: Activity },
    { value: '24/7', label: 'AI Assistance', icon: Brain },
    { value: '100%', label: 'HIPAA Secure', icon: Shield }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Stethoscope className="h-4 w-4" />
            <span>AI Medical Assistant</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            From Symptoms to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Solutions
            </span>
            <br />
            <span className="text-2xl md:text-4xl text-slate-600">in Seconds</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Upload your medical reports, get instant AI-powered analysis, and receive personalized 
            health insights with treatment recommendations — all while maintaining complete privacy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/upload"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group"
          >
            <Upload className="h-5 w-5" />
            <span>Upload Report</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/chat"
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
          >
            <Brain className="h-5 w-5" />
            <span>Try AI Chat</span>
          </Link>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Intelligent Health Analysis
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our AI system provides comprehensive medical insights to help you understand 
            your health better and make informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          How It Works
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Get your health insights in three simple steps
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Upload Report', description: 'Upload your medical reports, lab results, or describe symptoms', icon: Upload },
            { step: '02', title: 'AI Analysis', description: 'Our AI analyzes your data and identifies potential health concerns', icon: Brain },
            { step: '03', title: 'Get Insights', description: 'Receive detailed analysis with recommendations and next steps', icon: Heart }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="h-6 w-6 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;