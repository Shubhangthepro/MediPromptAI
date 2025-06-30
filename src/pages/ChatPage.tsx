import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Brain, 
  User, 
  Clock,
  Lightbulb,
  AlertCircle,
  Heart
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm Dr. AI, your medical assistant. I can help you understand your health reports, explain medical terms, and provide general health guidance. How can I assist you today?",
      timestamp: new Date(),
      suggestions: [
        "Explain my blood test results",
        "What does elevated glucose mean?",
        "How can I improve my heart health?",
        "Symptoms of diabetes"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('glucose') || lowerMessage.includes('blood sugar')) {
      return "Elevated glucose levels (above 100 mg/dL fasting) may indicate pre-diabetes or diabetes risk. Normal fasting glucose is 70-99 mg/dL. I recommend:\n\n• Monitor your diet, focusing on complex carbohydrates\n• Regular physical activity\n• Stay hydrated\n• Consult your doctor for proper evaluation\n\nWould you like specific dietary recommendations?";
    }
    
    if (lowerMessage.includes('blood pressure') || lowerMessage.includes('hypertension')) {
      return "Blood pressure readings consist of two numbers:\n\n• **Systolic** (top number): Pressure when heart beats\n• **Diastolic** (bottom number): Pressure when heart rests\n\n**Normal ranges:**\n• Normal: Less than 120/80 mmHg\n• Elevated: 120-129/<80 mmHg\n• High: 130/80 mmHg or higher\n\nLifestyle changes like reducing sodium, exercising, and managing stress can help.";
    }
    
    if (lowerMessage.includes('heart') || lowerMessage.includes('cardiac')) {
      return "Heart health is crucial for overall wellbeing. Key indicators include:\n\n• **Heart Rate**: 60-100 bpm at rest\n• **Blood Pressure**: <120/80 mmHg\n• **Cholesterol**: <200 mg/dL total\n\n**Tips for heart health:**\n• Regular cardiovascular exercise\n• Heart-healthy diet (Mediterranean style)\n• Manage stress and get adequate sleep\n• Avoid smoking and limit alcohol\n\nAny specific heart-related concerns?";
    }
    
    if (lowerMessage.includes('cholesterol')) {
      return "Cholesterol levels and their meanings:\n\n**Total Cholesterol:**\n• Desirable: <200 mg/dL\n• Borderline high: 200-239 mg/dL\n• High: ≥240 mg/dL\n\n**LDL (Bad cholesterol):** <100 mg/dL\n**HDL (Good cholesterol):** ≥40 mg/dL (men), ≥50 mg/dL (women)\n\nHigh cholesterol increases heart disease risk. Diet changes and exercise can help significantly.";
    }
    
    return "I understand your concern about " + userMessage + ". While I can provide general health information, please remember that I cannot replace professional medical advice. For specific health concerns, especially if you're experiencing symptoms, please consult with a healthcare provider.\n\nIs there a specific aspect of your health or lab results you'd like me to explain?";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-200 h-[600px] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Dr. AI Assistant</h1>
              <p className="text-blue-100 text-sm">Ask me about your health reports and medical concerns</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {/* Avatar */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-blue-600' 
                    : 'bg-gradient-to-r from-green-500 to-teal-600'
                }`}>
                  {message.type === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Brain className="h-4 w-4 text-white" />
                  )}
                </div>

                {/* Message Content */}
                <div className={`rounded-2xl p-4 ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-900'
                }`}>
                  <p className="whitespace-pre-line">{message.content}</p>
                  
                  {/* Timestamp */}
                  <div className={`flex items-center space-x-1 mt-2 text-xs ${
                    message.type === 'user' ? 'text-blue-100' : 'text-slate-500'
                  }`}>
                    <Clock className="h-3 w-3" />
                    <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>

                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-slate-600 mb-2">Quick questions you can ask:</p>
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="block w-full text-left p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm text-slate-700"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <div className="bg-slate-100 rounded-2xl p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-slate-200 p-6">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about your health, symptoms, or medical reports..."
                className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                disabled={isTyping}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 flex items-start space-x-2 text-xs text-slate-500">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>
              This AI assistant provides general health information only. Always consult healthcare professionals for medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatPage;