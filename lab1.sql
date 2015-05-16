CREATE DATABASE  IF NOT EXISTS `lab1` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `lab1`;
-- MySQL dump 10.13  Distrib 5.5.43, for debian-linux-gnu (i686)
--
-- Host: 127.0.0.1    Database: lab1
-- ------------------------------------------------------
-- Server version	5.5.43-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `connections`
--

DROP TABLE IF EXISTS `connections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `connections` (
  `user1` varchar(255) DEFAULT NULL,
  `user2` varchar(255) DEFAULT NULL,
  `status1` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `connections`
--

LOCK TABLES `connections` WRITE;
/*!40000 ALTER TABLE `connections` DISABLE KEYS */;
INSERT INTO `connections` VALUES ('Ashish','darshlakhani','Invited');
/*!40000 ALTER TABLE `connections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_info`
--

DROP TABLE IF EXISTS `personal_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_info` (
  `pid` varchar(255) DEFAULT NULL,
  `f_name` varchar(255) DEFAULT NULL,
  `l_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `passw` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `passw1` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `marital_status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_info`
--

LOCK TABLES `personal_info` WRITE;
/*!40000 ALTER TABLE `personal_info` DISABLE KEYS */;
INSERT INTO `personal_info` VALUES ('1','Darshit','Lakhani','darshlakhani','LkshHlyQttMDOVT7VlyHIcfzBZrzJeREghUEpZscS2ZcSgP858Lrcy4WoONyG9Ff3hYkDmbwmB48gpn40pSewavbhiWxgrQKHVu2epbZ0ssSLEEd3sXuKBoqGUeUieFMuhOP64EzAKyVFF0uzPsOTOvx1v90hbGm//+2WjsoUbU=','darshlakhani@gmail.com','Scq2lWq7sb1EpgpmSmiH23SohwY1IWyTwA+HT1jRvwGbpOshO6alrQ7awFqI94ylwVh6DtLPyA8DEh6gCFNsSA==','USA','95112','undefined','6692219748','Single'),('2','Ameya','Khadilkar','Ameya','LeWUCfFREVN3GcSqe/pCIB1W3wbrunlN6/BOG0MYTiOZ7WLdgifjy+A29llPCVoHgbXwa++VEDMCP0DFAlC5pPmOA7mzx/QZf5MDlKWxKY8JWOOAoE3Wf15ghpshSul7zd3qXoZWglnDh6nnf0x8cwIGuZ8aOU/pe4Rr1XGx0aw=','ameya.khadilkar@gmail.com','exZ6KfONkE4s9ImGJFecKOX41dmWm82szgZTcAslfNnr3wMLtW3apGvRGFUhrtwKxAANOHnaQl25aDJVGOsbEA==','India','700026','undefined','9038425433','Single'),('3','Ashish','Pai','Ashish','pBMyRwH79iIsoTAVDx1Yt/hSY6FIVRa/mm8ZVtFXiHTi14QtCf33JKFaj5FBtDYulFE1coXwmc/I8O7A9e9FQie7KsVcSRGnqRE93CDKjTYfHqKEv1nlHECooG5cYeLpgv5IGhbE3nxA1iBchnODK93eFL0MwnYQ//op62nPn2A=','ashish.pai@sjsu.edu','xxaTmHjyMKLTzMGY9350nuPnDLFU/YUBvdotmCUo82xJ/cyVjgVFS9Q7QNqTR1Fw+s6vm90Bg3R80q83LZ2dTA==','USA','95112','undefined','6692219478','Single'),('4','Ameya','Codilkar','AmeyaK','RS5i3ZhfeuTy4P8ZTmE2cfa1puHa7MKw+93PsKM6uvvsp8H3eWu5vN9HGSCslgre5gp1NYe/sB6pPpuOEaiNII/mMOc2/2S7VYBCM72eYhF1jxJx/L8/lDjgrkhhSNXjCXC3wKjbLISFFWCFIox0LKLTyFRa2jw38N92YtKWxYU=','ameya.khadilkar1@gmail.com','3ZD8eobJUdQnOe2hvIEg4cq81k87TpPbZa+yzDLrdIoHeYha9lTjbeAAPN87F0GzzmF8MQH/GVfwXb5/E916RQ==','USA','95112','undefined','6692219478','Single');
/*!40000 ALTER TABLE `personal_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_info`
--

DROP TABLE IF EXISTS `profile_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profile_info` (
  `pid` varchar(255) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_info`
--

LOCK TABLES `profile_info` WRITE;
/*!40000 ALTER TABLE `profile_info` DISABLE KEYS */;
INSERT INTO `profile_info` VALUES ('1','MS in Software Engineering','Node.js','MS, BE','1 year Experience in PHP'),('2','Great to be on LinkedIn',NULL,NULL,NULL),('3',NULL,NULL,NULL,NULL),('4',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `profile_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-05-15 23:01:13
