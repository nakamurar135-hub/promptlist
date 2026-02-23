ALTER TABLE `subscriptions` ADD `stripeSubscriptionId` varchar(64);--> statement-breakpoint
ALTER TABLE `subscriptions` ADD `stripePriceId` varchar(64);--> statement-breakpoint
ALTER TABLE `users` ADD `stripeCustomerId` varchar(64);