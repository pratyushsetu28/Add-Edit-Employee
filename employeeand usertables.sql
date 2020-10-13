-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.9-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table misdev_40_50_25_06.auth_menu_detail
CREATE TABLE IF NOT EXISTS `auth_menu_detail` (
  `menu_id` varchar(5) NOT NULL,
  `auth_id` varchar(20) NOT NULL,
  `submenu1` varchar(50) NOT NULL,
  `submenu2` varchar(50) DEFAULT NULL,
  `submenu3` varchar(50) DEFAULT NULL,
  `submenu4` varchar(50) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `status` varchar(2) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.auth_types
CREATE TABLE IF NOT EXISTS `auth_types` (
  `id` varchar(20) NOT NULL,
  `type` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.deo_modules
CREATE TABLE IF NOT EXISTS `deo_modules` (
  `id` varchar(11) NOT NULL,
  `module_id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`,`module_id`),
  KEY `id` (`id`,`module_id`),
  KEY `module_id` (`module_id`),
  CONSTRAINT `deo_modules_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`),
  CONSTRAINT `deo_modules_ibfk_2` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.departments
CREATE TABLE IF NOT EXISTS `departments` (
  `id` varchar(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.designations
CREATE TABLE IF NOT EXISTS `designations` (
  `id` varchar(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.emp_basic_details
CREATE TABLE IF NOT EXISTS `emp_basic_details` (
  `emp_no` varchar(12) NOT NULL,
  `auth_id` varchar(10) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `office_no` bigint(11) DEFAULT NULL,
  `fax` bigint(11) DEFAULT NULL,
  `joining_date` date NOT NULL,
  `retirement_ext` int(11) NOT NULL,
  `retirement_date` date NOT NULL,
  `employment_nature` varchar(150) NOT NULL,
  PRIMARY KEY (`emp_no`),
  KEY `auth_id` (`auth_id`),
  KEY `auth_id_2` (`auth_id`),
  KEY `auth_id_3` (`auth_id`),
  CONSTRAINT `emp_basic_details_ibfk_1` FOREIGN KEY (`auth_id`) REFERENCES `auth_types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.emp_current_entry
CREATE TABLE IF NOT EXISTS `emp_current_entry` (
  `emp_no` varchar(12) NOT NULL DEFAULT '',
  `curr_step` int(11) NOT NULL,
  PRIMARY KEY (`emp_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.emp_education_details
CREATE TABLE IF NOT EXISTS `emp_education_details` (
  `emp_no` varchar(12) NOT NULL,
  `sno` int(11) NOT NULL,
  `exam` varchar(250) NOT NULL,
  `specialization` varchar(150) NOT NULL,
  `institute` varchar(250) NOT NULL,
  `year` varchar(4) NOT NULL,
  `grade` varchar(4) NOT NULL,
  `division` varchar(20) NOT NULL,
  PRIMARY KEY (`emp_no`,`sno`),
  CONSTRAINT `emp_education_details_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `emp_basic_details` (`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.emp_family_details
CREATE TABLE IF NOT EXISTS `emp_family_details` (
  `emp_no` varchar(11) NOT NULL,
  `sno` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `relationship` varchar(20) NOT NULL,
  `profession` varchar(150) NOT NULL,
  `present_post_addr` text NOT NULL,
  `photopath` varchar(150) NOT NULL,
  `dob` date NOT NULL,
  `active_inactive` varchar(10) NOT NULL,
  `emp_dep_allergy` varchar(30) DEFAULT NULL,
  `emp_dep_disease` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`emp_no`,`sno`),
  CONSTRAINT `emp_family_details_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `emp_basic_details` (`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.emp_last5yrstay_details
CREATE TABLE IF NOT EXISTS `emp_last5yrstay_details` (
  `emp_no` varchar(12) NOT NULL,
  `sno` int(11) NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL,
  `res_addr` text NOT NULL,
  `dist_hq_name` text NOT NULL,
  PRIMARY KEY (`emp_no`,`sno`),
  CONSTRAINT `emp_last5yrstay_details_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `emp_basic_details` (`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.emp_pay_details
CREATE TABLE IF NOT EXISTS `emp_pay_details` (
  `emp_no` varchar(12) NOT NULL,
  `pay_code` varchar(20) NOT NULL,
  `basic_pay` bigint(11) NOT NULL,
  PRIMARY KEY (`emp_no`),
  CONSTRAINT `emp_pay_details_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `emp_basic_details` (`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.emp_prev_exp_details
CREATE TABLE IF NOT EXISTS `emp_prev_exp_details` (
  `emp_no` varchar(12) NOT NULL,
  `sno` int(11) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL,
  `pay_scale` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `remarks` text,
  PRIMARY KEY (`emp_no`,`sno`),
  CONSTRAINT `emp_prev_exp_details_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `emp_basic_details` (`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.emp_reject_reason
CREATE TABLE IF NOT EXISTS `emp_reject_reason` (
  `emp_no` varchar(12) NOT NULL,
  `step` int(11) NOT NULL,
  `reason` varchar(100) NOT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`emp_no`,`created_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.emp_validation_details
CREATE TABLE IF NOT EXISTS `emp_validation_details` (
  `emp_no` varchar(12) NOT NULL,
  `profile_pic_status` varchar(10) NOT NULL,
  `basic_details_status` varchar(10) NOT NULL,
  `prev_exp_status` varchar(10) NOT NULL,
  `family_details_status` varchar(10) NOT NULL,
  `educational_status` varchar(10) NOT NULL,
  `stay_status` varchar(10) NOT NULL,
  `send_mail` varchar(20) DEFAULT NULL,
  `remark_1` varchar(20) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`emp_no`,`created_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.faculty_details
CREATE TABLE IF NOT EXISTS `faculty_details` (
  `emp_no` varchar(12) NOT NULL,
  `research_interest` text NOT NULL,
  PRIMARY KEY (`emp_no`),
  CONSTRAINT `faculty_details_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `emp_basic_details` (`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.reject_reason
CREATE TABLE IF NOT EXISTS `reject_reason` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `emp_no` varchar(50) DEFAULT NULL,
  `reason` varchar(300) DEFAULT NULL,
  `rejected_by` varchar(300) DEFAULT NULL,
  `pic` varchar(250) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(250) NOT NULL,
  `password` varchar(150) DEFAULT NULL,
  `auth_id` varchar(10) NOT NULL,
  `created_date` datetime NOT NULL,
  `status` enum('A','D') NOT NULL DEFAULT 'A',
  `remark` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `auth_id` (`auth_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`auth_id`) REFERENCES `auth_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.user_address
CREATE TABLE IF NOT EXISTS `user_address` (
  `id` varchar(12) NOT NULL,
  `line1` text NOT NULL,
  `line2` text NOT NULL,
  `city` varchar(150) NOT NULL,
  `state` varchar(150) NOT NULL,
  `pincode` bigint(20) NOT NULL,
  `country` varchar(150) NOT NULL,
  `contact_no` bigint(20) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.user_auth_types
CREATE TABLE IF NOT EXISTS `user_auth_types` (
  `id` varchar(11) NOT NULL,
  `auth_id` varchar(20) NOT NULL,
  PRIMARY KEY (`id`,`auth_id`),
  KEY `auth_id` (`auth_id`),
  CONSTRAINT `user_auth_types_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_auth_types_ibfk_2` FOREIGN KEY (`auth_id`) REFERENCES `auth_types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.user_card_details
CREATE TABLE IF NOT EXISTS `user_card_details` (
  `id` varchar(12) NOT NULL,
  `ism_card_id` varchar(20) DEFAULT NULL,
  `ism_card_issued_on` date DEFAULT NULL,
  `ism_card_valid_upto` date DEFAULT NULL,
  `sign_path` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.user_details
CREATE TABLE IF NOT EXISTS `user_details` (
  `id` varchar(11) NOT NULL,
  `salutation` varchar(5) DEFAULT NULL,
  `first_name` varchar(150) NOT NULL,
  `middle_name` varchar(150) DEFAULT NULL,
  `last_name` varchar(150) DEFAULT NULL,
  `sex` varchar(1) NOT NULL,
  `category` varchar(25) NOT NULL,
  `allocated_category` varchar(25) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(150) NOT NULL,
  `photopath` varchar(150) NOT NULL,
  `marital_status` varchar(20) NOT NULL,
  `physically_challenged` varchar(5) NOT NULL,
  `dept_id` varchar(11) NOT NULL,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dept_id` (`dept_id`),
  CONSTRAINT `user_details_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.user_other_details
CREATE TABLE IF NOT EXISTS `user_other_details` (
  `id` varchar(12) NOT NULL,
  `religion` varchar(100) NOT NULL,
  `nationality` varchar(100) NOT NULL,
  `kashmiri_immigrant` varchar(10) NOT NULL,
  `hobbies` text,
  `fav_past_time` text,
  `birth_place` varchar(150) NOT NULL,
  `mobile_no` bigint(20) NOT NULL,
  `father_name` varchar(150) NOT NULL,
  `mother_name` varchar(150) NOT NULL,
  `emp_allergy` varchar(30) DEFAULT NULL,
  `emp_disease` varchar(30) DEFAULT NULL,
  `bank_name` varchar(60) DEFAULT NULL,
  `bank_accno` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.web_faculty_info
CREATE TABLE IF NOT EXISTS `web_faculty_info` (
  `emp_no` varchar(255) NOT NULL,
  `salutation` varchar(5) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `middle_name` varchar(150) DEFAULT NULL,
  `last_name` varchar(150) DEFAULT NULL,
  `dept_name` varchar(250) NOT NULL,
  `designation` varchar(250) NOT NULL,
  `type` varchar(100) NOT NULL,
  `photopath` varchar(200) NOT NULL,
  `email` varchar(150) NOT NULL,
  `mobile_no` bigint(20) NOT NULL,
  `office_no` varchar(50) DEFAULT NULL,
  `joining_date` date NOT NULL,
  `retirement_date` date NOT NULL,
  `research_interest` text NOT NULL,
  `per_page` varchar(255) DEFAULT NULL,
  `cv_path` varchar(255) NOT NULL,
  `cv_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pub_path` varchar(255) NOT NULL,
  `pub_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`emp_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Contains imformation of all the faculties.';

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
