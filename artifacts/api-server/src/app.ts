import express, { type Express } from "express";
import cors, { type CorsOptions } from "cors";
import pinoHttp from "pino-http";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes";
import { logger } from "./lib/logger";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app: Express = express();

app.set("trust proxy", 1);

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

function resolveCorsOrigin(): CorsOptions["origin"] {
  const raw = process.env.CORS_URL ?? process.env.CONS_URL;
  if (!raw) return true;

  const origins = raw.split(",").map((o) => o.trim()).filter(Boolean);
  if (origins.length === 0) return true;
  if (origins.length === 1) return origins[0];

  return (origin, callback) => {
    if (!origin || origins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error(`CORS blocked for origin: ${origin}`));
  };
}

app.use(cors({
  origin: resolveCorsOrigin(),
  credentials: true,
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

const isProduction = process.env.NODE_ENV === "production";

app.use(session({
  secret: process.env.SESSION_SECRET ?? "powersport-marketplace-secret-2024",
  resave: false,
  saveUninitialized: false,
  proxy: true,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  },
}));

// Dynamic session cookie settings for production (HTTPS) vs local testing (HTTP)
app.use((req, res, next) => {
  if (req.session && req.session.cookie) {
    const isSecure = req.secure || req.headers["x-forwarded-proto"] === "https";
    if (isSecure) {
      req.session.cookie.secure = true;
      req.session.cookie.sameSite = "none";
    } else {
      req.session.cookie.secure = false;
      req.session.cookie.sameSite = "lax";
    }
  }
  next();
});

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api", router);

export default app;
