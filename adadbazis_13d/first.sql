-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: first
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

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
-- Table structure for table `adatok`
--

DROP TABLE IF EXISTS `adatok`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adatok` (
  `lakcim` int(11) NOT NULL AUTO_INCREMENT,
  `hazszm` int(11) NOT NULL,
  `orszag` varchar(45) NOT NULL,
  `varos` varchar(45) NOT NULL,
  `utca` varchar(45) NOT NULL,
  PRIMARY KEY (`lakcim`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adatok`
--

LOCK TABLES `adatok` WRITE;
/*!40000 ALTER TABLE `adatok` DISABLE KEYS */;
INSERT INTO `adatok` VALUES (1,69,'Nigéria','Cegléd','Elm utca');
/*!40000 ALTER TABLE `adatok` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tanulok`
--

DROP TABLE IF EXISTS `tanulok`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tanulok` (
  `idtanulok` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `kor` int(11) DEFAULT NULL,
  `osztaly` varchar(45) DEFAULT NULL,
  `nem` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idtanulok`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tanulok`
--

LOCK TABLES `tanulok` WRITE;
/*!40000 ALTER TABLE `tanulok` DISABLE KEYS */;
INSERT INTO `tanulok` VALUES (1,'Peter','Lantos',69,'13/d','férfi'),(2,'Dominik','Fodor',70,'13/d','férfi'),(3,'Raboczki','Gergo',60,'13/d','férfi'),(4,'Lakatos','Retsuko',100,'13/d','nő'),(5,'Varga','Irén',12,'13/d','nő');
/*!40000 ALTER TABLE `tanulok` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
