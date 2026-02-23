-- subscriptionsテーブルにStripe関連カラムを追加し、userIdにUNIQUE制約を追加する
ALTER TABLE `subscriptions`
  ADD COLUMN `stripeCustomerId` varchar(255),
  ADD COLUMN `stripeSubscriptionId` varchar(255),
  ADD UNIQUE INDEX `subscriptions_userId_unique` (`userId`);
