import { sql } from "drizzle-orm";
import { pgTable, text, varchar, decimal, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Existing users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Meme coins data
export const memeCoins = pgTable("meme_coins", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  symbol: text("symbol").notNull().unique(),
  name: text("name").notNull(),
  marketCap: decimal("market_cap", { precision: 20, scale: 2 }),
  price: decimal("price", { precision: 20, scale: 8 }),
  change24h: decimal("change_24h", { precision: 10, scale: 2 }),
  description: text("description"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

// NFT collections data
export const nftCollections = pgTable("nft_collections", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  floorPrice: decimal("floor_price", { precision: 10, scale: 4 }),
  volume24h: decimal("volume_24h", { precision: 20, scale: 4 }),
  totalSupply: integer("total_supply"),
  holders: integer("holders"),
  description: text("description"),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Real estate properties (Homebase data)
export const realEstateProperties = pgTable("real_estate_properties", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  location: text("location").notNull(),
  propertyValue: decimal("property_value", { precision: 20, scale: 2 }),
  amountRaised: decimal("amount_raised", { precision: 20, scale: 2 }),
  totalInvestors: integer("total_investors"),
  minInvestment: decimal("min_investment", { precision: 10, scale: 2 }),
  fundingTimeWeeks: integer("funding_time_weeks"),
  avgInvestment: decimal("avg_investment", { precision: 10, scale: 2 }),
  nonAccreditedInvestors: integer("non_accredited_investors"),
  status: text("status").notNull().default("active"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Ecosystem statistics
export const ecosystemStats = pgTable("ecosystem_stats", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  statName: text("stat_name").notNull().unique(),
  statValue: text("stat_value").notNull(),
  statUnit: text("stat_unit"),
  category: text("category").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Create insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMemeCoinSchema = createInsertSchema(memeCoins).omit({
  id: true,
  createdAt: true,
});

export const insertNftCollectionSchema = createInsertSchema(nftCollections).omit({
  id: true,
  createdAt: true,
});

export const insertRealEstatePropertySchema = createInsertSchema(realEstateProperties).omit({
  id: true,
  createdAt: true,
});

export const insertEcosystemStatSchema = createInsertSchema(ecosystemStats).omit({
  id: true,
  updatedAt: true,
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertMemeCoin = z.infer<typeof insertMemeCoinSchema>;
export type MemeCoin = typeof memeCoins.$inferSelect;

export type InsertNftCollection = z.infer<typeof insertNftCollectionSchema>;
export type NftCollection = typeof nftCollections.$inferSelect;

export type InsertRealEstateProperty = z.infer<typeof insertRealEstatePropertySchema>;
export type RealEstateProperty = typeof realEstateProperties.$inferSelect;

export type InsertEcosystemStat = z.infer<typeof insertEcosystemStatSchema>;
export type EcosystemStat = typeof ecosystemStats.$inferSelect;
