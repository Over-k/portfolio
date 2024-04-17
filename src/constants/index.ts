import repositories from "./repositories.json";
import posts from "./dev.json";
import type { ReposType, PostsType } from "../types"
const devUsername = "overk";
const githubUsername = "over-k";

async function fetchRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${githubUsername}/repos`)
    const data = await res.json();
    return data;
  } catch (error) {
    return repositories;
  }
}
async function fetchPosts() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${devUsername}`)
    const data = await res.json();
    return data;
  } catch (error) {
    return posts;
  }
}
export const ReposData: ReposType = await fetchRepos();
export const PostsData: PostsType = await fetchPosts();

