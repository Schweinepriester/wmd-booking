-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 06. Dez 2013 um 01:52
-- Server Version: 5.6.11
-- PHP-Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `wmd_booking`
--
CREATE DATABASE IF NOT EXISTS `wmd_booking` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `wmd_booking`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `event`
--

CREATE TABLE IF NOT EXISTS `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `starttime` time NOT NULL,
  `endtime` time NOT NULL,
  `author` varchar(50) NOT NULL,
  `notes` text NOT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Daten für Tabelle `event`
--

INSERT INTO `event` (`id`, `title`, `date`, `starttime`, `endtime`, `author`, `notes`, `version`) VALUES
(9, 'Weihnachten', '2013-12-24', '12:00:00', '22:00:00', 'ChangeTest', 'Partypartyparty!!!', 4),
(13, 'Bla', '2013-12-29', '15:00:00', '17:00:00', 'Frontend!', 'asdasd', 1),
(14, 'CreateTest', '2013-12-20', '15:00:00', '15:00:50', 'Frontend!', 'Haaaallo!', 1),
(15, 'AuthorTest', '2013-12-13', '17:00:42', '17:01:00', 'Kai', 'Yessss', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
