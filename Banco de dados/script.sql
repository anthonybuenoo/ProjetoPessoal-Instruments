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

select*from usuario;	
select*from instrumento;
      
 -- Count para a contagem de instruemntos selecionados   
select count(nome) as 'instrumentos' from instrumento group by nome order by nome desc;
truncate instrumento;

-- Inserção de valores manualmente
 INSERT INTO instrumento ( nome) VALUES ('guitarra'), ('bateria'), ('bateria'), ('teclado'), ('teclado');

 
 
 -- Cont para a contagem de musicos
 select count(musico) as 'musicobd' from usuario where musico= 'sim';
  select count(nome) as 'baixobd' from instrumento where nome= 'violao';
  
