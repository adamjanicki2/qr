import Button from "@adamjanicki/ui/components/Button";
import { useRef } from "react";
import "src/components/basic/button.css";

type DefaultButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type FileUploadProps = Omit<DefaultButtonProps, "onClick" | "ref"> & {
  onImageChange: (file: File) => void | Promise<void>;
  accept?: string;
};

export const FileUpload = ({
  onImageChange,
  accept,
  ...props
}: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onImageChange(file);
          }
        }}
        style={{ display: "none" }}
        accept={accept}
      />
      <Button {...props} onClick={() => inputRef.current?.click()} />
    </>
  );
};
