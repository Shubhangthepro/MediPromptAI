import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Download,
  Share2,
  Clock,
  Heart,
  Activity,
  Thermometer,
  User
} from 'lucide-react';

interface AnalysisResult {
  riskLevel: 'low' | 'medium' | 'high';
  confidence: number;
  findings: string[];
  recommendations: string[];
  emergencyFlag: boolean;
  detectedConditions: Array<{
    condition: string;
    probability: number;
    description: string;
  }>;
  vitals: {
    heartRate?: number;
    bloodPressure?: string;
    temperature?: number;
    glucose?: number;
  };
}

const AnalysisPage: React.FC = () => {
  const location = useLocation();
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    // Simulate AI analysis process
    const timer = setTimeout(() => {
      setIsAnalyzing(false);
      // Generate mock analysis result
      setAnalysisResult({
        riskLevel: 'medium',
        confidence: 87,
        emergencyFlag: false,
        findings: [
          'Elevated white blood cell count detected (12,500/μL)',
          'Slightly elevated glucose levels (125 mg/dL)',
          'Normal kidney function indicators',
          'Hemoglobin levels within normal range'
        ],
        recommendations: [
          'Schedule follow-up with primary care physician within 2 weeks',
          'Monitor blood glucose levels daily for next week',
          'Maintain hydration and adequate rest',
          'Consider dietary consultation for glucose management'
        ],
        detectedConditions: [
          {
            condition: 'Pre-diabetes',
            probability: 72,
            description: 'Elevated glucose suggests early metabolic changes'
          },
          {
            condition: 'Mild inflammation',
            probability: 65,
            description: 'Elevated WBC count may indicate minor inflammatory response'
          }
        ],
        vitals: {
          heartRate: 78,
          bloodPressure: '122/78',
          temperature: 98.6,
          glucose: 125
        }
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low': return CheckCircle;
      case 'medium': return AlertTriangle;
      case 'high': return AlertTriangle;
      default: return CheckCircle;
    }
  };

  if (isAnalyzing) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200"
          >
            <div className="mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Brain className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Analyzing Your Medical Data
              </h2>
              <p className="text-slate-600 mb-8">
                Our AI is processing your information and generating insights...
              </p>
              
              <div className="space-y-3 text-left max-w-md mx-auto">
                {[
                  'Extracting medical data...',
                  'Identifying key indicators...',
                  'Cross-referencing symptoms...',
                  'Generating recommendations...'
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-slate-700">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (!analysisResult) return null;

  const RiskIcon = getRiskIcon(analysisResult.riskLevel);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            AI Analysis Results
          </h1>
          <p className="text-lg text-slate-600">
            Comprehensive health insights based on your uploaded data
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Analysis */}
          <div className="lg:col-span-2 space-y-8">
            {/* Risk Assessment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Risk Assessment</h2>
                <div className={`px-4 py-2 rounded-full flex items-center space-x-2 ${getRiskColor(analysisResult.riskLevel)}`}>
                  <RiskIcon className="h-5 w-5" />
                  <span className="font-semibold capitalize">{analysisResult.riskLevel} Risk</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-700">Confidence Score</span>
                  <span className="font-semibold">{analysisResult.confidence}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${analysisResult.confidence}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full"
                  />
                </div>
              </div>

              {analysisResult.emergencyFlag && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 text-red-800">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-semibold">Emergency Alert</span>
                  </div>
                  <p className="text-red-700 mt-2">
                    Some indicators suggest immediate medical attention may be needed.
                  </p>
                </div>
              )}
            </div>

            {/* Key Findings */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Findings</h2>
              <div className="space-y-4">
                {analysisResult.findings.map((finding, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700">{finding}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Detected Conditions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Potential Conditions</h2>
              <div className="space-y-4">
                {analysisResult.detectedConditions.map((condition, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-slate-900">{condition.condition}</h3>
                      <span className="text-sm font-medium text-blue-600">
                        {condition.probability}% likelihood
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">{condition.description}</p>
                    <div className="mt-3">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${condition.probability}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Recommendations</h2>
              <div className="space-y-4">
                {analysisResult.recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800">{rec}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Vital Signs */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Vital Signs</h3>
              <div className="space-y-4">
                {analysisResult.vitals.heartRate && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-slate-700">Heart Rate</span>
                    </div>
                    <span className="font-semibold">{analysisResult.vitals.heartRate} bpm</span>
                  </div>
                )}
                {analysisResult.vitals.bloodPressure && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-blue-500" />
                      <span className="text-slate-700">Blood Pressure</span>
                    </div>
                    <span className="font-semibold">{analysisResult.vitals.bloodPressure} mmHg</span>
                  </div>
                )}
                {analysisResult.vitals.temperature && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <span className="text-slate-700">Temperature</span>
                    </div>
                    <span className="font-semibold">{analysisResult.vitals.temperature}°F</span>
                  </div>
                )}
                {analysisResult.vitals.glucose && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-purple-500" />
                      <span className="text-slate-700">Glucose</span>
                    </div>
                    <span className="font-semibold">{analysisResult.vitals.glucose} mg/dL</span>
                  </div>
                )}
              </div>
            </div>

            {/* Analysis Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Analysis Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-600">Analyzed: {new Date().toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-600">AI Model: MediPrompt v2.1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-600">Patient ID: Anonymous</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Report</span>
                </button>
                <button className="w-full border-2 border-slate-300 text-slate-700 py-3 px-4 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share Results</span>
                </button>
                <Link
                  to="/chat"
                  className="w-full bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-semibold hover:bg-slate-200 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Brain className="h-4 w-4" />
                  <span>Ask AI Chat</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnalysisPage;