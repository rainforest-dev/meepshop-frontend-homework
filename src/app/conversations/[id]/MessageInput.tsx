"use client";

import NextImage from "next/image";
import {
  type ChangeEventHandler,
  type FormEventHandler,
  useRef,
  useState,
} from "react";

import { useAppSelector } from "@/store/hooks";
import { useCreateMessageMutation } from "@/store/services";
import { selectUserId } from "@/store/slices";
import { imageToBase64 } from "@/utils";

interface IProps {
  prefix: string;
  conversationId: number;
}

export default function MessageInput({ prefix, conversationId }: IProps) {
  const userId = useAppSelector(selectUserId);
  const [sendMessage, { isLoading }] = useCreateMessageMutation();
  const ref = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const isDisabled = !userId || isLoading;

  const handleMessageChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMessage(e.target.value);
  };

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      const image = await imageToBase64(file);
      setImage(image);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!userId) return;
    const messages = [];
    const formData = new FormData(e.target as HTMLFormElement);
    const image = formData.get("image") as File;
    console.log(image);
    if (image && image.type.startsWith("image/")) {
      const message = await imageToBase64(image);
      const res = await sendMessage({
        conversationId,
        userId,
        messageType: "image",
        message,
      });
      if (res.data) messages.push(res.data);
    }
    const message = formData.get("message") as string;
    if (message) {
      const res = await sendMessage({
        conversationId,
        userId,
        messageType: "text",
        message,
      });
      if (res.data) messages.push(res.data);
    }
    setMessage("");
    setImage(null);
    ref.current?.reset();
  };

  return (
    <form ref={ref} className="flex items-end gap-2" onSubmit={handleSubmit}>
      <label
        htmlFor={`${prefix}-image`}
        className="flex-center hover:bg-primary/10 hover:border-primary hover:text-primary aspect-square min-w-10 cursor-pointer rounded border"
      >
        +
        <input
          type="file"
          id={`${prefix}-image`}
          name="image"
          accept="image/*"
          className="sr-only"
          onChange={handleImageChange}
        />
      </label>
      <div className="w-full">
        {image && (
          <NextImage
            src={image}
            width={300}
            height={300}
            alt="image"
            className="mb-2 object-cover"
          />
        )}
        <input
          type="text"
          name="message"
          className="focus:outline-primary w-full rounded border p-2"
          placeholder="Type a message"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-on-primary hover:bg-primary/80 disabled:bg-primary/10 cursor-pointer rounded px-3 py-2 disabled:cursor-not-allowed"
        disabled={isDisabled}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
