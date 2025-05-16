import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const AIAssistant = () => {
  const { toast } = useToast();
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI resume assistant powered by Groq. How can I help you with your resume today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Get Groq API key from environment variables
      const apiKey = import.meta.env.VITE_GROQ_API;
      
      if (!apiKey) {
        throw new Error("Groq API key is missing");
      }

      // Prepare conversation history for the API
      const conversationHistory = messages.map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content
      }));

      // Add the new user message
      conversationHistory.push({
        role: "user",
        content: userMessage.content
      });

      // System prompt to guide the AI assistant
      const systemPrompt = {
        role: "system",
        content: `You are a professional resume assistant with expertise in career development, resume writing, and job applications.
        
Your goal is to help users create impressive resumes that stand out to employers and pass ATS systems.

Guidelines:
- Provide specific, actionable advice tailored to the user's industry and experience level
- Suggest concrete examples and improvements for resume sections
- Be concise but thorough in your explanations
- Focus on modern resume best practices and ATS optimization
- Maintain a professional, supportive, and encouraging tone
- When appropriate, explain the reasoning behind your suggestions
- Help with formatting, content, structure, and language improvements
- Provide industry-specific advice when relevant

Remember that your advice can significantly impact someone's career opportunities, so be thoughtful and precise.`
      };

      // Make API request to Groq
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "compound-beta",
          messages: [systemPrompt, ...conversationHistory],
          temperature: 0.7,
          max_tokens: 1000
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to get response from Groq API");
      }

      const data = await response.json();
      const assistantResponse = data.choices[0]?.message?.content || "Sorry, I couldn't generate a response. Please try again.";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: assistantResponse,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling Groq API:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get AI response",
        variant: "destructive",
      });

      // Fallback message in case of error
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I encountered an error while processing your request. Please try again later.",
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedPrompts = [
    "How can I improve my resume?",
    "What skills should I highlight for a software developer role?",
    "How do I explain employment gaps?",
    "Tips for writing a strong summary section",
    "How to make my resume ATS-friendly?",
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">AI Resume Assistant</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="h-[calc(100vh-12rem)]">
              <CardHeader>
                <CardTitle>Chat with AI Assistant</CardTitle>
                <CardDescription>
                  Get personalized help with your resume using Groq's compound-beta model
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-[calc(100%-8rem)]">
                <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex max-w-[80%] ${
                          message.sender === "user" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <Avatar className={`h-8 w-8 ${message.sender === "user" ? "ml-2" : "mr-2"}`}>
                          {message.sender === "assistant" ? (
                            <AvatarImage src="/chat.png" alt="AI" />
                          ) : (
                            <AvatarFallback>U</AvatarFallback>
                          )}
                        </Avatar>
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === "user"
                              ? "bg-primary text-white"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src="/ai.png" alt="AI" />
                        </Avatar>
                        <div className="rounded-lg p-3 bg-gray-100 text-gray-800">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-end">
                  <Textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message here..."
                    className="flex-1 resize-none"
                    rows={3}
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="ml-2 h-10"
                    disabled={!inputMessage.trim() || isLoading}
                  >
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Suggested Prompts</CardTitle>
                <CardDescription>
                  Try asking these questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {suggestedPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-2 px-3"
                    onClick={() => {
                      setInputMessage(prompt);
                    }}
                  >
                    {prompt}
                  </Button>
                ))}
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>AI Assistant Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Resume Analysis</h3>
                  <p className="text-sm text-gray-500">
                    Get feedback on your existing resume
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Content Suggestions</h3>
                  <p className="text-sm text-gray-500">
                    Improve your resume sections with AI-powered suggestions
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Job-Specific Tailoring</h3>
                  <p className="text-sm text-gray-500">
                    Customize your resume for specific job applications
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">ATS Optimization</h3>
                  <p className="text-sm text-gray-500">
                    Make your resume more ATS-friendly
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIAssistant;
