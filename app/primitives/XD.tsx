"use client";

import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Button } from "@ui/Button";

import useNotification from "../../features/notifications/use-notification";

export default function XD() {
  const { setNotification } = useNotification();

  return (
    <>
      <Button
        onClick={() =>
          setNotification({
            title: "Guardado con éxito!",
            content: "El protocolo guardo exitosamente",
            icon: CheckBadgeIcon,
          })
        }
      >
        Click Me?
      </Button>
    </>
  );
}
