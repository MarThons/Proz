CREATE OR REPLACE PROCEDURE comprasDia()
AS
$$
BEGIN
    SELECT produto, quantidade INTO produto_resultado, quantidade_resultado
    FROM transacoes;
END;
$$ LANGUAGE plpgsql;


call comprasDia();
