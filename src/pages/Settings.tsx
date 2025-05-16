import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [theme, setTheme] = useState("system");
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      updates: true,
      marketing: false
    },
    privacy: {
      shareData: false,
      publicProfile: true
    },
    appearance: {
      compactView: false,
      darkMode: false
    }
  });

  const handleSettingChange = (category: string, setting: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
  };

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully."
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Manage your general application settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Theme</h3>
                      <p className="text-sm text-gray-500">
                        Select your preferred application theme
                      </p>
                    </div>
                    <Select value={theme} onValueChange={setTheme}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Compact View</h3>
                      <p className="text-sm text-gray-500">
                        Use a more compact layout for the application
                      </p>
                    </div>
                    <Switch 
                      checked={settings.appearance.compactView}
                      onCheckedChange={(checked) => 
                        handleSettingChange("appearance", "compactView", checked)
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Dark Mode</h3>
                      <p className="text-sm text-gray-500">
                        Enable dark mode for the application
                      </p>
                    </div>
                    <Switch 
                      checked={settings.appearance.darkMode}
                      onCheckedChange={(checked) => 
                        handleSettingChange("appearance", "darkMode", checked)
                      }
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Language</h3>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Export & Backup</CardTitle>
                <CardDescription>
                  Export your data or create backups
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Export All Resumes</h3>
                    <p className="text-sm text-gray-500">
                      Download all your resumes as a ZIP file
                    </p>
                  </div>
                  <Button variant="outline">Export</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Create Backup</h3>
                    <p className="text-sm text-gray-500">
                      Create a backup of all your data
                    </p>
                  </div>
                  <Button variant="outline">Backup</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-500">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch 
                      checked={settings.notifications.email}
                      onCheckedChange={(checked) => 
                        handleSettingChange("notifications", "email", checked)
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Push Notifications</h3>
                      <p className="text-sm text-gray-500">
                        Receive push notifications in your browser
                      </p>
                    </div>
                    <Switch 
                      checked={settings.notifications.push}
                      onCheckedChange={(checked) => 
                        handleSettingChange("notifications", "push", checked)
                      }
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <h3 className="text-lg font-medium">Notification Types</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="updates" className="text-base">Product Updates</Label>
                      <p className="text-sm text-gray-500">
                        Receive notifications about new features and updates
                      </p>
                    </div>
                    <Switch 
                      id="updates"
                      checked={settings.notifications.updates}
                      onCheckedChange={(checked) => 
                        handleSettingChange("notifications", "updates", checked)
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing" className="text-base">Marketing</Label>
                      <p className="text-sm text-gray-500">
                        Receive marketing and promotional emails
                      </p>
                    </div>
                    <Switch 
                      id="marketing"
                      checked={settings.notifications.marketing}
                      onCheckedChange={(checked) => 
                        handleSettingChange("notifications", "marketing", checked)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>
                  Manage your privacy preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Data Sharing</h3>
                      <p className="text-sm text-gray-500">
                        Allow anonymous usage data to be shared for product improvement
                      </p>
                    </div>
                    <Switch 
                      checked={settings.privacy.shareData}
                      onCheckedChange={(checked) => 
                        handleSettingChange("privacy", "shareData", checked)
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Public Profile</h3>
                      <p className="text-sm text-gray-500">
                        Make your profile visible to other users
                      </p>
                    </div>
                    <Switch 
                      checked={settings.privacy.publicProfile}
                      onCheckedChange={(checked) => 
                        handleSettingChange("privacy", "publicProfile", checked)
                      }
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Data Management</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">Download My Data</Button>
                    <Button variant="destructive" className="w-full">Delete All Data</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end">
          <Button onClick={handleSave}>Save Settings</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
