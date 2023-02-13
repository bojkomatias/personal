import { createContext, Dispatch, SetStateAction } from "react";
import { NotificationType } from "./Notification";

export type Context = {
  notification: NotificationType;
  timeout: number;
  setNotification: Dispatch<SetStateAction<NotificationType>>;
};

export const NotificationContext = createContext<Context>(null);
