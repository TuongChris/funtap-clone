import { DropdownWithFade } from "@/components/Dropdowns/DropdownWithFade";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  CreditCard,
  HelpCircle,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";

const DropdownNotification = () => {
  const [notificationCount, setNotificationCount] = useState(3);

  const userMenuItems = [
    {
      label: "Profile",
      icon: <User className="h-4 w-4" />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      label: "Billing",
      icon: <CreditCard className="h-4 w-4" />,
      onClick: () => console.log("Billing clicked"),
    },
    "separator",
    {
      label: "Help & Support",
      icon: <HelpCircle className="h-4 w-4" />,
      onClick: () => console.log("Help clicked"),
    },
    "separator",
    {
      label: "Logout",
      icon: <LogOut className="h-4 w-4" />,
      onClick: () => console.log("Logout clicked"),
      destructive: true,
    },
  ];

  return (
    <div className="flex gap-4 p-8">
      <DropdownWithFade
        trigger={
          <Button variant="outline" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            User Menu
            <ChevronDown className="h-4 w-4" />
          </Button>
        }
        items={userMenuItems}
        label="john.doe@example.com"
      />
    </div>
  );
};

export default DropdownNotification;
