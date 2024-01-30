CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    preco NUMERIC(10, 2)
);

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    data_cadastro DATE
);

CREATE TABLE vendas (
    id SERIAL PRIMARY KEY,
    id_cliente INTEGER REFERENCES clientes(id),
    data_venda DATE,
    total NUMERIC(10, 2)
);

CREATE TABLE itens_venda (
    id SERIAL PRIMARY KEY,
    id_venda INTEGER REFERENCES vendas(id),
    id_produto INTEGER REFERENCES produtos(id),
    quantidade INTEGER,
    preco_unitario NUMERIC(10, 2)
);

CREATE OR REPLACE FUNCTION SomarClientesCadastrados(data_pesquisa DATE)
RETURNS INTEGER AS
$$
DECLARE
    total_clientes INTEGER;
BEGIN
    SELECT COUNT(*)
    INTO total_clientes
    FROM clientes
    WHERE data_cadastro = data_pesquisa;

    RETURN total_clientes;
END;
$$ LANGUAGE plpgsql;


SELECT SomarClientesCadastrados('2023-12-05');
