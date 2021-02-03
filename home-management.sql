-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: home-management
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chores`
--

DROP TABLE IF EXISTS `chores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chores` (
  `Chore_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Chore_Description` varchar(45) NOT NULL,
  `Chore_Creation_Date` date NOT NULL,
  `Assigned_Family_Member` bigint unsigned NOT NULL,
  PRIMARY KEY (`Chore_ID`),
  UNIQUE KEY `Chore_ID_UNIQUE` (`Chore_ID`),
  KEY `Assigned_Family_Member_idx` (`Assigned_Family_Member`),
  CONSTRAINT `Assigned_Family_Member` FOREIGN KEY (`Assigned_Family_Member`) REFERENCES `family_members` (`Family_Member_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chores`
--

LOCK TABLES `chores` WRITE;
/*!40000 ALTER TABLE `chores` DISABLE KEYS */;
INSERT INTO `chores` VALUES (1,'Tell everyone else what to do','2021-01-19',1),(12,'Blah Blah','2021-01-19',2),(13,'asdfasdf','2021-01-19',2),(14,'asdfasdf','2021-01-19',2),(15,' asdasd','2021-01-19',3),(16,' assdfasdf','2021-01-19',2),(17,'asdfasdfasdfasdfzzzzzz','2021-01-19',3),(18,'       a','2021-02-02',2),(19,' aaaa','2021-02-02',3);
/*!40000 ALTER TABLE `chores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family_members`
--

DROP TABLE IF EXISTS `family_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `family_members` (
  `Family_Member_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Family_Member_Name` varchar(45) NOT NULL,
  `Family_Member_Nickname` varchar(45) NOT NULL,
  `Family_Member_Description` varchar(45) NOT NULL,
  PRIMARY KEY (`Family_Member_ID`),
  UNIQUE KEY `Family_Member_ID_UNIQUE` (`Family_Member_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family_members`
--

LOCK TABLES `family_members` WRITE;
/*!40000 ALTER TABLE `family_members` DISABLE KEYS */;
INSERT INTO `family_members` VALUES (1,'Ben','Ben de kid','King of the house'),(2,'Avi','Avi de teacher','King of the class'),(3,'Mor','Mor de drinker','Queen of the class');
/*!40000 ALTER TABLE `family_members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-03 13:56:06
