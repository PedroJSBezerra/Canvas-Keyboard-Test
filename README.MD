*GERENCIAMENTO DE ESTOQUE*

SuperUser
StockUser
SellerUser

***SuperUser**
produto:{
  id,
  nome,
  valor_de_compra,
  valor_de_venda,
  quantidade,
  validade,
  local_no_estoque,
  nota_de_compra,
  historico_de_compra,

  cadastro:{
    id,
    nome,
    local_no_estoque,
  },

  entrada:{
    valor_de_compra,
    valor_de_venda,
    quantidade_comprada,
  }
}

nota_de_compra:{
  fornecedor,
  numero_da_nota,
  data_de_compra, 
  valor_da_nota, 
  quantidade_de_items,
}

historico_de_compra:{
  nota, data, valor, quantidade
}

fornecedor:{
  nome,
  cnpj/cpf,
  endereço,
  contato
}