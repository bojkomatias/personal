"use client";
import { ReactNode, useRef, useState } from "react";
import { Notification, NotificationType } from "./Notification";
import { NotificationContext } from "./NotificationContext";

export const Provider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<NotificationType>(null);
  const timeout = 3000;
  return (
    <NotificationContext.Provider
      value={{ notification, timeout, setNotification }}
    >
      <Notification />
      {children}
    </NotificationContext.Provider>
  );
};


