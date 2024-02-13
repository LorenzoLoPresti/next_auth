import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { Text } from "./text";
import { cn } from "@/lib/utils";

type FormErrorProps = {
  message?: string;
  isSuccess?: boolean;
};

export const FormNotification = ({
  message,
  isSuccess = false,
}: FormErrorProps) => {
  if (!message) return null;

  const classNames = cn(
    "p-3 rounded-md flex items-center gap-x-2 text-sm ",
    isSuccess
      ? "bg-emerald-500/15 text-emerald-500"
      : "bg-destructive/15 text-destructive"
  );

  return (
    <div className={classNames}>
      {isSuccess ? (
        <CheckCircledIcon className="h-4 w-4" />
      ) : (
        <ExclamationTriangleIcon className="h-4 w-4" />
      )}
      <Text
        className={cn(
          isSuccess ? "text-emerald-500 text-sm" : "text-destructive text-sm"
        )}
      >
        {message}
      </Text>
    </div>
  );
};
