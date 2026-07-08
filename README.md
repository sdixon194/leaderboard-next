## Leaderboard
(Exact name TBD)

This is an open source leaderboard application you can use to track scores amongst your friend group as you compete to see who is the best. It's currently in what I'd call a pre-alpha state. 

<img width="719" height="530" alt="Screenshot 2026-07-08 at 9 40 46 AM" src="https://github.com/user-attachments/assets/9010c21c-fdd9-49a8-a955-d9b2df645e04" />

## Getting Started

- First, sign up for a new account
- In your dashboard, create a new league.
- From your league, create a new game and set the duration for when the competition should end.
- Invite other users via their email.
- Start submitting scores!

## Current State

This is in a pre-alpha state. The core application works, but many basic features are still under development. For example, there's no way to delete or edit a game or leaderboard, or a way to reset user password. Check out the GitHub issues to follow the status of various feature development. 

## Developing Locally

- Setup your database by creating a new Postgres DB in Docker.
- Add an .env file to the root of the project and add your DATABASE_URL, e.g `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/leaderboard-next"`
- Run `pnpm dev` to start the application.
- Open [http://localhost:3000](http://localhost:3000) to pull up the application. 

