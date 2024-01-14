"use client";

import Props from "@/models/props";
import { ReactNode, createContext, useContext, useState } from "react";
import data from "../json/data.json";

type BookmarkContextType = {
  isBookmarked: Props[];
  addBookmark: (bookmark: string) => void;
  removeBookmark: (bookmarkId: string) => void;
};

const bookmarkContextDefault: BookmarkContextType = {
  isBookmarked: [],
  addBookmark: () => {},
  removeBookmark: () => {},
};

export const BookmarkContext = createContext<BookmarkContextType>(bookmarkContextDefault);

export const useBookmark = () => {
  return useContext(BookmarkContext);
};

type ProviderProps = {
  children: ReactNode;
};

export const BookmarkProvider = ({ children }: ProviderProps) => {
  const [isBookmarked, setIsBookmarked] = useState<Props[]>([]);

  const addBookmark = (title: string) => {
    const bookmarkedItem = data.find(item => item.title === title);

    if (bookmarkedItem) {
      setIsBookmarked(prevBookmarks => [...prevBookmarks, bookmarkedItem]);
    }
  };

  const removeBookmark = (bookmarkId: string) => {
    setIsBookmarked((prevBookmarks: Props[]) => prevBookmarks.filter(bookmark => bookmark.title !== bookmarkId));
  };

  const value: BookmarkContextType = {
    isBookmarked,
    addBookmark,
    removeBookmark,
  };

  return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
};
