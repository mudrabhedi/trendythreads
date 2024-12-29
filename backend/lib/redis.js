import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();
export const redis = new Redis("rediss://default:AWBdAAIjcDEyYjcxNTc1NjdkZDM0Y2Q3YjliMjhhYzdkOWQ4NmRmMHAxMA@precious-coyote-24669.upstash.io:6379");
