CREATE TABLE "accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" serial NOT NULL,
	"type" varchar(255),
	"provider" varchar(255),
	"providerAccountId" varchar(255),
	"refresh_token" text,
	"access_token" text,
	"expires_at" bigint,
	"id_token" text,
	"scope" text,
	"session_state" text,
	"token_type" text
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" serial NOT NULL,
	"expires" timestamp,
	"sessionToken" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255),
	"emailVerified" timestamp,
	"image" text
);
--> statement-breakpoint
CREATE TABLE "verification_token" (
	"identifier" text PRIMARY KEY NOT NULL,
	"token" text PRIMARY KEY NOT NULL,
	"expires" timestamp
);
