import { Animated, Icon } from "@adamjanicki/ui";
import UIAlert from "@adamjanicki/ui/components/Alert";
import {
  checkCircle,
  infoCircle,
  minusCircle,
  warningCircle,
  xCircle,
} from "@adamjanicki/ui/icons";
import { useEffect, useState } from "react";
import { useAlert } from "src/hooks";

const TYPE_TO_ICON = {
  success: checkCircle,
  error: xCircle,
  warning: warningCircle,
  info: infoCircle,
  static: minusCircle,
} as const;

const Alert = () => {
  const { alert } = useAlert();
  const [cachedAlert, setCachedAlert] = useState(alert);

  useEffect(() => {
    if (alert) {
      setCachedAlert(alert);
    }
  }, [alert]);

  const visible = Boolean(alert);
  const alertToRender = alert || cachedAlert;

  return (
    <Animated
      visible={visible}
      vfx={{ pos: "fixed", z: "max" }}
      from={{ opacity: 0, bottom: 16 }}
      to={{ opacity: 1, bottom: 32 }}
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      {!alertToRender ? null : (
        <UIAlert
          type={alertToRender.type}
          vfx={{ axis: "x", align: "center", gap: "s", width: "max" }}
        >
          <Icon size="s" icon={TYPE_TO_ICON[alertToRender.type]} />
          {alertToRender.message}
        </UIAlert>
      )}
    </Animated>
  );
};

export default Alert;
