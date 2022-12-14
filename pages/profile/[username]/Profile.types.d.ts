export interface User {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string | null;
  html_url: string;
  id: number;
  location: string | null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: symbol;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
}

export interface Repos {
  id: string;
  name: string;
  private: boolean;
  language: string;
  description: string;
  created_at: string;
}
