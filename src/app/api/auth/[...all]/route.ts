import { auth } from "@/app/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// @ auth-handlers : export POST and GET handlers for better-auth authentication routes
export const { POST, GET } = toNextJsHandler(auth);
