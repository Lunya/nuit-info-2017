CREATE DATABASE cookie;


CREATE TABLE comment (
	id 		INT(11) 		NOT NULL AUTO_INCREMENT PRIMARY KEY,
	pseudo 	VARCHAR(25) 	NOT NULL,
	mail 	VARCHAR(50),
	text	VARCHAR(500) 	NOT NULL,
	c_date  DATE	NOT NULL
);

CREATE TABLE contact (
	id 		INT(11) 	NOT NULL AUTO_INCREMENT PRIMARY KEY,
	mail 	VARCHAR(25) NOT NULL,
	subject VARCHAR(25) NOT NULL,
	content	VARCHAR(500) NOT NULL,
	c_date  DATE	NOT NULL
);


INSERT INTO `comment` (`id`, `pseudo`, `mail`, `text`, `c_date`) VALUES (NULL, 'Alpha', NULL, 'J\'ai vu un accident de taxi à Paris !', '2017-12-03'), (NULL, 'aze', 'a@b.fr', 'Faire attention à mettre les femmes enceinte en PLS', '2017-12-06'), (NULL, 'Mya', 'M@b.fr', 'Si les policiers ne réagissent pas assez vite, n\'hésitez pas à contacter la gendarmerie.', '2017-10-11'), (NULL, 'Na', '', 'mya, je confirme', '2017-10-19')


INSERT INTO `contact` (`id`, `mail`, `subject`, `content`, `c_date`) VALUES (NULL, 'me@repondre.fr', 'Message 5', 'Pouvez-vous effacer ce message ? Il est insultant.', '2017-12-07'), (NULL, 'a@aa.fr', 'Love', 'J\'adore votre site ! Continuez comme ça.', '2017-12-04'), (NULL, 'aaaa@aa.fr', 'Job', 'Bonjour, recrutez-vous des web designers ?', '2017-10-04')
