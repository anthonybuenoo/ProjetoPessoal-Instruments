create DATABASE instruments;

USE instruments;
  
CREATE TABLE instrumento(
	idinstrumento int not null primary key,
	nome varchar(45)
);

insert into instrumento values 
(1, 'Guitarra'),
(2, 'Violão'),
(3, 'Bateria'),
(4, 'Baixo'),
(5, 'Teclado');


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    data_nascimento DATE,
	musico char(3),
    check ( musico = 'sim' or musico = 'nao'),
    fk_instrumentosFavorito int ,
    foreign key (fk_instrumentosFavorito) references instrumento(idinstrumento)
);


update usuario set fk_instrumentosFavorito = 3 where id = 1;
select*from usuario;

SELECT * FROM usuario u
	left join instrumento i 
		on u.fk_instrumentosFavorito = i.idinstrumento;

  
