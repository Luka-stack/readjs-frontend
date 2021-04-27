import Head from "next/head";
import React, { useEffect, useState } from "react";
import Axios from "axios";

import { Post } from "../types";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    Axios.get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-12">
      <Head>
        <title>ReadJS: The front page of the internet</title>
      </Head>

      <div className="container flex pt-4">
        {/* Posts */}
        <div className="w-160">
          {posts.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>

        {/* Sidebar */}
      </div>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     try {
//       const res = await Axios.get('/post')

//       return { props: { posts: res.data }}
//     } catch (error) {
//       return { props: { error: 'Someting went wrong' }}
//     }
// }
