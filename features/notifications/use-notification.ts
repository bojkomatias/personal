import { useContext } from "react"
import { NotificationContext } from "./NotificationContext"

export default function useNotification() {
	const context = useContext(NotificationContext)
	return context
}
