CREATE DATABASE instruments;

USE instruments;
  
CREATE TABLE instrumento(
	idinstrumento int not null primary key auto_increment,
	nome varchar(45)
);

insert into instrumento (nome) values 
('Baixo'),
('Guitarra'),
('Violão'),
('Teclado'),
('Bateria');


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    data_nascimento DATE,
	musico char(3),
    check ( musico = 'sim' or musico = 'nao')
);

create table usuario_instrumento (
fk_usuario int,
fk_instrumento int,
foreign key (fk_instrumento) references instrumento(idinstrumento),
foreign key (fk_usuario) references usuario(id)
);

update usuario set fk_instrumentosFavorito = 1 where id = 4;

select*from usuario;	
select*from instrumento;

SELECT * FROM usuario u
	left join instrumento i 
		on u.fk_instrumentosFavorito = i.idinstrumento;
	
    
select count(nome) as 'instrumentos' from instrumento group by nome order by nome desc;

 INSERT INTO instrumento ( nome) VALUE ('guitarra');
 INSERT INTO instrumento ( nome) VALUE ('guitarra');
 
 
 
 select count(musico) as 'musicobd' from usuario where musico= 'sim';