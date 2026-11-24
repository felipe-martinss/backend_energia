# Gestão de Consumo de Energia

## Descrição
O projeto **Gestão de Consumo de Energia** tem como objetivo gerenciar e monitorar o consumo de energia elétrica de diferentes equipamentos e locais.

O sistema permite realizar o cadastro de usuários, registrar informações de consumo, consultar, atualizar e excluir registros, além de calcular a média geral de consumo em kWh.

---

## Diagrama de Classes


---

## Tecnologias
* JavaScript
* Node.js
* Express
* MySQL
* MySQL2
* Insomnia

---

## Passo a passo para testar

### 1. Clonar o repositório
```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acessar a pasta do projeto
```bash
cd NOME_DO_PROJETO
```

### 3. Instalar as dependências
```bash
npm install mysql2, express, cors
```

### 4. Configurar o banco de dados
* Abrir o MySQL.
* Executar o script SQL disponibilizado no projeto.
* O script criará o banco de dados `gestao_consumo`, as tabelas `usuario` e `consumo` e inserirá dados para testes.

### 5. Iniciar o servidor
```bash
npm run dev
```

O servidor estará disponível em:
```text
http://localhost:3000
```

### 6. Testar a API no Insomnia
Utilizar o Insomnia para realizar requisições HTTP e testar as funcionalidades do sistema.

---


## Testes do Insomnia
