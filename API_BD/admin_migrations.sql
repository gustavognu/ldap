DROP TABLE IF EXISTS `admin_migrations`;
CREATE TABLE `admin_migrations` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `migration` varchar(200) NULL DEFAULT NULL,
  `batch` varchar(210) NULL DEFAULT NULL,
  `vCampo3_admin_migrations` varchar(220) NULL DEFAULT NULL,
  `vCampo4_admin_migrations` varchar(230) NULL DEFAULT NULL,
  `vCampo5_admin_migrations` varchar(240) NULL DEFAULT NULL,
  `vCampo6_admin_migrations` varchar(250) NULL DEFAULT NULL,
  `vCampo7_admin_migrations` varchar(260) NULL DEFAULT NULL,
  `vCampo8_admin_migrations` varchar(270) NULL DEFAULT NULL,
  `vCampo9_admin_migrations` varchar(280) NULL DEFAULT NULL,
  `vCampo10_admin_migrations` varchar(290) NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `b_status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

