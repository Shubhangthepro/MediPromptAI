import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Share2, 
  Eye,
  Calendar,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Search,
  Filter
} from 'lucide-react';

interface Report {
  id: string;
  title: string;
  date: Date;
  type: 'blood_test' | 'imaging' | 'symptom_analysis' | 'general';
  riskLevel: 'low' | 'medium' | 'high';
  summary: string;
  keyFindings: string[];
  status: 'completed' | 'processing' | 'pending_review';
}

const ReportsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterRisk, setFilterRisk] = useState('all');

  const mockReports: Report[] = [
    {
      id: '1',
      title: 'Complete Blood Count Analysis',
      date: new Date('2024-01-15'),
      type: 'blood_test',
      riskLevel: 'medium',
      summary: 'Elevated white blood cell count detected with slightly high glucose levels.',
      keyFindings: ['Elevated WBC: 12,500/μL', 'Glucose: 125 mg/dL', 'Normal kidney function'],
      status: 'completed'
    },
    {
      id: '2',
      title: 'Chest X-Ray Report',
      date: new Date('2024-01-10'),
      type: 'imaging',
      riskLevel: 'low',
      summary: 'Clear lung fields with no abnormalities detected.',
      keyFindings: ['Clear lung fields', 'Normal heart size', 'No acute findings'],
      status: 'completed'
    },
    {
      id: '3',
      title: 'Symptom Analysis - Fatigue',
      date: new Date('2024-01-08'),
      type: 'symptom_analysis',
      riskLevel: 'medium',
      summary: 'Chronic fatigue symptoms analyzed with possible thyroid involvement.',
      keyFindings: ['Persistent fatigue', 'Sleep disturbances', 'Possible thyroid dysfunction'],
      status: 'completed'
    },
    {
      id: '4',
      title: 'Annual Physical Report',
      date: new Date('2024-01-05'),
      type: 'general',
      riskLevel: 'low',
      summary: 'Overall health assessment shows good general condition.',
      keyFindings: ['Normal vital signs', 'BMI within range', 'No acute concerns'],
      status: 'completed'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blood_test': return '🩸';
      case 'imaging': return '📷';
      case 'symptom_analysis': return '🔍';
      default: return '📋';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blood_test': return 'Blood Test';
      case 'imaging': return 'Imaging';
      case 'symptom_analysis': return 'Symptom Analysis';
      default: return 'General Report';
    }
  };

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'processing': return 'text-blue-600 bg-blue-100';
      case 'pending_review': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || report.type === filterType;
    const matchesRisk = filterRisk === 'all' || report.riskLevel === filterRisk;
    
    return matchesSearch && matchesType && matchesRisk;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Medical Reports
          </h1>
          <p className="text-lg text-slate-600">
            View and manage your AI-generated health analysis reports
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="blood_test">Blood Tests</option>
                <option value="imaging">Imaging</option>
                <option value="symptom_analysis">Symptom Analysis</option>
                <option value="general">General</option>
              </select>

              <select
                value={filterRisk}
                onChange={(e) => setFilterRisk(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Risk Levels</option>
                <option value="low">Low Risk</option>
                <option value="medium">Medium Risk</option>
                <option value="high">High Risk</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Reports', value: '24', icon: FileText, color: 'text-blue-600' },
            { label: 'This Month', value: '4', icon: Calendar, color: 'text-green-600' },
            { label: 'High Priority', value: '2', icon: AlertTriangle, color: 'text-red-600' },
            { label: 'Avg. Analysis Time', value: '3.2s', icon: Clock, color: 'text-purple-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {filteredReports.map((report, index) => {
            const RiskIcon = getRiskIcon(report.riskLevel);
            
            return (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Report Info */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{getTypeIcon(report.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-slate-900">{report.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                            {report.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{report.date.toLocaleDateString()}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{getTypeLabel(report.type)}</span>
                          </span>
                          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${getRiskColor(report.riskLevel)}`}>
                            <RiskIcon className="h-3 w-3" />
                            <span className="text-xs font-medium capitalize">{report.riskLevel} Risk</span>
                          </div>
                        </div>

                        <p className="text-slate-700 mb-3">{report.summary}</p>

                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-900">Key Findings:</p>
                          <ul className="text-sm text-slate-600 space-y-1">
                            {report.keyFindings.slice(0, 2).map((finding, i) => (
                              <li key={i} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                <span>{finding}</span>
                              </li>
                            ))}
                            {report.keyFindings.length > 2 && (
                              <li className="text-blue-600 text-sm">
                                +{report.keyFindings.length - 2} more findings
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-row lg:flex-col gap-3">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Eye className="h-4 w-4" />
                      <span>View</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No reports found</h3>
            <p className="text-slate-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ReportsPage;