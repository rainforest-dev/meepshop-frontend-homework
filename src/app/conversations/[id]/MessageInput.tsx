"use client";

import { useCreateMessageMutation } from "@/store/services";
import {
  type ChangeEventHandler,
  type FormEventHandler,
  useRef,
  useState,
} from "react";
import NextImage from "next/image";
import { imageToBase64, USER_ID } from "@/utils";

interface IProps {
  conversationId: number;
}

export default function MessageInput({ conversationId }: IProps) {
  const [sendMessage] = useCreateMessageMutation();
  const ref = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleMessageChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMessage(e.target.value);
  };

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      imageToBase64(file).then(setImage);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const messages = [];
    const formData = new FormData(e.target as HTMLFormElement);
    const image = formData.get("image") as File;
    if (image) {
      const message = await imageToBase64(image);
      const res = await sendMessage({
        conversationId,
        userId: USER_ID,
        messageType: "image",
        message,
      });
      if (res.data) messages.push(res.data);
    }
    const message = formData.get("message") as string;
    if (message) {
      const res = await sendMessage({
        conversationId,
        userId: USER_ID,
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
    <form ref={ref} className="flex gap-2 items-end" onSubmit={handleSubmit}>
      <label
        htmlFor="image"
        className="flex-center aspect-square min-w-10 rounded cursor-pointer border hover:bg-primary/10 hover:border-primary hover:text-primary"
      >
        +
        <input
          type="file"
          id="image"
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
            className="object-cover mb-2"
          />
        )}
        <input
          type="text"
          name="message"
          className="w-full p-2 border focus:outline-primary rounded"
          placeholder="Type a message"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <button
        type="submit"
        className="px-3 py-2 rounded cursor-pointer bg-primary text-on-primary hover:bg-primary/80"
      >
        Send
      </button>
    </form>
  );
}
