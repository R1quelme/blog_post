import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface PostContextData {
  posts: PostCardProps[];
  createPost: (post: PostCardProps) => void;
  removePost: (postId: string) => void;
  editPostTitle: (postId: string, newTitle: string) => void;
  savePosts: (posts: PostCardProps[]) => void;
}

interface PostProviderData {
  children: ReactNode;
}

export interface PostCardProps {
  // Photo: object;
  // userName: string;
  title: string;
  content: string;
  date: string;
  id: string;
}

const dataKey = `@blogpost:posts`;

export const PostContext = createContext({} as PostContextData);

export function PostProvider({ children }: PostProviderData) {
  const [posts, setPosts] = useState<PostCardProps[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  function createPost(post: PostCardProps) {
    const newPosts = [...posts, post];
    setPosts(newPosts);
    savePosts(newPosts);
  }

  function removePost(postId: string) {
    const newPosts = posts.filter(post => post.id !== postId);
    setPosts(newPosts);
    savePosts(newPosts);
  }

  function editPostTitle(postId: string, newTitle: string) {
    const updatedPosts = posts.map((post) => ({
      ...post,
      title: post.id === postId ? newTitle : post.title,
    }));
    setPosts(updatedPosts);
    savePosts(updatedPosts)
  }

  async function savePosts(posts: PostCardProps[]) {
    await AsyncStorage.setItem(dataKey, JSON.stringify(posts));
    console.log(posts);
  }

  async function loadPosts() {
    const response = await AsyncStorage.getItem(dataKey);
    const posts = response ? (JSON.parse(response) as PostCardProps[]) : [];

    setPosts(posts);
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        createPost,
        removePost,
        editPostTitle,
        savePosts
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
