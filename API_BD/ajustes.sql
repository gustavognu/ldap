DROP TABLE IF EXISTS `ajustes`;
CREATE TABLE `ajustes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `honda` varchar(200) NULL DEFAULT NULL,
  `civic` varchar(210) NULL DEFAULT NULL,
  `motores` varchar(220) NULL DEFAULT NULL,
  `vtec` varchar(230) NULL DEFAULT NULL,
  `hector` varchar(240) NULL DEFAULT NULL,
  `paquito` varchar(250) NULL DEFAULT NULL,
  `vCampo7_ajustes` varchar(260) NULL DEFAULT NULL,
  `vCampo8_ajustes` varchar(270) NULL DEFAULT NULL,
  `vCampo9_ajustes` varchar(280) NULL DEFAULT NULL,
  `vCampo10_ajustes` varchar(290) NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `b_status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

